let people = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 30 }
];

function updatePerson(id, person) {
  const index = people.findIndex(p => p.id === id);
  if (index !== -1) {
    people[index] = { ...people[index], ...person };
  }
}

updatePerson(2, { name: "Bobby", age: 31 });
console.log("Updated people:", people);

function isValidPassword(password) {
  const uppercase = (password.match(/[A-Z]/g) || []).length >= 3;
  const digit = /\d/.test(password);
  const symbol = /[_!?\*]/.test(password);

  return uppercase && digit && symbol;
}

console.log("Password check (ABCD1*):", isValidPassword("ABCD1*"));
console.log("Password check (A1*):", isValidPassword("A1*"));

function areValuesUnique(numbers) {
  const uniqueSet = new Set(numbers);
  return uniqueSet.size === numbers.length;
}

console.log("Unique check [1, 2, 3]:", areValuesUnique([1, 2, 3]));
console.log("Unique check [1, 2, 2]:", areValuesUnique([1, 2, 2]));