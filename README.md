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
* QA: takes a few hours or days to ensure everything workds together as expected

## Google Software Test Philosophy

* Demostrate that software is works is a mistake ❌
* Reduce the risk of errors in our code is correct ✅

## To be considered

* Code testing and CI/CD go hand-in-hand:

>  Develop --> Test --> Deploy

* DevOps culture:

> Plan --> Code --> Build --> Test --> Release --> Deploy --> Operate --> Monitor

* When starting a project, it's necessary to identify which test should be performed it
