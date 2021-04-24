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
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
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
  "/",
  "?",
  ".",
  ",",
  "<",
  ">",
];

var withLow = [];
var withUpper = [];
var withNum = [];
var withChar = [];

var passArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate"); //stores data from id #generate (Generate Password" button) into the object "generateBtn"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//writePassword,

// Add event listener to generate button
generateBtn.addEventListener(
  "click",
  function lengthPrompt() {
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
    } else alert("Thank you! Your password will be generated below.");
    if (conLower == true) {
      withLow = passArray.concat(lower);
    }
    if (conUpper == true) {
      withUpper = passArray.concat(upper);
    }
    if (conNumbers == true) {
      withNum = passArray.concat(numbers);
    }
    if (conChar == true) {
      withChar = passArray.concat(special);
    }

    var finalArray = withLow.concat(withUpper, withNum, withChar);
    console.log(withLow);
    console.log(withUpper);
    console.log(withNum);
    console.log(withChar);
    console.log(finalArray);

    // function passShuff() {
    //   var i, j, k;
    //   for (i = passLength; i > 0; i--) {
    //     j = Math.floor(Math.random(finalArray) * i);
    //     k = finalArray[i];
    //     finalArray[i] = finalArray[j];
    //     finalArray[j] = k;
  }
  // }

  // passShuff();
  // console.log(passShuff);

  // writePassword();
);
