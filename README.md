# PasswordGenerator

This application randomly generates a password when the 'generate' button is clicked based off of a series of user entries. 

![](Images/Screenshots/PasswordGen.png)

When the user clicks 'generate' the program runs a function called 'generatePassword()'

![](Images/Screenshots/genPassFunction.png)

The app asks the following -

      1. How many characters should your password be
      2. Should your password have special characters?
      3. Should your password have upper case letters?
      4. Should your password have lower case letters?
      5. Should your password have numbers?
      
The program retrieves the user's responses and pushes them to a nested 'master' array.
![](Images/Screenshots/arrays.png)

![](Images/Screenshots/arrayPushes.png)


Next, the program runs a for loop that uses question 1 to determine the amount (x) of times the for loop should run. 

Inside the for loop the program drills into the nested master array, picks a random character, and appends that character to an empty string.

The program runs this process 'x' amount of times to generate a password that has the desired characters and length the user submitted. 

![](Images/Screenshots/forLoop.png)

Finally, the generate password function alters the HTML with the var 'passwordText' so that the generated password displays on the user's screen. 
