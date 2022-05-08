// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Arrays
// var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var special = ["~", "!", "?", "+", "*", "<", ">", "&", "$", "#", "%", "@", "^"]
// var numbers = 

// Variable declaration
// var passwordLength;
// var passwordLower;
// var passwordUpper;
// var passwordSpecial;

// Write password to the #password input
function writePassword() {
  //Decide password length
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  //Loop if answer is not between 8 and 128
  while(passwordLength <= 8 || passwordLength >= 128) {
    window.alert("Password length must be between 8-128 characters");
    var passwordLength = window.prompt("How many characters would you like your password to contain?");
  }

  //Confirm password parameters 
  var passwordLower = confirm("Click OK to confirm including lowercase characters");
  var passwordUpper = confirm("Click OK to confirm including uppercase characters");
  var passwordNumber = confirm("Click OK to confirm including numbers");
  var passwordSpecial = confirm("Click OK to confirm including special characters");
  if(passwordLower === false && passwordUpper === fasle && passwordNumber === false && passwordSpecial === fasle) {
    window.alert("Please choose at least one parameter");
    var passwordLower = confirm("Click OK to confirm including lowercase characters");
    var passwordUpper = confirm("Click OK to confirm including uppercase characters");
    var passwordNumber = confirm("Click OK to confirm including numbers");
    var passwordSpecial = confirm("Click OK to confirm including special characters");
  } else {

  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener to generate button to prompt questions when clicked
generateBtn.addEventListener("click", writePassword);