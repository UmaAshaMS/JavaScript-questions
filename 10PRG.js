//Write a program to interchange the values of two arrays.
//Program should accept an array from the user, 
//swap the values of two arrays and display it on the console

// Function to prompt the user for an array
function promptForArray(promptMessage) {
    let input = prompt(promptMessage);
    return input.split(' ').map(Number);
}

// Prompt the user for the first array
let array1 = promptForArray('Enter the first array separated by spaces: ');

// Prompt the user for the second array
let array2 = promptForArray('Enter the second array separated by spaces: ');

console.log('Arrays before swapping:');
console.log('First array:', array1);
console.log('Second array:', array2);

// Swap the values of the two arrays
[array1, array2] = [array2, array1];

console.log('Arrays after swapping:');
console.log('First array:', array1);
console.log('Second array:', array2);
