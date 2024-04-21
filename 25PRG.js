/* 
Write a Javascript program to display the status 
(I.e. display book name, author name & reading status) of books. 
You are given an object library in the code's template. 
It contains a list of books with the above mentioned properties.
Your task is to display the following:
*/

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

function displayBookStatus(book) {
    if (book.readingStatus) {
        console.log(`Already read '${book.title}' by ${book.author}.`);
    } else {
        console.log(`You still need to read '${book.title}' by ${book.author}.`);
    }
}

console.log("Book Status:");
library.forEach(book => {
    displayBookStatus(book);
});
