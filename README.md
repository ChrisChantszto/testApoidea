# testApoidea
Please follow the below for the setup

1. Please make sure the webdriverIO is installed by npm
`npm i --save-dev @wdio/cli to install WebDriverIO command-line client.`

2. Please install allure report to see the test run output
`npm install @wdio/allure-reporter --save-dev`  to install the allure-reporter.
and
`npm install -g allure-commandline --save-dev` to install Allure Commandline, which is used to generate allure reports from the test results.

3. Please then execute `allure generate reports/allure-results/` to generate a report
Run `allure open` to open the report file in browser
