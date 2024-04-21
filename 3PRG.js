/*Write a program to find the simple interest.
Program should accept 3 inputs from the user and calculate simple interest for the given inputs. 
Formula: SI=(P*R*n)/100)*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter Principal amount: ', (input1) => {
    const P = parseInt(input1);

    rl.question('Enter rate of interest: ',(input2) => {
        const R =parseFloat(input2);

        rl.question('Enter time period in years:', (input3) => {
            const T =parseFloat(input3);

            const SI = parseFloat((P*R*T)/100);

            console.log(`SI = ${SI.toFixed(2)}`);

            rl.close();
        });
    });
});