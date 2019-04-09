$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/my_first.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Login",
  "description": "As a user I should able to login into Gmail.",
  "id": "gmail-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "I login with valid credential",
  "description": "",
  "id": "gmail-login;i-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to \"http://the-internet.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"tomsmith\" into input field having id \"username\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"SuperSecretPassword!\" into input field having id \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on element having class \"radius\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I wait 5 seconds for element having css \"a[href\u003d\u0027/logout\u0027]\" to display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/login",
      "offset": 15
    }
  ],
  "location": "PredefinedStepDefinitions.navigate_to(String)"
});
formatter.result({
  "duration": 4619149249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 9
    },
    {
      "val": "id",
      "offset": 43
    },
    {
      "val": "username",
      "offset": 47
    }
  ],
  "location": "PredefinedStepDefinitions.enter_text(String,String,String)"
});
formatter.result({
  "duration": 71116956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 9
    },
    {
      "val": "id",
      "offset": 55
    },
    {
      "val": "password",
      "offset": 59
    }
  ],
  "location": "PredefinedStepDefinitions.enter_text(String,String,String)"
});
formatter.result({
  "duration": 45554005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 26
    },
    {
      "val": "radius",
      "offset": 33
    }
  ],
  "location": "PredefinedStepDefinitions.click(String,String)"
});
formatter.result({
  "duration": 437438143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    },
    {
      "val": "css",
      "offset": 36
    },
    {
      "val": "a[href\u003d\u0027/logout\u0027]",
      "offset": 41
    }
  ],
  "location": "PredefinedStepDefinitions.wait_for_ele_to_display(String,String,String)"
});
formatter.result({
  "duration": 60206553,
  "status": "passed"
});
});