const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');
const age = prompt('What is your age? ');
const isStudent = prompt('Are you a student? (yes/no) ').toLowerCase() === 'yes';
const college = prompt('Which college do you study at? ');
const city = prompt('Which city do you live in? ');

console.log(`Hello ${name}, you are ${age} years old.`);
console.log(`Are you a student? ${isStudent}`);
console.log(`You study at ${college} and live in ${city}.`);