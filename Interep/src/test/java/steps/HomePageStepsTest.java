package steps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.HomePage;
import support.BaseSteps;

public class HomePageStepsTest extends BaseSteps {

    public static HomePage homePage = new HomePage(driver);

    @Given("^User access the Interep Website$")
    public void userAccessTheInterepWebsite() {
        homePage.openPage();
    }

    @Given("^User clicks on Carros$")
    public void userClickOnMotoG7() {
        homePage.clickCars();
    }

    @Then("^User views \"([^\"]*)\" on screen Tex of Cars")
    public void userValidateStringCars(String value) throws Throwable {
        Assert.assertEquals(value, homePage.checkTextCars());
    }
}


