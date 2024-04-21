/*7. Write a menu driven program to do the basic mathematical operations such as    addition, subtraction, multiplication and division (hint: use if else ladder or switch)
Program should have 4 functions named addition(), subtraction(), multiplication() and division()
Should create a class object and call the appropriate function as user prefers in the main function
*/

class Calculator {
    addition(num1, num2) {
        return num1 + num2;
    }

    subtraction(num1, num2) {
        return num1 - num2;
    }

    multiplication(num1, num2) {
        return num1 * num2;
    }

    division(num1, num2) {
        if (num2 === 0) {
            return "Error: Division by zero";
        }
        return num1 / num2;
    }
}

function main() {
    const calculator = new Calculator();

    let choice = prompt("Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter your choice: ");

    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));

    switch (choice) {
        case '1':
            console.log(`Result of addition: ${calculator.addition(num1, num2)}`);
            break;
        case '2':
            console.log(`Result of subtraction: ${calculator.subtraction(num1, num2)}`);
            break;
        case '3':
            console.log(`Result of multiplication: ${calculator.multiplication(num1, num2)}`);
            break;
        case '4':
            console.log(`Result of division: ${calculator.division(num1, num2)}`);
            break;
        default:
            console.log("Invalid choice!");
    }
}

main();
