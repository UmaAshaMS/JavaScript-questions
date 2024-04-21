//Write a program to sort an array in descending order
//Program should accept and array, sort the array values in descending order and display it

let size = prompt("Enter array size: ");
let arr1 = new Array();
for(let i = 0; i < size; i++)
{
    let value = prompt("Enter array elements:");
    arr1.push(value);
}
console.log(`Array elements are ${arr1}`);
//arr1.sort(); sorts only string.
arr1.sort((a, b) => b - a);
console.log(`Sorted Array :  ${arr1}`);

