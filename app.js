// Selecting the password input field
const password = document.getElementById('password');

// Set the desired length of the generated password
const length = 8;

// Define the characters that can be used in the password
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+=-[]{}|<>/?";

// Combine all characters into a single string
const allcharacters = uppercase + lowercase + numbers + specialChars;

// Function to generate a random password
function generatePassword() {
    let newpassword = '';

    // Ensure at least one character from each category is included
    newpassword += uppercase[Math.floor(Math.random() * uppercase.length)]; // Adds a random uppercase letter
    newpassword += lowercase[Math.floor(Math.random() * lowercase.length)]; // Adds a random lowercase letter
    newpassword += numbers[Math.floor(Math.random() * numbers.length)]; // Adds a random number
    newpassword += specialChars[Math.floor(Math.random() * specialChars.length)]; // Adds a random special character
    /*
       How the line below works:
       1. `Math.random()` generates a random decimal number between 0 (inclusive) and 1 (exclusive).
       2. Multiplying by `lowercase.length` scales the number to a range between 0 and the length of the `lowercase` string.
       3. `Math.floor()` rounds down the value to the nearest whole number, ensuring it's a valid index.
       4. `lowercase[...]` accesses the character at that random index and adds it to `newpassword`.
    */

    // Fill the remaining characters randomly until the password reaches the required length
    while (newpassword.length < length) {
        newpassword += allcharacters[Math.floor(Math.random() * allcharacters.length)];
    }

    // Set the generated password in the input field
    password.value = newpassword;
}

// Function to copy the generated password to the clipboard
function copyPass() {
    // Select the text inside the input field
    password.select();

    // Check if there is a password to copy
    if (password.value == "") {
        alert("No password to copy!");
        return;
    }

    // Execute the copy command
    document.execCommand("copy");

    // Notify the user that the password has been copied
    alert("Password copied to clipboard!");
}
