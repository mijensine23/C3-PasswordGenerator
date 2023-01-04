//Assignment code 
var generateBtn = document.querySelector("#generate");
//character options for generated password
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "@", "&", "*", "(", ")", "~", "&", "=", "+"];

//confirm input by user
function passwordOptions (NumOfCharac){
  if (parseInt(NumOfCharac)<8){
    alert("Password must be atleast 8 characters in length.");
    return false;
  } else if (parseInt(NumOfCharac) >=128) {
    alert("Password can not be more than 128 characters.");
    return false;
  }
  return true;
  }

//allows user to choose password parameters
function generatePassword() {
  var NumOfCharac = prompt(
    "Please enter the number of characters you would like in your password."
  );
  var passwordValid = PasswordOptions(NumOfCharac);
  if (passwordValid) {
    var hasSpecialCharacters = confirm(
      "Click OK to to add special characters."
    );
    var hasNumbers = confirm("Click OK to to add numerical characters.");
    var hasLowerCase = confirm(
      "Click OK to add lowercase characters."
    );
    var hasUpperCase = confirm(
      "Click OK to confirm including uppercase characters."
    );
}
  if (
    [hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase].includes(
      true
    )
  );
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
