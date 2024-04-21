/* 
Write a menu driven program to calculate the area of a given object.
Program should contain two classes
Class 1: MyClass
Class 2: Area
Class MyClass should inherit class Area and should contain the following functions
main()
circle()
square()
rectangle()
triangle()
Class Area should contain the following functions to calculate the area of different objects
circle()
square()
rectangle()
triangle()

*/

class Area {
    circle(radius) {
        return Math.PI * radius ** 2;
    }

    square(side) {
        return side ** 2;
    }

    rectangle(length, breadth) {
        return length * breadth;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        let choice = parseInt(prompt("Choose the object to calculate area:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle"));
        switch (choice) {
            case 1:
                this.circleArea();
                break;
            case 2:
                this.squareArea();
                break;
            case 3:
                this.rectangleArea();
                break;
            case 4:
                this.triangleArea();
                break;
            default:
                console.log("Invalid choice!");
        }
    }

    circleArea() {
        let radius = parseFloat(prompt("Enter the radius of the circle: "));
        console.log("Area of the circle:", this.circle(radius));
    }

    squareArea() {
        let side = parseFloat(prompt("Enter the side of the square: "));
        console.log("Area of the square:", this.square(side));
    }

    rectangleArea() {
        let length = parseFloat(prompt("Enter the length of the rectangle: "));
        let breadth = parseFloat(prompt("Enter the breadth of the rectangle: "));
        console.log("Area of the rectangle:", this.rectangle(length, breadth));
    }

    triangleArea() {
        let base = parseFloat(prompt("Enter the base of the triangle: "));
        let height = parseFloat(prompt("Enter the height of the triangle: "));
        console.log("Area of the triangle:", this.triangle(base, height));
    }
}

let myObj = new MyClass();
myObj.main();
