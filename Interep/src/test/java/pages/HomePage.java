package pages;

import org.junit.After;
import org.junit.Before;

import steps.Hooks;
import support.DriverQA;

public class HomePage extends Hooks {


    @Before
    public void beforeScenario(){

    }


    @After
    public void depoisDoTeste(){
    driver.quit();

    }


    public DriverQA driver;


    public HomePage(DriverQA stepDriver) {
        driver = stepDriver;
    }

    public void openPage() {
        String url = "https://www.interep.com.br/";
        driver.openURL(url);
    }

    public void clickCars() {
        driver.click("/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[1]/li[4]/a[1]/span[1]", "xpath");
    }

    public String checkTextCars() {
        return driver.getText("/html[1]/body[1]/div[1]/form[1]/div[3]/div[3]/h1[1]", "xpath");
    }
}