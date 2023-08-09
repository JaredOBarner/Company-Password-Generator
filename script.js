// Assignment code here

var upperSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numberSet = ["0","1","2","3","4","5","6","7","8","9"]
var symbolSet= ["!","@","#","$","%","^","&","*","(",")"]

function generatePassword() {
  var passwordLength = parseInt( prompt("Password Length? (8-128 characters)"));
  if(passwordLength < 8 || passwordLength > 128 && isNaN(passwordLength)){
    return "Please enter valid password length"
  }

  var confirmUpper = confirm("Upper case letters required? ")
  var confirmLower = confirm("lowercase letters required?")
  var confirmNumber = confirm ("numbers required?")
  var confirmSymbol = confirm ("symbols required?")
  var Selections = []
  if(confirmLower){
    Selections = Selections.concat(lowerSet)
  }
  if(confirmUpper){
    Selections = Selections.concat(upperSet)
  }
  if(confirmNumber){
    Selections = Selections.concat(numberSet)
  }
  if(confirmSymbol){
    Selections = Selections.concat(symbolSet)
  }
  console.log(Selections)
  if(Selections.length === 0){
    return "Please choose at least one option before generating password."
  }

  var password = ""
  for(var i = 0; i < passwordLength ; i++){
     var index =  Math.floor(Math.random() * Selections.length) 
    password += Selections[index]
  }
  return password
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