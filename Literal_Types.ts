// Literal Types in TypeScript
// A literal type is a type that represents one specific value, rather than a general type like string or number.

let colors: "green" | "blue" | "red";

const color = (num: number): string =>
  num > 5 ? (colors = "red") : (colors = "green");

console.log(color(6));

// Number Literal

let num: 1 | 3 | 5;
num = 3;

console.log(num);

// String Literal
let Name: "John" | "Doe";
Name = "Doe";

console.log(Name);

// Boolean Literal

let isHard: true | false;

isHard = false;

console.log(isHard);
