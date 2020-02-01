// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "_", "{", "|", "}", "]",]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function generatePassword() {
  
  function getCharAmount() {
    var charAmount = parseInt(prompt('How many characters should your password be?'))
    
    if (charAmount < 8 || charAmount > 128) {
      alert('passwords must be between 8 and 128 characters')
      return getCharAmount();
    } 
    
    return charAmount;
  }
  
  var charAmount = getCharAmount()
  
  var holder = []
 

  
  // 1 - Create my 'holder' array
  var confirmNum = confirm('Do you want numbers?');
  var confirmLow = confirm('Do you want lower case letters?');
  var confirmUpper = confirm('Do you want upper case letters?');
  var confirmSpecial = confirm('Do you want special characters?')
  
  
  if (confirmNum === true) {
    holder.push(number)
  }

  if (confirmLow === true) {
    holder.push(lower)
  }

  if (confirmUpper === true) {
    holder.push(Upper)
  }

  if (confirmSpecial === true) {
    holder.push(special)
  }


  console.log(holder)


  // 2 - write a code that navigates through password length possibilities. 


  console.log(charAmount)
 


  // 3 - Use a for loop to randomly access the 'holder' array a certain number of times.


  var password = ""

  for (var i = 0; i < charAmount; i++) {
    var arrPosition = Math.floor(Math.random() * holder.length)
    var getCharPosition = Math.floor(Math.random() * holder[arrPosition].length)
    password += holder[arrPosition][getCharPosition];
    // pass.push(getCharPosition)
  };

  return password



}
















