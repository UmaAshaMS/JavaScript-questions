/* 
Write a program to find out the income tax amount of a person.
Program should accept annual income of a person
Output the amount of tax he has to pay

Eg 1:
Enter the annual income
495000
Income tax amount = 24750.00
*/

let income = prompt("Enter your annual income: ");
console.log(`Your annual income = ${income}`);
let tax;
if(income < 250000)
{
    console.log('No tax')
}
else if(income >= 250000 && income < 500000)
{
    tax = parseFloat(0.05 * income);
    console.log(`Tax amount = ${tax}`);
}
else if(income >= 500000 && income < 1000000)
{
    tax = parseFloat(0.2 * income);
    console.log(`Tax amount = ${tax}`);
}
else if(income >= 1000000 && income < 5000000)
{
    tax = parseFloat(0.3 * income);
    console.log(`Tax amount = ${tax}`);
}
else{
    console.log('Invalid input');
}
