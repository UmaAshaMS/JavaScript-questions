/*
Write a program to print the multiplication table of given numbers.
Accept an input from the user and display its multiplication table
*/

let num = parseInt(prompt('Enter a number: '));
console.log(`You entered: ${num}`);
for(let i = 1; i <= 10; i++)
{
    mul = i * num;
    console.log(`${num} * i = ${mul}`);
}