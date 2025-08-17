// Galvez_Exercise1.js

var name = "Galvez";
console.log("Name:", name);

let age = "20";
console.log("Age:", age);

const PI = 3.1416;
console.log("PI:", PI);

let isStudent = Number(age) < 25 ? true : false;
console.log("Is Student:", isStudent);

let person = {
  firstName: "Galvez",
  age: age,
  address: {
    city: "Davao",
    country: "Philippines"
  }
};
console.log("Person object:", person);

let colors = ["red", "blue", "green", "yellow", "blue"];
console.log("Colors:", colors);

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