// Function Paramter Anotation
// In TypeScript, parameter annotations specify the type of values a function expects.

const add = (num_1: number, num_2: number) => num_1 + num_2;

console.log(add(12, 5));

//Return Annotation
const checkNumber = (num: number): boolean => num > 5;

console.log(checkNumber(6));
