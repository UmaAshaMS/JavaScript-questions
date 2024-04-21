/* Using the ‘switch case’
 write a program to accept an input number from the user and output the day as follows.  */

let day = parseInt(prompt('Enter a day: '));
console.log(`You entered: ${day} `);
switch(day)
{
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monnday');
        break;
    case 3:
        console.log('Tuesday');
        break; 
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thrusday');
        break;   
    case 6:
        console.log('Friday');  
        break;
    case 7:
        console.log('Saturday'); 
        break;      
} 