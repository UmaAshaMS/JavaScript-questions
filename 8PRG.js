/* 
Write a program to find the sum of all the odd numbers for a given limit
Program should accept an input as limit from the user and 
display the sum of all the odd numbers within that limit
For example if the input limit is 10 then the result is 1+3+5+7+9 = 25
*/

let limit = prompt("Enter the limit : ");
let sum = 0;
for(let i = 1; i <= limit; i++)
{
    if(i % 2 != 0)
    {
        sum = sum + i;
    }

}
console.log(`Sum of all odd numbers within ${limit} = ${sum}`);