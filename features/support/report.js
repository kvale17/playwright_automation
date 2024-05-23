var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonFile: "test-results/cucumber_report.json",
  output: "playwright-report/cucumber-report/cucumber-report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  failedSummaryReport: true,
};

reporter.generate(options);
