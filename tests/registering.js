import { ClientFunction } from 'testcafe';
import { t } from 'testcafe';
import ModalForm from 'F:\\TestCafe_TestDive\\tests\\pages\\modal-form.js';
import DemoqaPage from 'F:\\TestCafe_TestDive\\tests\\pages\\demoqa-page.js';


const modalForm = new ModalForm();

const demoqaPage = new DemoqaPage();


fixture`Student Registration`
    .page`https://demoqa.com/automation-practice-form`
    .beforeEach(async () => {
        await t.eval(() => {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        });
        
        await t.eval(() => {
            return window.location.reload();
        });
        await t.maximizeWindow();
        // await t.eval(() => {
        //     document.body.style.zoom = '0.80';
        // });
        await t.wait(2000);
    });
;

test('Fill in registration form and check confirmation', async (t) => {

    const student = {
        firstName: 'Eleanora',
        lastName: 'Stanton',
        email: 'email@subdomain.domain.com',
        gender: 'Female',
        mobileNumber: '7556082311',
        dateOfBirth: '10 Sep 1990',
        subjects: ['Maths', 'English'],
        hobbies: ['Sports', 'Music'],
        // hobbies: ['Sports', 'Reading', 'Music'],
        picturePath: 'C:/Users/apastukh/Pictures/labrador-puppy-royalty-free-image-1626252338.jpg',
        currentAddress: '595 Jamar Forges',
        state: 'NCR',
        city: 'Delhi'
    };


    await verifyThatIsCorrectPageByTitleIsCorrect();

    await demoqaPage.fillAllMandatoryFields(student);

    const modalForm = await demoqaPage.clickSubmitBtn();

    await modalForm.checkValuesModalForm(student);

}).disablePageCaching;

async function verifyThatIsCorrectPageByTitleIsCorrect() {
    const actualText = await demoqaPage.checkPageTitle();
    const expectedText = 'Student Registration Form';
    await t.expect(actualText).eql(expectedText);
}
