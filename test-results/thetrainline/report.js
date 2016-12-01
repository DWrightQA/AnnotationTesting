$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("trainline/trainline.feature");
formatter.feature({
  "line": 1,
  "name": "words",
  "description": "",
  "id": "words",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I want to test in chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on Trainline homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 18
    }
  ],
  "location": "trainline.startBrowser(String)"
});
formatter.result({
  "duration": 3199627965,
  "status": "passed"
});
formatter.match({
  "location": "trainline.goToHomepage()"
});
formatter.result({
  "duration": 36431768219,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "One way, today",
  "description": "",
  "id": "words;one-way,-today",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I want to go to Brighton",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I want to go from London Euston",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I want to travel one way",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I want to leave today",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should get the buy-ticket screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Brighton",
      "offset": 16
    }
  ],
  "location": "trainline.destination(String)"
});
formatter.result({
  "duration": 176313413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London Euston",
      "offset": 18
    }
  ],
  "location": "trainline.origin(String)"
});
formatter.result({
  "duration": 209175160,
  "status": "passed"
});
formatter.match({
  "location": "trainline.goOneWay()"
});
formatter.result({
  "duration": 176808604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "day",
      "offset": 18
    }
  ],
  "location": "trainline.leaveDate(String)"
});
formatter.result({
  "duration": 114871661,
  "status": "passed"
});
formatter.match({
  "location": "trainline.clickSubmit()"
});
formatter.result({
  "duration": 5098456952,
  "status": "passed"
});
formatter.match({
  "location": "trainline.ticketScreen()"
});
formatter.result({
  "duration": 1056851094,
  "status": "passed"
});
formatter.after({
  "duration": 2522745980,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I want to test in chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on Trainline homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 18
    }
  ],
  "location": "trainline.startBrowser(String)"
});
formatter.result({
  "duration": 2108445457,
  "status": "passed"
});
formatter.match({
  "location": "trainline.goToHomepage()"
});
formatter.result({
  "duration": 35986920779,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Return, tomorrow",
  "description": "",
  "id": "words;return,-tomorrow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I want to go to London",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I want to go from Southampton",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to return the same day",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to leave tomorrow",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get the buy-ticket screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 16
    }
  ],
  "location": "trainline.destination(String)"
});
formatter.result({
  "duration": 138190318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Southampton",
      "offset": 18
    }
  ],
  "location": "trainline.origin(String)"
});
formatter.result({
  "duration": 174420394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "same",
      "offset": 21
    }
  ],
  "location": "trainline.returnTrip(String)"
});
formatter.result({
  "duration": 210531934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "morrow",
      "offset": 18
    }
  ],
  "location": "trainline.leaveDate(String)"
});
formatter.result({
  "duration": 106864436,
  "status": "passed"
});
formatter.match({
  "location": "trainline.clickSubmit()"
});
formatter.result({
  "duration": 105568214,
  "status": "passed"
});
formatter.match({
  "location": "trainline.ticketScreen()"
});
formatter.result({
  "duration": 8763310139,
  "status": "passed"
});
formatter.after({
  "duration": 2568584829,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I want to test in chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on Trainline homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 18
    }
  ],
  "location": "trainline.startBrowser(String)"
});
formatter.result({
  "duration": 2109662140,
  "status": "passed"
});
formatter.match({
  "location": "trainline.goToHomepage()"
});
formatter.result({
  "duration": 66778660057,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "return, leave in 1 day",
  "description": "",
  "id": "words;return,-leave-in-1-day",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I want to go to Feniton",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I want to go from Oxford",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I want to leave in 9 days",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I want to return the next day",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should get the buy-ticket screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Feniton",
      "offset": 16
    }
  ],
  "location": "trainline.destination(String)"
});
formatter.result({
  "duration": 104475199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford",
      "offset": 18
    }
  ],
  "location": "trainline.origin(String)"
});
formatter.result({
  "duration": 165233433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 19
    }
  ],
  "location": "trainline.leaveDate(int)"
});
formatter.result({
  "duration": 1612880118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "next",
      "offset": 21
    }
  ],
  "location": "trainline.returnTrip(String)"
});
formatter.result({
  "duration": 156255324,
  "status": "passed"
});
formatter.match({
  "location": "trainline.clickSubmit()"
});
formatter.result({
  "duration": 5498082351,
  "status": "passed"
});
formatter.match({
  "location": "trainline.ticketScreen()"
});
formatter.result({
  "duration": 1043945832,
  "status": "passed"
});
formatter.after({
  "duration": 2312080113,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I want to test in chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on Trainline homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 18
    }
  ],
  "location": "trainline.startBrowser(String)"
});
formatter.result({
  "duration": 2096307357,
  "status": "passed"
});
formatter.match({
  "location": "trainline.goToHomepage()"
});
formatter.result({
  "duration": 35404548580,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "return, leave on 22nd January",
  "description": "",
  "id": "words;return,-leave-on-22nd-january",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I want to go to Feniton",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I want to go from Oxford",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I want to leave on the 22nd of January 2017",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I want to return the next day",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should get the buy-ticket screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Feniton",
      "offset": 16
    }
  ],
  "location": "trainline.destination(String)"
});
formatter.result({
  "duration": 128871475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford",
      "offset": 18
    }
  ],
  "location": "trainline.origin(String)"
});
formatter.result({
  "duration": 167690405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 23
    },
    {
      "val": "nd",
      "offset": 25
    },
    {
      "val": "January",
      "offset": 31
    },
    {
      "val": "2017",
      "offset": 39
    }
  ],
  "location": "trainline.leaveDate(int,String,String,int)"
});
formatter.result({
  "duration": 1901857611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "next",
      "offset": 21
    }
  ],
  "location": "trainline.returnTrip(String)"
});
formatter.result({
  "duration": 128966409,
  "status": "passed"
});
formatter.match({
  "location": "trainline.clickSubmit()"
});
formatter.result({
  "duration": 6525765366,
  "status": "passed"
});
formatter.match({
  "location": "trainline.ticketScreen()"
});
formatter.result({
  "duration": 1044191632,
  "status": "passed"
});
formatter.after({
  "duration": 2270224863,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I want to test in chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on Trainline homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 18
    }
  ],
  "location": "trainline.startBrowser(String)"
});
formatter.result({
  "duration": 2126701356,
  "status": "passed"
});
formatter.match({
  "location": "trainline.goToHomepage()"
});
formatter.result({
  "duration": 36509188502,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "return, leave on 22nd January",
  "description": "",
  "id": "words;return,-leave-on-22nd-january",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "I want to go to Feniton",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I want to go from Oxford",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I want to leave on the 22nd of January 2017",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I want to return 12 days later",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should get the buy-ticket screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Feniton",
      "offset": 16
    }
  ],
  "location": "trainline.destination(String)"
});
formatter.result({
  "duration": 105056088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford",
      "offset": 18
    }
  ],
  "location": "trainline.origin(String)"
});
formatter.result({
  "duration": 168659236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 23
    },
    {
      "val": "nd",
      "offset": 25
    },
    {
      "val": "January",
      "offset": 31
    },
    {
      "val": "2017",
      "offset": 39
    }
  ],
  "location": "trainline.leaveDate(int,String,String,int)"
});
formatter.result({
  "duration": 1606098299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 17
    }
  ],
  "location": "trainline.returnDate(int)"
});
formatter.result({
  "duration": 1524264909,
  "status": "passed"
});
formatter.match({
  "location": "trainline.clickSubmit()"
});
formatter.result({
  "duration": 87934768,
  "status": "passed"
});
formatter.match({
  "location": "trainline.ticketScreen()"
});
formatter.result({
  "duration": 5479714585,
  "status": "passed"
});
formatter.after({
  "duration": 2068752117,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I want to test in chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on Trainline homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 18
    }
  ],
  "location": "trainline.startBrowser(String)"
});
formatter.result({
  "duration": 2101586666,
  "status": "passed"
});
formatter.match({
  "location": "trainline.goToHomepage()"
});
formatter.result({
  "duration": 9307573612,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "return, leave on 22nd January",
  "description": "",
  "id": "words;return,-leave-on-22nd-january",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "I want to go to Feniton",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I want to go from Oxford",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I want to leave on the 22nd of January 2017",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I want to return on the 25th of Febuary 2017",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should get the buy-ticket screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Feniton",
      "offset": 16
    }
  ],
  "location": "trainline.destination(String)"
});
formatter.result({
  "duration": 123247842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford",
      "offset": 18
    }
  ],
  "location": "trainline.origin(String)"
});
formatter.result({
  "duration": 185346429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 23
    },
    {
      "val": "nd",
      "offset": 25
    },
    {
      "val": "January",
      "offset": 31
    },
    {
      "val": "2017",
      "offset": 39
    }
  ],
  "location": "trainline.leaveDate(int,String,String,int)"
});
formatter.result({
  "duration": 1688779417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 24
    },
    {
      "val": "th",
      "offset": 26
    },
    {
      "val": "Febuary",
      "offset": 32
    },
    {
      "val": "2017",
      "offset": 40
    }
  ],
  "location": "trainline.returnDate(int,String,String,int)"
});
formatter.result({
  "duration": 1684883052,
  "status": "passed"
});
formatter.match({
  "location": "trainline.clickSubmit()"
});
formatter.result({
  "duration": 5686228024,
  "status": "passed"
});
formatter.match({
  "location": "trainline.ticketScreen()"
});
formatter.result({
  "duration": 1047217689,
  "status": "passed"
});
formatter.after({
  "duration": 2289503987,
  "status": "passed"
});
});