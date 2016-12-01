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
  "name": "I am on Trainline homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "trainline.goToHomepage()"
});
formatter.result({
  "duration": 8809203943,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": "words;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I want to go to Brighton",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I want to go from London Euston",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I want to travel one way",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I want to leave today",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should get a ticket",
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
  "duration": 139768978,
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
  "duration": 186431163,
  "status": "passed"
});
formatter.match({
  "location": "trainline.goOneWay()"
});
formatter.result({
  "duration": 176895722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "today",
      "offset": 16
    }
  ],
  "location": "trainline.leaveDate(String)"
});
formatter.result({
  "duration": 124329691,
  "status": "passed"
});
formatter.match({
  "location": "trainline.clickSubmit()"
});
formatter.result({
  "duration": 85691707,
  "status": "passed"
});
formatter.match({
  "location": "trainline.ticketScreen()"
});
formatter.result({
  "duration": 5007725545,
  "status": "passed"
});
});