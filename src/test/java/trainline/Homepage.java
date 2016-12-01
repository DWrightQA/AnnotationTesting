package trainline;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.Select;

public class Homepage {
	WebDriver driver;
	
	@FindBy(xpath=".//*[@id='originStation']")
	WebElement from;
	
	@FindBy(xpath=".//*[@id='destinationStation']")
	WebElement to;
	
	@FindBy(xpath=".//*[@id='isOneWay']")
	WebElement oneWay;

	@FindBy(xpath=".//*[@id='isOpenReturn']")
	WebElement openReturn;
	
	@FindBy(xpath=".//*[@id='submitButton']")
	WebElement submitButton;
	
	@FindBy(xpath=".//*[@id='outDate']")
	WebElement outDate;
	
	@FindBy(xpath=".//*[@id='returnDate']")
	WebElement returnDate;
	
	@FindBy(xpath=".//*[contains(text(),'Today')]")
	WebElement todayButton;
	
	@FindBy(xpath=".//*[contains(text(),'Tomorrow')]")
	WebElement tomorrowButton;
	
	@FindBy(xpath=".//*[@id='tickets']/div/div[1]/table")
	WebElement payTable;

	@FindBy(css=".ui-state-default.ui-state-active")
	WebElement currentSelect;
	
	@FindBy(xpath=".//*[contains(text(),'Same day')]")
	WebElement returnSameDay;
	
	@FindBy(css="input[type='radio'][name='return']")
	WebElement returnButton;
	
	@FindBy(css="input[type='radio'][name='single']")
	WebElement singleButton;
	
	@FindBy(xpath=".//*[contains(text(),'Next day')]")
	WebElement returnNextDay;
	
	public Homepage(WebDriver driver) {
		this.driver = driver;	
		System.out.println("Homepage object has been created");
		PageFactory.initElements(driver, this);
	}
	
	public void goTo(String url) {
		driver.get(url);
	}
	
	public void setOutDate(Integer DaysInFuture) {
		
		SimpleDateFormat sm = new SimpleDateFormat("dd-MMM-yy");
		Calendar date = Calendar.getInstance();
		Calendar today = Calendar.getInstance();
		today.set(Calendar.HOUR_OF_DAY, 0);
		date.set(Calendar.HOUR_OF_DAY, 0);
		date.add(Calendar.DAY_OF_MONTH, DaysInFuture);
		outDate.click();
		for (int i = 0; i < 10; i++) outDate.sendKeys(Keys.ARROW_RIGHT);
		for (int i = 0; i < 10; i++) outDate.sendKeys(Keys.BACK_SPACE);
		outDate.sendKeys(sm.format(date.getTime()));
		
	}	
	
	public void setReturnDate(String str, Integer DaysInFuture) throws Throwable{
		
		SimpleDateFormat sm = new SimpleDateFormat("dd-MMM-yy");
		Calendar date = Calendar.getInstance();
		date.setTime(sm.parse(str));
		date.add(Calendar.DAY_OF_MONTH, DaysInFuture);
		returnDate.click();
		for (int i = 0; i < 10; i++) returnDate.sendKeys(Keys.ARROW_RIGHT);
		for (int i = 0; i < 10; i++) returnDate.sendKeys(Keys.BACK_SPACE);
		returnDate.sendKeys(sm.format(date.getTime()));
		
	}
	
	public boolean radioExists() {
		try {
			singleButton.isDisplayed();
			returnButton.isDisplayed();
		} catch (Exception e) {
			return false;
	    }
		return true;
	}
}
