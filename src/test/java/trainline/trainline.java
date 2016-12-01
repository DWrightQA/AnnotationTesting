package trainline;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.*;

public class trainline { 
   
	public WebDriver driver = null; 
	public Homepage homepage = null;
	public String browser= null;
   
	@Given("^I want to test in (.*)$")
	public void startBrowser(String arg1) {
		if (arg1.equals("chrome")) {
			driver = new ChromeDriver();
		} else if (arg1.equals("firefox")) {
			driver = new FirefoxDriver();
		}
		browser = arg1;
		homepage = new Homepage(driver);
	}
	
	@And("^I am on Trainline homepage$")
	public void goToHomepage() throws InterruptedException {
		homepage.goTo("https://www.thetrainline.com");
		Thread.sleep(2000);
		Assert.assertTrue(homepage.driver.getTitle().contains("Trainline"));
	}
   
	@When("^I want to go to (.*)$")
	public void destination(String arg1) throws Throwable {
		homepage.to.sendKeys(arg1);	 
		if (browser.equals("firefox")) {
			Thread.sleep(500);
			List<WebElement> li = homepage.driver.findElements(By.xpath(".//*[@id='ui-id-2']"));
			li.get(li.size()-1).click();
		}
		
	}
   
	@And("^I want to go from (.*)$")
	public void origin(String arg1) throws Throwable {
		homepage.from.sendKeys(arg1);
		if (browser.equals("firefox")) {
			Thread.sleep(500);
			List<WebElement> li = homepage.driver.findElements(By.xpath(".//*[@id='ui-id-1']"));
			li.get(li.size()-1).click();
		}
	}
   
	@And("^I want to travel one way$")
	public void goOneWay() {
		if (!homepage.oneWay.isSelected()) homepage.oneWay.click();
	}
	
	@And("^I want to return the (.*) day$")
	public void returnTrip(String arg1) {
		if (homepage.radioExists()) homepage.returnButton.click();
		if (arg1.contains("same")) {
			homepage.returnSameDay.click();
		}
		else if (arg1.contains("next")) {
			homepage.returnNextDay.click();
		}
	}
   
	@And("^I want to leave to(.*)$")
	public void leaveDate(String arg1) throws Throwable {
		if (arg1.equalsIgnoreCase("day")) { 
			homepage.todayButton.click();
		}
		else if (arg1.equalsIgnoreCase("morrow")) {
			homepage.tomorrowButton.click();
		}
	}
   
	@And("^I want to leave on the (\\d+)(.*) of (.*) (\\d+)")
	public void leaveDate(int arg1, String arg2, String arg3, int arg4) throws Throwable {
		homepage.outDate.click();
		String str1, str2;
		
		// Ensure day of month is 2 digits
		if(arg1<10) {
			str1 = "0"+arg1;
		} else {
			str1 = "" + arg1;
		}
		
		// Ensure month is 3 characters
		arg3 = arg3.substring(0,3);
		
		// Ensure year is 2 digits
		str2 = "" + arg4;
		str2 = str2.substring(str2.length()-2, str2.length());
		
		// clean textbox
		for (int i = 0; i < 10; i++) {
			homepage.outDate.sendKeys(Keys.ARROW_RIGHT);
			homepage.outDate.sendKeys(Keys.BACK_SPACE);
		}
		
		// send keys
		homepage.outDate.sendKeys(str1+"-"+arg3+"-"+str2);
		Thread.sleep(500);
		homepage.currentSelect.click();
	}
	
	@And("^I want to return on the (\\d+)(.*) of (.*) (\\d+)")
	public void returnDate(int arg1, String arg2, String arg3, int arg4) throws Throwable {
		homepage.returnDate.click();
		String str1, str2;
		
		// Ensure day of month is 2 digits
		if(arg1<10) {
			str1 = "0"+arg1;
		} else {
			str1 = "" + arg1;
		}
		
		// Ensure month is 3 characters
		arg3 = arg3.substring(0,3);
		
		// Ensure year is 2 digits
		str2 = "" + arg4;
		str2 = str2.substring(str2.length()-2, str2.length());
		
		// clean textbox
		for (int i = 0; i < 10; i++) {
			homepage.returnDate.sendKeys(Keys.ARROW_RIGHT);
			homepage.returnDate.sendKeys(Keys.BACK_SPACE);
		}
		
		// send keys
		homepage.returnDate.sendKeys(str1+"-"+arg3+"-"+str2);
		Thread.sleep(500);
		homepage.currentSelect.click();
	}
   
	@And("^I want to leave in (\\d+) days$")
	public void leaveDate(int arg1) throws Throwable {
		homepage.setOutDate(arg1);
		Thread.sleep(500);
		homepage.currentSelect.click();
	}
	
	@And("^I want to return (\\d+) days later$")
	public void returnDate(int arg1) throws Throwable {
		String str = homepage.outDate.getAttribute("value");
		//System.out.println("\n\n\n\n\n\t\t1\t" + str + "\t1\n\n\n\n\n\n");
		homepage.setReturnDate(str,arg1);
		Thread.sleep(500);
		homepage.currentSelect.click();
	}
	
	@And("^I click the submit button$")
    public void clickSubmit() {
		homepage.submitButton.click();
	}
	
	@Then("^I should get the buy-ticket screen$")
	public void ticketScreen() throws Throwable {
		Thread.sleep(1000);
		Assert.assertTrue(homepage.payTable.isDisplayed());
	}
	
	@After
	public void Destroy() {
		homepage.driver.close();
	}
}