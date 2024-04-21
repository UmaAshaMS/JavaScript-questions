/* 
 Write a program to check whether a given number is prime or not
Program should accept an input from the user and display whether the number is prime or not
*/

let num = prompt("Enter a number: ");
num = parseInt(num);

let isPrime = true;

if (num <= 1) {
    console.log("Invalid input.");
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break; // Exit the loop if a divisor is found
        }
    }

    if (isPrime) {
        console.log(`${num} is prime.`);
    } else {
        console.log(`${num} is not prime.`);
    }
}

