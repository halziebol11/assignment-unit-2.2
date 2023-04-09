// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');                                    
}
  
*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and set it to the string 'Dane'
// we check if name is equal to 'Mary' and console log 'Hi Mary' if it is equal
// If it is not equal, we console log 'How do you do?'
//In this case name is not equal to Mary so we console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// create an undefined string variable secret
// create a number variable code and set it equal to 123
// if code is equal to 123 then assign the string 'super' to secret and make code equal to its previous value times 2
// in this case code is equal to 123 so secret now equals 'super' and code is now equal to 246
// if code is greater than 250, set set secret equal to the string 'duper'
// in this case code is less than 250, so secret is still equal to 'super'
// then console log the value of secret, which is 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// create a boolean variable called isStudent and set it equal to true
// create a number variable called age and set it to 34
// create a number variable called zip and set it to 55407
// if the variable isStudent equals true and the zip is greater than 80000, then console log the string 'You're a student on the West Coast!""
// in this case, the zip is less than 80000, so the string will not be logged, so we continue to the next statement
// if isStudent equals false or age is less than 30, then console log the string 'What are your hobbies'
// in this case neither condition is met, so the string will not be logged, so we continue to the next statement
// if isStudent is true, then console log 'Welcome to Prime!'
// since this is true, the string is logged and the if clause is completed.
// if none of the previous if statements were true we'd continue on to the final,
// which is console log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be set to 'blue' per instructions
// let colorOne = 'blue';
let colorOne = 'red';

// FIX - colorTwo should be set to 'red' per instructions
// let colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';

  // FIX - colorTwo should also be set to 'purple' per instructions
  // colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - incorrect assignment of variable time to a constant. time will change and we should be able to reassign a value.
// let time = 4;
const time = 4;

// FIX - per instructions both conditions must be met, not either. Change 'or' to 'and'.
// if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// Potential FIX - minAge was not specified as a constant variable.
// It could be: let minAge = 21;
const minAge = 21;

// FIX - this statement checks if age is greater than or equal to minAge, but the instructions specify to check if age
// is greater than or equal to minAge
// if (age >= minAge) {
if(minAge <= age) {

  //FIX - the instructions do not reference the string 'no entry'. The line of code below should be deleted.
  //without a console log command, no entry will be made.
  console.log('no entry');
  
  // the console.log 'enter' command was specified as being an outcome of age being greater than or equal to minAge
  //so it should not be within an else clause, but rather part of the original if statement.
  // FIX - console.log('enter');}
} else {
  console.log('enter');
}
*/

