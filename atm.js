const prompt = require('prompt-sync')();
const balance = 1000;

const action = prompt('What would you like to do? (withdraw/deposit) ').toLowerCase();

if (action === 'withdraw') {
    const amount = parseFloat(prompt('Enter the amount to withdraw: '));
    if (amount > balance) {
        console.log('Insufficient funds. Transaction denied.');
    } else {
        console.log(`You have withdrawn $${amount}. Your new balance is $${balance - amount}.`);
    }
} else if (action === 'deposit') {
    const amount = parseFloat(prompt('Enter the amount to deposit: '));
    console.log(`You have deposited $${amount}. Your new balance is $${balance + amount}.`);
} else {
    console.log('Invalid action. Please choose either "withdraw" or "deposit".');
}