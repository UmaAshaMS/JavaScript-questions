/* 
  14. Write a program to add to two dimensional arrays
Program should accept two 2D arrays and display its sum

*/

function addArrays(arr1, arr2) {
    if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
        return "Error: Arrays must have the same dimensions";
    }

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

// Example usage:
let array1 = [[1, 2, 3], [4, 5, 6]];
let array2 = [[7, 8, 9], [10, 11, 12]];

let sum = addArrays(array1, array2);

if (typeof sum === 'string') {
    console.log(sum); // Error message
} else {
    console.log("Sum of the arrays:");
    for (let row of sum) {
        console.log(row);
    }
}
