var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonFile: "test-results/cucumber_report.json",
  output: "playwright-report/cucumber-report/cucmber-report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  failedSummaryReport: true,
};

reporter.generate(options);
