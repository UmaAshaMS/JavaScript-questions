/*Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
Program should accept an input from the user and display their grade as follows
 */

let mark = parseFloat(prompt('Enter total mark percentage: '));
console.log(`Mark you entered: ${mark}`);
if(mark > 90)
{
    console.log('A Grade');
}
else if(mark >=80 && mark < 89)
{
    console.log('B Grade');
}
else if(mark >=70 && mark < 79)
{
    console.log('C Grade');
}
else if(mark >=60 && mark < 69)
{
    console.log('D Grade');
}
else if(mark >=50 && mark < 59)
{
    console.log('E Grade');
}
else{
    console.log('Failed');
}