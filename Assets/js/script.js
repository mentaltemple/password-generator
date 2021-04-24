var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// var upper = []; **CAN I AUTOMATE??
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  ";",
  ":",
  "~",
  "+",
  "=",
  "-",
  "`",
];
// Assignment Code
var generateBtn = document.querySelector("#generate"); //stores data from id #generate (Generate Password" button) into the object "generateBtn"

var holdArray = [];
var passArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//writePassword,
// Add event listener to generate button
generateBtn.addEventListener("click", function lengthPrompt() {
  var passLength = prompt(
    "Password Generator: Please choose a password length between 8-128 characters"
  );
  if (passLength < 8 || passLength > 128) {
    alert("Please choose a number between 8-128");
    lengthPrompt();
  } else {
    var conLower = confirm("Would you like to include lowercase letters?");
    var conUpper = confirm("Would you like to include UPPERCASE LETTERS?");
    var conNumbers = confirm("Would you like to include numbers?");
    var conChar = confirm(
      "Would you like to include special characters? (!@#$%^&*+=)"
    );
  }

  if (
    conLower == false &&
    conUpper == false &&
    conNumbers == false &&
    conChar == false
  ) {
    alert("Please select at least one character attribute!");
    lengthPrompt();
  } else alert("Thank you! Click the Generate Pasword button to display your new password");
  if (conLower == true) {
    holdArray = passArray.concat(lower);
  }
  if (conUpper == true) {
    holdArray = passArray.concat(lower);
  }
  if (conNumbers == true) {
    holdArray = passArray.concat(numbers);
  }
  if (conChar == true) {
    holdArray = passArray.concat(special);
  }
  console.log(holdArray);
  console.log(passArray);
});

//When (Generate Button) is clicked...

// lengthPrompt();
