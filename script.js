// TO DO:
// When the button is pressed prompt for criteria
// Control the number of characters allowed
// Capture the user input and store in a variable
// validate if the types are true or false

// generate the string --seriously though how the fuck
// Create a loop for the length of the string

// return the string to the user

// Assignment Code
var generateBtn = document.querySelector("#generate");

// let userLen = prompt(
//   "Please choose a length for your password between 8 and 128 characters."
// );
// const userCaps = confirm("Would you like to use uppercase letters?");
// const userLow = confirm("Would you like to use lowercase letters?");
// const userNums = confirm("Would you like to use numbers?");
// const userSpecial = confirm("Would you like to use special charachters?");

// random number function to generate a value between 0-10
let up = true;
let low = true;
let num = true;
let spec = true;

// object to contain types of chars available
const passOptions = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!@#$%^&*()+-/=,.",
};

// function to return a random character -- passing in the key/value pair from passOptions---the damn random has to be inside or it will always return the same value.
// function randomPick(type) {
//   const randomMath = Math.floor(Math.random() * 11);
//   return type[randomMath];
// }

let optionString = "";

if (up) {
  optionString += passOptions.upper;
}

if (low) {
  optionString += passOptions.lower;
}

if (num) {
  optionString += passOptions.numeric;
}

if (spec) {
  optionString += passOptions.special;
}

console.log(optionString);
// loop for string length
for (let i = 0; i < 20; i++) {
  const randomMath = Math.floor(Math.random() * 78);

  console.log(optionString[randomMath]);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
