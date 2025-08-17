// Galvez_Exercise1.js

// 1. Create a variable using var to store your name.
var name = "Galvez";
console.log("Name:", name);

// 2. Create a variable using let to store your age as a string.
let age = "20";
console.log("Age:", age);

// 3. Create a constant PI with the value 3.1416 and try reassigning it.
const PI = 3.1416;
console.log("PI:", PI);
// Uncommenting the next line will cause an error:
// PI = 3.15; 

// 4. Create variable boolean isStudent: true if age < 25, else false.
let isStudent = Number(age) < 25 ? true : false;
console.log("Is Student:", isStudent);

// 5. Create an object person with nested properties.
let person = {
  firstName: "Galvez",
  age: age,
  address: {
    city: "Davao",
    country: "Philippines"
  }
};
console.log("Person object:", person);

// 6. Create an array colors containing at least 5 color names (1 repeated).
let colors = ["red", "blue", "green", "yellow", "blue"];
console.log("Colors:", colors);

// ------------------ Part 2 ------------------

// 1. Reverse and Transform words
let fruits = ["apple", "banana", "grape", "mango"];
let transformed = [];

for (let word of fruits) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  transformed.push(reversed.toUpperCase());
}
console.log("Transformed Fruits:", transformed);

// 2. Filtering and Counting numbers
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filtered = [];
let count = 0;

for (let num of numbers) {
  if (num % 2 === 0 && num > 20) {
    filtered.push(num);
    count++;
  }
}

console.log(`Found ${count} numbers: [${filtered}]`);
