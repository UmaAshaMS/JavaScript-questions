/* 
Write a program to check whether a student has passed or failed in a subject after he    
or she enters their mark (pass mark for a subject is 50 out of 100).
Program should accept an input from the user and output a message as “Passed” or “Failed”

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter the mark out of 100: ', (input1) => {
    const mark = parseInt(input1);

    if(mark >= 50){
        console.log("Passed");
    }
    else if(mark < 50){
        console.log("Failed");
    }
    else{
        console.log("Invalid input");
    }
});