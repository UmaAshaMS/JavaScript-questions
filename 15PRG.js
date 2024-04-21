/* 
Write a program to accept an array and display it on the console using functions
Program should contain 3 functions including main() function
main()
Declare an array
Call function getArray()
Call function displayArray()
		getArray()
Get values to the array
		displayArray()
Display the array values

*/
function getArray() {
    let size = parseInt(prompt("Enter the size of the array: "));
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(parseInt(prompt(`Enter element ${i + 1}: `)));
    }

    return arr;
}

function displayArray(arr) {
    console.log("Array elements:");
    for (let element of arr) {
        console.log(element);
    }
}

function main() {
    let arr = getArray();
    displayArray(arr);
}

// Call the main function to start the program
main();
