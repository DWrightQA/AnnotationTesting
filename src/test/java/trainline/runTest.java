package trainline; 

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;

@RunWith(Cucumber.class) 
@CucumberOptions(
		plugin     = {"pretty", "html:test-results/thetrainline", "json:test-results/thetrainline.json"}
				) 

public class runTest { }