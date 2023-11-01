/* 
  Filename: sophisticated_calculator.js

  Description: This code represents a sophisticated calculator with advanced mathematical operations and error handling. It includes a GUI interface, arithmetic functions, trigonometric functions, logarithmic functions, and additional utilities.

  Author: Code Master
*/

// GUI Interface Class
class CalculatorGUI {
  constructor() {
    // Logic for creating the graphical user interface
    // ...
  }

  // Methods for handling user interactions and displaying results
  // ...
}

// Arithmetic Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Trigonometric Functions
function sine(x) {
  return Math.sin(x);
}

function cosine(x) {
  return Math.cos(x);
}

function tangent(x) {
  return Math.tan(x);
}

// Logarithmic Functions
function logarithm(x, base) {
  if (x <= 0 || base <= 0 || base === 1) {
    throw new Error("Invalid input for logarithm function.");
  }
  return Math.log(x) / Math.log(base);
}

function naturalLogarithm(x) {
  if (x <= 0) {
    throw new Error("Invalid input for natural logarithm function.");
  }
  return Math.log(x);
}

// Additional Utilities
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Usage example:
const gui = new CalculatorGUI();

// Perform mathematical operations
const result1 = add(5, 6);
const result2 = divide(10, 2);
const result3 = sine(0.5);

// Display results in GUI
gui.displayResult(result1);
gui.displayResult(result2);
gui.displayResult(result3);