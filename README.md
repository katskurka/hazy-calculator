# Hazy Calculator

## Instructions
In the initial commit to this project, you have been provided with a basic project setup as well as a set of tests which currently fail. Your task is to create a `calculate` function which will properly calculate the answer given the array of values given the rules outlined below.

## Calculation Rules
The `calculate` function runs an arithmetic calculation based upon an array of inputs (eg. `[2, '*', 10]`)

Each input should be either a number or an operand (`+`, `-`, `*`, `/`)

Our upstream data is inconsistent, so we _intentionally_ accept it and deal with it in the following ways:
* Stringified numbers (eg. `'2'`) should be treated as numbers
* `NULL` should be treated as zero
* `undefined` values should be ignored
* Empty string values (eg. `''`) should be ignored
* Non-numeric values (eg. `'foo'`) should be ignored
## Question Answers
* **Identify the component of this assignment you did the best on, and why:** I was happy with how concise my final solution ended up being. I originally started with a few different functions and was able to combine them to improve clarity and cut out unnecessary pieces.
* **Describe in plain English what problem this assignment was posing, and what your solution to it was:** The hardest part of this assignment was determining what the criteria were asking for and coming up with an idea of how to execute it. I sat down and brainstormed possible approaches to find the best beginning attempt and built from there. 
* **What was your approach or process:** I began by working backwards and creating my function to perform the actual calculations first (the switch statement). Then I began trying to figure out how I could filter out unnecessary pieces of the array (empty strings, undefined values, etc) and wrote a function to perform that step. Then I went about trying to solve the last few criteria for the assignment. 
* **What were your challenges:** I was having trouble getting the final two tests to pass (return NaN if not a correct operation, and skip over non-numeric strings). I was able to determine through trial and error why my function was not skipping non-numeric strings. I got the final test to pass with some help from Hollis. I think I was overthinking what I had to do for this test when it was really a simple solution. 
* **What resources did you use:** Stackoverflow, MDN guides, JavaScript: the Definitive Guide
* **What does the repo project do and what is the impact it has:** This repo contains a set of tests and a function to calculate the numerical and operator values of an array  and ignore bad values
* **Technologies used in project:** JavaScript, TDD, ESLint, Mocha, Chai
* **Main Author:** Kat Skurka
* **Credits:**
