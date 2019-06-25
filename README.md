selenium-cucumber-java
===================

selenium-cucumber : Automation Testing Framework Using Java

selenium-cucumber is a behavior driven development (BDD) approach to write automation test script to test Web.
It enables you to write and execute automated acceptance/unit tests.
It is cross-platform, open source and free.
Automate your test cases with minimal coding.
[More Details](http://seleniumcucumber.info/)

Documentation
-------------
* [Installation](doc/installation.md)
* [Predefined steps](doc/canned_steps.md)

Download a Framework
--------------
* Maven - https://github.com/hemanshuchauhan/selenium-cucumber-java

Writing a test
--------------

The cucumber features goes in the `features` library and should have the ".feature" extension.

You can start out by looking at `features/my_first.feature`. You can extend this feature or make your own features using some of the [predefined steps](doc/canned_steps.md) that comes with selenium-cucumber.


Predefined steps
-----------------
By using predefined steps you can automate your test cases more quickly, more efficiently and without much coding.

The predefined steps are located [here](doc/canned_steps.md)

Running test
--------------

Go to your project directory from terminal and hit following commands
* `mvn test (defualt will run on local firefox browser)`
* `mvn test "-Dbrowser=chrome" (to use any other browser)`
* `mvn test "-Dcloud_config=saucelab_windows_chrome52" (to run test on cloud test platforms)`

Using canned tests in your project
----------------------------------

In your TestRunner class add a glue option:

```
package stepDefintions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	plugin = {"html:target/cucumberHtmlReport"},
	features = "classpath:features",
	glue = {"info.seleniumcucumber.stepdefinitions"}
)

public class RunCukeTest {
}
```

Maven/Gradle Dependency
-----------------------

See https://jitpack.io/#selenium-cucumber/selenium-cucumber-java .

License
-------

(The MIT License)

