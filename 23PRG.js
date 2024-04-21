/* 
 23. Write an object oriented program to store and display the values of a 2D array
Program should contains 3 functions including the main function
main()
Declare an array
Call function getArray()
Call function displayArray()

*/

class Array2D {
    constructor() {
        this.array = [];
    }

    getArray() {
        let size = parseInt(prompt("Enter the size of the array (rows x columns): "));
        
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(parseInt(prompt(`Enter element for row ${i + 1} and column ${j + 1}: `)));
            }
            this.array.push(row);
        }
    }

    displayArray() {
        console.log("Array elements:");
        for (let row of this.array) {
            console.log(row.join(' '));
        }
    }
}

function main() {
    let arr2D = new Array2D();
    arr2D.getArray();
    arr2D.displayArray();
}

// Call the main function to start the program
main();
