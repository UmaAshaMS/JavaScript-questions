/* 
. Create a constructor function that satisfies the following conditions:
The name of the constructor function should be Car.
It should take three parameters: name, mileage and max_speed.
Store these parameter values in their respective thiskeywords: this.name, this.mileage and this.max_speed.

*/

function Car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
}

// Example usage:
let myCar = new Car("Toyota", 50, 180);

console.log("Car Name:", myCar.name);
console.log("Car Mileage:", myCar.mileage);
console.log("Car Max Speed:", myCar.max_speed);
