import { Selector, t } from 'testcafe';
import ModalForm from 'F:\\TestCafe_TestDive\\tests\\pages\\modal-form.js';

class DemoqaPage {
    constructor() {
        this.logo = Selector('*/header/a/img');
        this.practiceFormText = Selector('*/div[@class="main-header"]');
        this.practiceFormTextBackground = Selector('*/div[@class="container playgound-body"]/div[contains(@class, "pattern-backgound")]');
        this.formName = Selector('div.practice-form-wrapper > h5');
        this.nameLabel = Selector('*[id="userName-label"]');
        this.emailLabel = Selector('*[id="userEmail-label"]');
        this.genderLabel = Selector('*/div[contains(text(), "Gender")]');
        this.mobileLabel = Selector('*[id="userNumber-label"]');
        this.dateOfBirthLabel = Selector('*[id="dateOfBirth-label"]');
        this.subjectsLabel = Selector('*[id="subjects-label"]').withText('Subjects');
        this.hobbiesLabel = Selector('*[id="subjects-label"]').withText('Hobbies');
        this.pictureLabel = Selector('*[id="subjects-label"]').withText('Picture');
        this.currentAddressLabel = Selector('*[id="currentAddress-label"]');
        this.stateAndCityLabel = Selector('*[id="stateCity-label"]');
        this.firstNameInput = Selector('*[id="firstName"]');
        this.lastNameInput = Selector('*[id="lastName"]');
        this.emailInput = Selector('*[id="userEmail"]');
        this.maleRadioBtn = Selector('#gender-radio-1');
        this.femaleRadioBtn = Selector('#gender-radio-2');
        this.otherRadioBtn = Selector('#gender-radio-3');
        this.mobileInput = Selector('*[id="userNumber"]');
        this.dateOfBirthInput = Selector('*[id="dateOfBirthInput"]');
        this.subjectsInput = Selector('.subjects-auto-complete__value-container');
        this.subjectsInputInside = Selector('*/div[contains(@class, "subjects-auto-complete__v")]/div[contains(@class, "-placeholder")]');
        this.mathsSubject = Selector('*[id="react-select-2-option-0"]');
        this.sportsCheckBox = Selector('#hobbies-checkbox-1').withAttribute("value", "1");
        this.readingCheckBox = Selector('#hobbies-checkbox-2').withAttribute("value", "2");
        this.musicCheckBox = Selector('#hobbies-checkbox-3').withAttribute("value", "3");
        this.selectPictureLabel = Selector('*/label').withAttribute('for', 'uploadPicture');
        this.chooseFileInput = Selector('*[id="uploadPicture"]');
        this.currentAddressTextArea = Selector('*[id="currentAddress"]');
        this.selectStateDropDown = Selector('*[id="state"]');
        this.selectStatePlaceholderDropDown = Selector('*[id="state"]').find('div').withAttribute('class', '-placeholder');
        this.selectStateArrowBlockDropDown = Selector('*[id="state"]').find('div').withAttribute('class', '-indicatorContainer');
        this.selectCityDropDown = Selector('*[id="city"]');
        this.selectCityPlaceholderDropDown = Selector('*[id="city"]').find('div').withAttribute('class', '-placeholder');
        this.selectCityArrowBlockDropDown = Selector('*[id="city"]').find('div').nth(1).withAttribute('class', '-control').find('div').nth(1);
        this.monthBlockCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', '__month-container');
        this.monthHeaderBlockCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'react-datepicker__header');
        this.monthYearTitleCalendar = Selector('*/div').withAttribute('class', 'react-datepicker__header').find('div').withAttribute('class', 'month');
        this.monthDropDownCalendar = Selector('*[id="dateOfBirth"]').find('select').withAttribute('class', 'react-datepicker__month-select');
        this.listOfMonthDropDownCalendar = Selector('*[id="dateOfBirth"]').find('select').withAttribute('class', 'react-datepicker__month-select').find('option');
        this.januaryDropDownCalendar = Selector('*[id="dateOfBirth"]').find('select').find('option').withAttribute('value', '0');
        this.yearDropDownCalendar = Selector('*[id="dateOfBirth"]').find('select').withAttribute('class', 'react-datepicker__year-select');
        this._1990DropDownCalendar = Selector('*[id="dateOfBirth"]').find('select').find('option').withAttribute('value', '1990');
        this.listOfYearsDropDownCalendar = Selector('*[id="dateOfBirth"]').find('select').find('option');
        this.previousMonthArrowCalendar = Selector('*[id="dateOfBirth"]').find('button').withText('Previous Month');
        this.nextMonthArrowCalendar = Selector('*[id="dateOfBirth"]').find('button').withText('Next Month');
        this.dayNamesBlockCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', '__day-names');
        this.suDayCalendar = Selector('*[id="dateOfBirth"]').find('div').withText('Su');
        this.moDayCalendar = Selector('*[id="dateOfBirth"]').find('div').withText('Mo');
        this.tuDayCalendar = Selector('*[id="dateOfBirth"]').find('div').withText('Tu');
        this.weDayCalendar = Selector('*[id="dateOfBirth"]').find('div').withText('We');
        this.thDayCalendar = Selector('*[id="dateOfBirth"]').find('div').withText('Th');
        this.frDayCalendar = Selector('*[id="dateOfBirth"]').find('div').withText('Fr');
        this.saDayCalendar = Selector('*[id="dateOfBirth"]').find('div').withText('Sa');
        this.weeksSndDaysBlockCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('role', 'listbox');
        this.currentDayCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'selected');
        this.dayOfFirstRowWeekCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'react-datepicker__month').find('div').nth(0).find('div').nth(4);
        this.dayOfSecondRowWeekCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'react-datepicker__month').find('div').nth(1).find('div').nth(4);
        this.dayOfThirdRowWeekCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'react-datepicker__month').find('div').nth(2).find('div').nth(4);
        this.dayOfFourthRowWeekCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'react-datepicker__month').find('div').nth(3).find('div').nth(4);
        this.dayOfFifthRowWeekCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'react-datepicker__month').find('div').nth(4).find('div').nth(4);
        this.dayOfSixthRowWeekCalendar = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'react-datepicker__month').find('div').nth(5).find('div').nth(4);
        this.listOfDaysChosenMonth = Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'react-datepicker__month').find('div').find('div').filter(item => !item.hasClass('react-datepicker__day--outside-month'));
        this.ncrStateDropDown = Selector('*[id="react-select-3-option-0"]').withText('NCR');
        this.uttarPradeshStateDropDown = Selector('*[id="react-select-3-option-1"]').withText('Uttar Pradesh');
        this.haryanaStateDropDown = Selector('*[id="react-select-3-option-2"]').withText('Haryana');
        this.rajasthanStateDropDown = Selector('*[id="react-select-3-option-3"]').withText('Rajasthan');
        this.agraCityDropDown = Selector('*[id="react-select-4-option-0"]').withText('Delhi');
        this.lucknowCityDropDown = Selector('*[id="react-select-4-option-1"]').withText('Lucknow');
        this.merrutCityDropDown = Selector('*[id="react-select-4-option-2"]').withText('Merrut');
        // this.submitBtn = Selector('*[id="submit"]');
        this.submitBtn = Selector('#submit');
    }


    async checkPageTitle() {
        const  headerSelector = this.formName;
        const actualText = await headerSelector.innerText;
        console.log("actualText "+ actualText);
        return actualText;
    }

    async closeDemoqaPage() {
        await t.closeWindow();
    }

    async fillFirstNameInput(firstName) {
        await t.typeText(this.firstNameInput, firstName);
    }

    async fillLastNameInput(lastName) {
        await t.typeText(this.lastNameInput, lastName);
    }

    async fillEmailInput(email) {
        await t.typeText(this.emailInput, email);
    }

    async chooseGenderRadioBtn(gender) {
        if (gender === 'Male') {
            await t.click(this.maleRadioBtn);
        } else if (gender === 'Female') {
            await t.click(this.femaleRadioBtn);
        } else if (gender === 'Other') {
            await t.click(this.otherRadioBtn);
        }
    }

    async fillMobileInput(mobileNumber) {
        await t.typeText(this.mobileInput, mobileNumber);
    }

    async selectDateOfBirthInput(dateOfBirth) {
        const dateParts = dateOfBirth.split(' ');
        console.log("dateParts "+ dateParts);
        const day = dateParts[0];
        console.log("day "+ day);
        const month = dateParts[1];
        console.log("month "+ month);
        const year = dateParts[2];
        console.log("year "+ year);

        await t.click(this.dateOfBirthInput);
        await t.click(this.yearDropDownCalendar);
        await t.click(Selector('#dateOfBirth').find('select option').withAttribute('value', year));
        await t.click(this.monthDropDownCalendar);

        for (let i = 0; i < await this.listOfMonthDropDownCalendar.count; i++) {
            const option = this.listOfMonthDropDownCalendar.nth(i);

            if (typeof (await option.innerText) === 'string' && (await option.innerText).substring(0, 3) === month) {
                await t.click(option);
                break;
            }
        }
   
        await t.click(Selector('*[id="dateOfBirth"]').find('div').withAttribute('class', 'react-datepicker__month')
        .find('div').withAttribute('role', 'option').withText(day));
    }

    async fillSubjectInput(subjects) {
        await t.click(this.subjectsInput);
        await t.typeText(Selector('#subjectsInput'), subjects);
        await t.click(this.mathsSubject);
    }

    async chooseHobbiesCheckBox(hobbies) {


        const counter = await Selector('input.custom-control-input[type="checkbox"]').count;
        console.log("counter "+counter);
        if(counter===3){
            const checkboxes = [
                this.sportsCheckBox,
                this.readingCheckBox,
                this.musicCheckBox
            ];
        
            if (hobbies.includes('Sports')) {
                await t.click(this.sportsCheckBox);
            }
            if (hobbies.includes('Reading')) {
                await t.click(this.readingCheckBox);
            }
            if (hobbies.includes('Music')) {
                await t.click(this.musicCheckBox);
            }
        }
    }

    async clickSelectPictureBtn(picturePath) {
        await t.setFilesToUpload(this.chooseFileInput, picturePath);
    }

    async fillCurrentAddressTextArea(currentAddress) {
        await t.typeText(this.currentAddressTextArea, currentAddress);
    }

    async selectStateInput(state) {
        await t.click(this.selectStateDropDown);
        const options = Selector('[id^="react-select-3-option"]');
        const optionCount = await options.count;
        for (let i = 0; i < optionCount; i++) {
            const option = options.nth(i);
            const optionText = await option.textContent;
            if (optionText === state) {
                await t.click(option);
                break;
            }
        }
    }
    
    async selectCityInput(city) {
        await t.click(this.selectCityDropDown);
        const options = Selector('[id^="react-select-4-option"]');
        const optionCount = await options.count;
        for (let i = 0; i < optionCount; i++) {
            const option = options.nth(i);
            const optionText = await option.textContent;
            if (optionText === city) {
                await t.click(option);
                break;
            }
        }
    }
     

    async clickSubmitBtn() {

        await t.eval(() => {
            document.body.style.zoom = '0.75';
        });
        await t.wait(8000);
        await t.expect(this.submitBtn, {timeout: 5000}).ok();
        // const elementWithId = Selector(id => {
        //     return document.getElementById(id);
        // });
        // await t.wait(5000);
        // await t.scroll(0, elementWithId);
        // await t.scrollIntoView(elementWithId);
        // await t.wait(5000);
        // await t.click(elementWithId('submit'));

        await t
        .click(this.submitBtn)
        .wait(5000);
        return new ModalForm();
    }

    async fillAllMandatoryFields(student) {
        await this.fillFirstNameInput(student.firstName);
        await this.fillLastNameInput(student.lastName);
        await this.fillEmailInput(student.email);
        await this.chooseGenderRadioBtn(student.gender);
        await this.fillMobileInput(student.mobileNumber);
        await this.selectDateOfBirthInput(student.dateOfBirth);
        for (const subject of student.subjects) {
            await this.fillSubjectInput(subject);
        }
        await this.chooseHobbiesCheckBox(student.hobbies);
        await this.clickSelectPictureBtn(student.picturePath);
        await this.fillCurrentAddressTextArea(student.currentAddress);
        await this.selectStateInput(student.state);
        await this.selectCityInput(student.city);
    }
}

export default DemoqaPage;
