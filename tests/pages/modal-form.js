import { Selector, t } from 'testcafe';
import Student from 'F:\\TestCafe_TestDive\\tests\\student\\student.js'; 

export default class ModalForm {
    constructor() {
        this.listOfValuesModalForm = Selector('table tbody tr td:nth-child(2)');
    }

    async checkValuesModalForm(student) {
        const allTextContentsValuesDataList = await this.getTextContentList();

        await this.assertNameMatches(student, allTextContentsValuesDataList[0]);
        await this.assertEmailMatches(student, allTextContentsValuesDataList[1]);
        await this.assertGenderMatches(student, allTextContentsValuesDataList[2]);
        await this.assertMobileMatches(student, allTextContentsValuesDataList[3]);
        await this.assertDateOfBirthMatches(student, allTextContentsValuesDataList[4]);
        await this.assertSubjectsMatches(student, allTextContentsValuesDataList[5]);
        await this.assertHobbiesMatches(student, allTextContentsValuesDataList[6]);
        await this.assertPictureMatches(student, allTextContentsValuesDataList[7]);
        await this.assertAddressMatches(student, allTextContentsValuesDataList[8]);
        await this.assertStateAndCityMatches(student, allTextContentsValuesDataList[9]);
    }

    async getTextContentList() {
        const allTextContentsValuesDataList = [];
        const tableCellsList = this.listOfValuesModalForm;

        for (let i = 0; i < tableCellsList.count; i++) {
            allTextContentsValuesDataList.push(await tableCellsList.nth(i).textContent);
        }

        return allTextContentsValuesDataList;
    }

    async assertNameMatches(student, textContent) {
        const nameParts = textContent.split(' ');
        await t.expect(nameParts[0]).eql(student.firstName, 'First Name doesn`t match.');
        await t.expect(nameParts[1]).eql(student.lastName, 'Last Name doesn`t match.');
    }

    async assertEmailMatches(student, textContent) {
        await t.expect(textContent).eql(student.email, 'Email doesn`t match.');
    }

    async assertGenderMatches(student, textContent) {
        await t.expect(textContent).eql(student.gender, 'Gender doesn`t match.');
    }

    async assertMobileMatches(student, textContent) {
        await t.expect(textContent).eql(student.mobileNumber, 'Mobile doesn`t match.');
    }

    async assertDateOfBirthMatches(student, textContent) {
        const arr = textContent.split(',');
        const str = arr[0].trim().substring(0, 6);
        await t.expect(str + ' ' + arr[1].trim()).eql(student.dateOfBirth, 'Date Of Birth doesn`t match.');
    }

    async assertSubjectsMatches(student, textContent) {
        const subjectsList = textContent.split(',').map((subject) => subject.trim());
        await t.expect(subjectsList).eql(student.subjects, 'Subjects doesn`t match.');
    }

    async assertHobbiesMatches(student, textContent) {
        const arr = textContent.split(',').map((hobby) => hobby.trim());
        const allValues = ['Sports', 'Reading', 'Music'];
        const listBool = allValues.map((value) => arr.includes(value));
        await t.expect(listBool).eql(student.hobbies, 'Hobbies doesn`t match.');
    }

    async assertPictureMatches(student, textContent) {
        await t.expect(student.picturePath.includes(textContent)).ok('Picture doesn`t match.');
    }

    async assertAddressMatches(student, textContent) {
        await t.expect(textContent).eql(student.currentAddress, 'Address doesn`t match.');
    }

    async assertStateAndCityMatches(student, textContent) {
        const arr = textContent.split(' ');
        await t.expect(arr[0]).eql(student.state, 'State doesn`t match.');
        await t.expect(arr[1]).eql(student.city, 'City doesn`t match.');
    }
}
