/* 
Write a myFilter function that takes 2 parameters: myArray and callback. 
Here, myArray is an array of numbers and callback is a function that takes the elements of myArray as 
its parameter and returns a boolean true if the sum of the number is even or   
false if the sum of the number  is odd.

The myFilter function should return the sum of the array.


*/
function myFilter(myArray, callback) {
    let sum = 0;

    myArray.forEach(element => {
        if (callback(element)) {
            sum += element;
        }
    });

    return sum;
}

// Example usage:
let array = [1, 2, 3, 4, 5];

// Define the callback function
function isSumEven(number) {
    return number % 2 === 0;
}

// Call myFilter with the array and callback function
let result = myFilter(array, isSumEven);

console.log("Sum of even numbers in the array:", result);
