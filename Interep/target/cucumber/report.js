$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Check the Home page",
  "description": "",
  "id": "check-the-home-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2315349171,
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
  "name": "User access the Interep Website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepsTest.userAccessTheInterepWebsite()"
});
formatter.result({
  "duration": 12292492116,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User check the text for option cars",
  "description": "",
  "id": "check-the-home-page;user-check-the-text-for-option-cars",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Interep"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User clicks on Carros",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User views \"Encontre o carro ideal para sua viagem\" on screen Tex of Cars",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepsTest.userClickOnMotoG7()"
});
formatter.result({
  "duration": 6450266015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Encontre o carro ideal para sua viagem",
      "offset": 12
    }
  ],
  "location": "HomePageStepsTest.userValidateStringCars(String)"
});
formatter.result({
  "duration": 34403316,
  "status": "passed"
});
formatter.after({
  "duration": 99086711,
  "status": "passed"
});
});