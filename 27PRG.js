/*. Given a variable named my_height, you must throw errors under the following conditions:
notANumberError- When my_heightis NaN
HugeHeightError – When my_heightis greater than
TinyHeight Error - When my_heightis less than
*/

let my_height = 180; // Assign your height here

if (isNaN(my_height)) {
    throw new Error("notANumberError: my_height is NaN");
} else if (my_height > 250) {
    throw new Error("HugeHeightError: my_height is greater than 250");
} else if (my_height < 100) {
    throw new Error("TinyHeightError: my_height is less than 100");
} else {
    console.log("Valid height:", my_height);
}

