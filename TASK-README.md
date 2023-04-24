# Lendable Front-End test

We'd like you to complete a short programming exercise using React.

We suggest that you don't spend more than 4 hours on this exercise. Feel free to skip some requirements if you think you're spending too much time on the test. Of course, if you want to spend more time you're more than welcome, just let us know roughly how long you committed so we can assess appropriately.

Please submit your solution and any notes via email as a ZIP file, along with the necessary instructions to run the code. Please do not share your solution publicly.

Good Luck! We hope you'll find it fun!

PS. Please, do check the 'Grading' section at the end of the document. It'll give you an idea about what we're looking for in your test.


## Instructions

### Brief

We'd like you to implement a small interactive form with two sliders, functionally similar to the one implemented on the [www.lendable.co.uk](https://www.lendable.co.uk/) homepage.

We expect the look and feel to broadly match the designs below, but we understand that the timeframe and requirements may force you to leave out details to favour quality of code, tests, and functionality. We expect you to assess where these trade-offs should be made if necessary.

To help clarify design requirements we have provided some annotations on the design specs.

### Design

![Design](/design.png)

### Style annotations:

![Design](/design-notes.png)

### Requirements

Develop a loan calculator that calculates an interest rate and monthly repayments. The requirements are:

- The user can select a loan amount using a slider, with a range between `1,000` and `20,000`
- The user can select a loan term using a slider, with a range between `1 year` and `5 years` in  `6 month` steps, e.g. a user may be able to choose `2½ years`
- The user should be shown a correctly formatted value for each slider (as per the mock-up)
- The user should be able to see an interest rate value, which should be updated upon changing the loan amount, using the ranges provided in the table below
- The user should be able to see a monthly repayment calculation, which should be recalculated upon changes to either the loan amount or loan term values
  - We expect you to research how to calculate monthly repayments yourself. There are a number of resources online to suggest how to solve this.
  - *But, please, don't worry* if your results don't **precisely** match what you see on [www.lendable.co.uk](https://www.lendable.co.uk). It'll be difficult to match it, but it can be used as a sanity check.


#### Interest rate ranges table

| Amount borrowed | Interest rate |
| --------------- | --- |
| £1,000-4,999       | 5%  |
| £5,000-9,999       | 10% |
| £10,000-14,999     | 15% |
| £15,000-20,000     | 20% |


## Grading

The aim of this test is to see how you tackle requirements while writing production grade code. We don't expect you to sacrifice code quality or skip unit tests to deliver every single requirement, or perfectly replicate every glyph of the mock-up.

On the other hand, good code is meaningless if it doesn't do anything useful, so we still expect you to provide an app that gives value to a user.

More specifically, we're looking for the following:

* **Value** - does the app work as expected?
* **Design reproduction** - does it look similar to the mock-up?
* **Architecture** - can I easily understand what components there are and how they interact with each other?
* **Code quality** - is code easy to read and is it written in a consistent way?
* **Tests** - are there unit or end-to-end tests? Do they test the right things and are they easy to follow?
* Finally, we expect that any included tests pass, and there are no errors in the browser console.

Your solution will be discussed as part of any final technical interview, so you should be able to explain in detail the approaches and decisions you took in solving this challenge.

## Technology choice

* The only technology choice we mandate is React, as this is currently our primary JS framework
* We try to use TypeScript as much as possible. But feel free to use recent flavours of ECMAScript, or Flow for type safety.
* Similarly you can use CSS, or any CSS pre-processor/CSS-in-JS approach

### Notes

- To save time we suggest using a boilerplate app for React
- Please do not publish your solution
- Document how to run your solution and any tests in a README file.
