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
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// var master = []

// This function prompts for character length, stores it in a variable, and if it passes the character amount paramaters returns the variable to 'charNumber' //




// console.log(charNumber)

// This function asks for character options, and pushes user's responses into a 'master' array that holds their choices. 
function generatePassword() {
    
    function getCharAmount() {
        var charAmount = parseInt(prompt('How many characters should your password be?'))
    
        if (charAmount < 8 || charAmount > 128) {
            alert('Passwords must be between 8 and 128 characters.')
            return getCharAmount();
        }
    
        return charAmount;
    }
    
    var charAmount = getCharAmount()



console.log(charAmount)

    var master = []


    var charLower = confirm('Should your password have lower case letters?');
    var charUpper = confirm('Should your password have upper case letters?');
    var charNumber = confirm('Should your password have numbers?');
    var charSpecial = confirm('Should your password have special characters?');

    if (charLower === true) {
        master.push(lower)
    }

    if (charUpper === true) {
        master.push(upper)
    }

    if (charSpecial === true) {
        master.push(special)
    }

    if (charNumber === true) {
        master.push(number)
    }

    console.log(master)

    // console.log(charNumber)

    // uses a for loop to randomly draw characters to the 'master' array and assign them into a variable called 'password'.
    // The for loop runs the amount of times generated by charNumber


    var password = ""

    for (var i = 0; i < charAmount; i++) {
        var arrPosition = Math.floor(Math.random() * master.length)
        var charChoice = Math.floor(Math.random() * master[arrPosition].length)
        password += master[arrPosition][charChoice];
    };

    return password

}

