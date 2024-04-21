//2.Accept two inputs from the user and output their sum.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter num1: ', (input1) => {
    const num1 = parseInt(input1);

    rl.question('Enter num2: ',(input2)=>{
        const num2 = parseFloat(input2);
    

    const sum = parseFloat(num1 + num2);
    console.log(`The sum of ${num1} and ${num2} = ${sum.toFixed(2)}`);
    rl.close();
});
});

        