/*
Filename: sophisticated_code.js
Description: Complex and elaborate code that demonstrates various advanced concepts in JavaScript.
*/

// Class representing a geometric shape
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Calculate the area of the shape
  calculateArea() {
    throw new Error("Method 'calculateArea' must be implemented in the sub-class.");
  }
}

// Class representing a circle
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  // Override the calculateArea method for a circle
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Class representing a rectangle
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Override the calculateArea method for a rectangle
  calculateArea() {
    return this.width * this.height;
  }
}

// Create instances of the Shape class and its subclasses
const redCircle = new Circle("red", 5);
const blueRectangle = new Rectangle("blue", 10, 8);

// Calculate and display the areas of the shapes
console.log(`Area of red circle: ${redCircle.calculateArea()}`);
console.log(`Area of blue rectangle: ${blueRectangle.calculateArea()}`);

// Function to find the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Call the factorial function and display the result
console.log(`Factorial of 5: ${factorial(5)}`);

// Object representing a user
const user = {
  name: "John",
  age: 25,
  address: {
    street: "123 ABC Street",
    city: "XYZ City",
    country: "PQR Country"
  },
  hobbies: ["reading", "swimming", "coding"],
  greeting: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// Access and display properties of the user object
console.log(`User name: ${user.name}`);
console.log(`User city: ${user.address.city}`);
console.log(`User hobbies: ${user.hobbies.join(", ")}`);

// Call the greeting method of the user object
user.greeting();

// Custom iterator using a generator function
function* countDownGenerator(start) {
  while (start >= 0) {
    yield start;
    start--;
  }
}

// Iterate over the generator function and display the values
const countdown = countDownGenerator(5);
console.log([...countdown]);

// Function to check if a number is a prime number
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Display prime numbers between 1 and 20
console.log("Prime numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Class representing a custom error
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
    this.date = new Date();
  }
  
  displayError() {
    console.log(`${this.name} at ${this.date}: ${this.message}`);
  }
}

// Throw and catch an instance of the CustomError class
try {
  throw new CustomError("Something went wrong.");
} catch (error) {
  error.displayError();
}