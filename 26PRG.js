/* 
Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() 
and then print the reversed string to the console. 
If the try clause has an error, print the error message to the console. 
Finally, print the typeof of the my_string variable to the console.

*/

let my_string = "Hello, world!";

try {
    let reversed_string = my_string.split('').reverse().join('');
    console.log("Reversed string:", reversed_string);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Type of my_string:", typeof my_string);
