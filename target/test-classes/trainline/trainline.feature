Feature: words

Background:
	Given I want to test in chrome
	And I am on Trainline homepage
	
Scenario: One way, today
	When I want to go to Brighton
	And I want to go from London Euston
	And I want to travel one way
	And I want to leave today
	And I click the submit button
	Then I should get the buy-ticket screen

Scenario: Return, tomorrow
	When I want to go to London
	And I want to go from Southampton
	And I want to return the same day
	And I want to leave tomorrow
	And I click the submit button
	Then I should get the buy-ticket screen
	
Scenario: return, leave in 1 day
	When I want to go to Feniton
	And I want to go from Oxford
	And I want to leave in 9 days
	And I want to return the next day
	And I click the submit button
	Then I should get the buy-ticket screen

Scenario: return, leave on 22nd January
	When I want to go to Feniton
	And I want to go from Oxford
	And I want to leave on the 22nd of January 2017
	And I want to return the next day
	And I click the submit button
	Then I should get the buy-ticket screen	
	
Scenario: return, leave on 22nd January
	When I want to go to Feniton
	And I want to go from Oxford
	And I want to leave on the 22nd of January 2017
	And I want to return 12 days later
	And I click the submit button
	Then I should get the buy-ticket screen	
	
Scenario: return, leave on 22nd January
	When I want to go to Feniton
	And I want to go from Oxford
	And I want to leave on the 22nd of January 2017
	And I want to return on the 25th of Febuary 2017
	And I click the submit button
	Then I should get the buy-ticket screen	