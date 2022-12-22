function generatePassword() {

//Create a constant array of lowercase letters
const lowercaseAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Creates a constant array of uppercase letters
const uppercaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//create a constant array of integers
const integers = ['0','1','2','3','4','5','6','7','8','9'];
//create a constant array of special characters
const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
//create a variable array of characters from which to generate password
var passwordCharacters = [];
//create a string variable for final password
var passwordGen = "";

//Get password length from user input
passwordLength = prompt("How long do you want your password to be? Please enter a number between 8 and 128.")
  if (passwordLength < 8 || passwordLength > 128) {
    return "Please enter a valid number between 8 and 128."
  }
  else if (isNaN(passwordLength)==true) {
    return "Please enter a valid number between 8 and 128."
  }
  else {
    alert("Your password will be " + passwordLength + " characters long.");
  }

//get valid characters to generate password from, according to user input
hasLowercase = confirm("Do you want to include lowercase characters? If so, select 'OK'. If not, select 'Cancel'.");
if (hasLowercase == true) {
  passwordCharacters = passwordCharacters.concat(lowercaseAlpha);
  alert("Your generated password will include lowercase characters.");
  }
else {
  alert("Your generated password will not include lowercase characters.");
  }

hasUppercase = confirm("Do you want to include uppercase characters? If so, select 'OK'. If not, select 'Cancel'.");
if (hasUppercase == true) {
  passwordCharacters = passwordCharacters.concat(uppercaseAlpha);
  alert("Your generated password will include uppercase characters.");
  }
else {
  alert("Your generated password will not include uppercase characters.");
  }

hasIntegers = confirm("Do you want to include integers? If so, select 'OK'. If not, select 'Cancel'.");
if (hasIntegers == true) {
  passwordCharacters = passwordCharacters.concat(integers);
  alert("Your generated password will include integers.");
  }
else {
  alert("Your generated password will not include integers.");
  }

hasSpecial = confirm("Do you want to include special characters? If so, select 'OK'. If not, select 'Cancel'.");
if (hasSpecial == true) {
  passwordCharacters = passwordCharacters.concat(specialCharacters);
  alert("Your generated password will include special characters.");
  }
else {
  alert("Your generated password will not include special characters.");
  }

if (hasLowercase == false && hasUppercase == false && hasIntegers == false && hasSpecial == false) {
  return ("You haven't entered any character types! Please try again.")
  }

//Display in console all possible password characters
console.log(passwordCharacters);

//Randomly generate password from passwordCharacters
for (let i=0; i < passwordLength; i++){
  var charPosition = [Math.floor(Math.random() * passwordCharacters.length)];
  console.log(charPosition);
  passwordGen += passwordCharacters[charPosition];
  console.log(passwordGen);
}
//return generated password
return passwordGen;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
