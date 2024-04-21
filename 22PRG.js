/* 
Write a program to add the values of two 2D arrays
Program should contains 3 functions including the main function
main()
Call function getArray()
Call function addArray()
Call function displayArray()


*/

function getArray() {
    let size = parseInt(prompt("Enter the size of the array (rows x columns): "));
    let arr = [];

    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(parseInt(prompt(`Enter element for row ${i + 1} and column ${j + 1}: `)));
        }
        arr.push(row);
    }

    return arr;
}

function addArrays(arr1, arr2) {
    let sumArray = [];

    for (let i = 0; i < arr1.length; i++) {
        let row = [];
        for (let j = 0; j < arr1[0].length; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        sumArray.push(row);
    }

    return sumArray;
}

function displayArray(arr) {
    console.log("Array elements:");
    for (let row of arr) {
        console.log(row.join(' '));
    }
}

function main() {
    console.log("Enter values for first array:");
    let array1 = getArray();

    console.log("Enter values for second array:");
    let array2 = getArray();

    let sumArray = addArrays(array1, array2);

    console.log("Sum of the arrays:");
    displayArray(sumArray);
}

// Call the main function to start the program
main();
