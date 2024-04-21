// 13. Write a program to identify whether a string is a palindrome or not

let string1 = prompt("Enter a string : ");
let revString = '';

for (let i = string1.length - 1; i >= 0; i--) {
    revString += string1[i];
}
console.log(revString); // Outputs: "!dlrow ,olleH"

if(string1 === revString)
{
    console.log(`The entered string ${string1} is a pallindrome.`);
}
else{
    console.log(`The entered string ${string1} is not a pallindrome.`);

}
