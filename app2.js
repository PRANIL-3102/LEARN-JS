const prompt = require('prompt-sync')();

const username = prompt('Enter your username: ');
const password = prompt('Enter your password: ');

if (username === "pranil" && password === "202005") {
    console.log("Access granted. Welcome!");
} else {
    console.log("Access denied. Incorrect username or password.");
}