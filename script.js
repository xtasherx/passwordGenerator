const generateBtn = document.querySelector("#generate");
let password = "";
let pass = "";
let optionString = "";
const passwordText = document.querySelector("#password");

// object to contain types of chars available
const passOptions = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!@#$%^&*()+-/=,.",
};
// function to add type to optionString if true
function checkType(type, string) {
  if (type) {
    optionString += string;
  } else {
    return;
  }
}

generateBtn.addEventListener("click", () => {
  let userLen = "";

  // Loop to ensure the user picks the correct password length
  do {
    userLen = prompt(
      "Please choose a length for your password between 8 and 128 characters."
    );
  } while (+userLen < 8 || +userLen > 128 || isNaN(+userLen));

  // Store the user char choices
  const userCaps = confirm("Would you like to use uppercase letters?");
  const userLow = confirm("Would you like to use lowercase letters?");
  const userNums = confirm("Would you like to use numbers?");
  const userSpecial = confirm("Would you like to use special characters?");

  // Generate the password
  function generatePassword() {
    // Verify user character choices and pw length--add types of chars to string if chosen
    optionString = "";
    checkType(userCaps, passOptions.upper);
    checkType(userLow, passOptions.lower);
    checkType(userNums, passOptions.numeric);
    checkType(userSpecial, passOptions.special);
    let passLength = +userLen;
    let password = "";
    // Produce random char from optionString at each iteration and add it to the password variable to create new string.
    for (let i = 0; i < passLength; i++) {
      const randomMath = Math.floor(Math.random() * optionString.length);
      password += optionString[randomMath];
    }
    if (optionString !== "") {
      return password;
    } else {
      alert("You must choose at least on type, please try again.");
      password = "";
    }
  }

  // Write password to the #password input
  function writePassword() {
    pass = generatePassword();
    if (pass === undefined) {
      passwordText.value = "";
    } else {
      passwordText.value = pass;
    }
  }

  writePassword();
});
