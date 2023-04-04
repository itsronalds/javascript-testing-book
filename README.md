# javascript-testing-book
Book to learn about the testing ecosystem using JavaScript ♻️

# Google Software Test Flow

## Software Development Phases

### Design
* Project requirements and functionalities
* Programming Languages and tools to use
* Design diagrams and software flow

### Development
Develop the software by requirements

### Tests
* Unit Tests
* Integration Tests
* Code Review
* QA

### Production
Deploy t and maintain the software

## Google Handle the Software Development as Follow

* Static Analysis: check code issues in real-time
* Unit Test: take a few seconds to verify your code does what you think it does, the Unit tests also work to verify our code in different scenarios
* Integration Test: take a few minutes to valite the system works. May catch fun edge cases. In other words, after running the unit tests make sure that the system works

> For example: if you ran two unit tests, you must run an integration test to verify that the system works

* Code Review: takes a few hours to validate you're following standard norms and practices of your team
* QA: takes a few hours or days to ensure everything works together as expected

## Google Software Test Philosophy

* Demostrate that software is works is a mistake ❌
* Reduce the risk of errors in our code is correct ✅

## To be considered

* Code testing and CI/CD go hand-in-hand:

>  Develop --> Test --> Deploy

* DevOps culture:

> Plan --> Code --> Build --> Test --> Release --> Deploy --> Operate --> Monitor

* When starting a project, it's necessary to identify which test should be performed it

# The Testing Pyramid
<p align="center">
  This pyramid shows us the correct way to test software
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/77751686/229887537-46056436-659b-4006-9146-7e17a6d1f322.png" alt="Testing Pyramid" />
</p>

<hr />

<p align="center">
  In JavaScript is taking a better way to test a software as see bellow
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/77751686/229892277-87d98a06-5c28-43f3-9d74-90f400319cb7.png" alt="New Testing Pyramid" />
</p>

## Concepts
* **Static Tests**: refers to verifying the code we write using a IDE (Integrated Development Environment)
* **Unit Tests**: refers to the testing elements/components of our software on unit basis
* **Integration Tests**: refers to the testing of how elements/components work together
* **End-to-End Tests - E2E**: refers to the testing of all software functionalities, verify how software is work under real-world scenarios

# Tests Tools
Following are the best tools for testing software with JavaScript:

## Static Tests
* [Prettier](https://prettier.io/)
* [Eslint](https://eslint.org/)
* [TypeScript](https://www.typescriptlang.org/)

## Unit Tests
* [Jest](https://jestjs.io/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)

## UI Tests
* [Cypress](https://www.cypress.io/)

## API Tests
* [Postman](https://www.postman.com/)
* [Supertest](https://www.npmjs.com/package/supertest)

# Resources
* [The State of JS:](https://2022.stateofjs.com/en-US/) this website help you to see the best tools for JavaScrip according to each year's survey
* [Generate .gitignore automatically by requirements](https://www.toptal.com/developers/gitignore)
* [Generate Airbnb .editorconfig for JavaScript](https://github.com/airbnb/javascript/blob/master/.editorconfig)
