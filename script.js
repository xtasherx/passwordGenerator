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

let userLen = prompt(
  "Please choose a length for your password between 8 and 128 characters."
);
const userCaps = confirm("Would you like to use uppercase letters?");
const userLow = confirm("Would you like to use lowercase letters?");
const userNums = confirm("Would you like to use numbers?");
const userSpecial = confirm("Would you like to use special charachters?");
let password = "";

// random number function to generate a value between 0-10

//Placeholder booleans
// let up = true;
// let low = false;
// let num = true;
// let spec = true;
let optionString = "";
let passLength = +userLen;

// object to contain types of chars available
const passOptions = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!@#$%^&*()+-/=,.",
};

// function to add type to string if true --------fix------returns undefined if false

function checkType(type, string) {
  if (type) {
    optionString += string;
  } else {
    return;
  }
}

// function calls for character types
checkType(userCaps, passOptions.upper);
checkType(userLow, passOptions.lower);
checkType(userNums, passOptions.numeric);
checkType(userSpecial, passOptions.special);

console.log(optionString);

// loop to create pw--needs to be passed the user chose length-----fix-----Need to get optionString logout into a new string-----
for (let i = 0; i < passLength; i++) {
  const randomMath = Math.floor(Math.random() * optionString.length);
  password += optionString[randomMath];
}
console.log(password);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
