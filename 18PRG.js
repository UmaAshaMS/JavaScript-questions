/* 

Grades are computed using a weighted average. 
Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.

Write a program to find the grade of a student during his academic year. 
Program should accept the scores for written test, lab exams and assignments
Output the grade of a student (using weighted average)

*/

let written_test = prompt("Enter written exam mark = ");
console.log(`Written exam mark = ${written_test}`);
let lab_exam = prompt("Enter lab exam mark= ");
console.log(`Lab exam mark = ${lab_exam}`);
let assignmnet = prompt("Enter assignmnet mark = ");
console.log(`Assignment mark = ${assignmnet}`);

let grade = 0.7 * written_test + 0.2 * lab_exam + 0.1 * assignmnet;
console.log(`Grade = ${grade}`);

