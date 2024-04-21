// 11. Write a program to find the number of even numbers in an array
//Program should accept an array and display the number of even numbers contained in that array

let size = prompt("Enter array size : ");
let arr = [];
for(let i = 0; i < size; i++)
{
    let values = prompt("Enter array elemnts : ");
    arr.push(values);
}
console.log(`Array eleemnts are : ${arr}`)
let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    };

    console.log(`The number of even numbers in the array is: ${count}`);
