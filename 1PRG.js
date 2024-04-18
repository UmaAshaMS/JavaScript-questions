// Accept a char input from the user and display it on the console.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a char: ', (input) => {
  console.log('You entered:', input);
  rl.close();
});