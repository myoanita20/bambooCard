# Project Name: Technical test for Bamboo Card
This project contains web automation using Cypress and BDD format, Manual test cases, API automation using postman, and Performance Test Scenario

## First setup  : 
Open your terminal and run:
git clone https://github.com/myoanita20/bambooCard.git

### 1. API AUTOMATION
Open repository that already clone, open folder 1_AutomationPostman
1. Open postman
2. Click import
3. Drag Automation Swagger Pet.postman_collection.json file from AutomationPostman folder
4. Click import
5. Click import
6. Drag Swagger Pet.postman_environment.json file from AutomationPostman Folder
7. Click import

How To Run?
1. Right click on the collection that already imported
2. Select Run Collection
3. Select Run manually
4. Click Select File in Data file section
5. select testing_data.csv from AutomationPostman folder
6. Click Run Automation Swagger Pet


### 2. Document
2_ManualTestCase folder will contains excel file for manual test case scenario
4_PerfTestScenario folder will contains excel file for performance test case scenario


### 3. Cypress Automation
Step by step to run the test
1. Open your terminal and run:
**git clone https://github.com/myoanita20/bambooCard.git**

2. Move into project directory
**cd bambooCard**

3. Dependencies Setup - Install all the dependencies using following command:
**npm install**

4. To open Cypress To open Cypress, run, below command will open the Cypress test runner.
**npx cypress open**

5. To run directly from terminal and generate report, use below command : 
**npx cypress run**
