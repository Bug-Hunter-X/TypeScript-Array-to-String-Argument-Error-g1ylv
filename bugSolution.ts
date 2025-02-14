function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(person: string[]) {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeter(user[0])); // Correct: Accessing the first element of the array
console.log(greeterArray(user));// Correct: handles an array of strings