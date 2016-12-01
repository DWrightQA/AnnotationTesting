package outline; 

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver; 

import cucumber.api.java.en.*;

public class outline { 
   WebDriver driver = null; 
   
   @Given("^I am on Facebook login page$") 	
   public void goToFacebook() { 
	  System.setProperty("webdriver.gecko.driver", "C:/Users/Damon/Downloads/geckodriver-v0.11.1-win64/geckodriver.exe");
      driver = new FirefoxDriver(); 
      driver.get("https://en-gb.facebook.com/"); 
   }
	
   @When("^I enter username as \"(.*)\"$") 
   public void enterUsername(String arg1) {   
      driver.findElement(By.id("email")).sendKeys(arg1); 
   }
	
   @When ("^I enter password as \"(.*)\"$") 
   public void enterPassword(String arg1) {
      driver.findElement(By.id("pass")).sendKeys(arg1);
   } 
   
   @And ("^I press login$")
   public void pressLogin() {
	   
	   if (driver.findElement(By.id("u_0_n")).isDisplayed()) {
		   driver.findElement(By.id("u_0_n")).click(); 		   
	   }
	   else if (driver.findElement(By.id("u_0_o")).isDisplayed()) {
		   driver.findElement(By.id("u_0_o")).click(); 		   
	   }
	   else {
		   Assert.fail("no login button");
	   }
   }
	
   @Then("^Login should fail$") 
   public void checkFail() {  
	  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
      if(driver.getCurrentUrl().equalsIgnoreCase(
         "https://www.facebook.com/login.php?login_attempt=1&lwv=110")){ 
            System.out.println("Test1 Pass"); 
      } else { 
         System.out.println("Test1 Failed"); 
      }
   }
	
   @But("^Relogin option should be available$") 
   public void checkRelogin() { 
	  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
      if(driver.getCurrentUrl().equalsIgnoreCase(
         "https://www.facebook.com/login.php?login_attempt=1&lwv=110")){ 	  
    	  System.out.println("Test2 Pass"); 
      } else { 
         System.out.println("Test2 Failed"); 
      }
   }
} 