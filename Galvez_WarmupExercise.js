let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

let names = users.map(user => user.name);
console.log("1. Names:", names); 


let people = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 18 },
  { name: "Spike", age: 22 }
];

let adults = people.filter(person => person.age >= 18);
console.log("2. Adults:", adults);


let morePeople = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 29 }
];

let oldest = morePeople.reduce((prev, current) => 
  current.age > prev.age ? current : prev
);
console.log("3. Oldest Person:", oldest);