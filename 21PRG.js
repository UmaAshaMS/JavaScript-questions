/* 
 Write a program to multiply the adjacent values of an array and store it in an another array
Program should accept an array
Multiply the adjacent values
Store the result into another array

*/


function multiplyAdjacent(arr) {
    let resultArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
        resultArray.push(arr[i] * arr[i + 1]);
    }

    return resultArray;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
let result = multiplyAdjacent(array);
console.log("Original array:", array);
console.log("Result array:", result);
