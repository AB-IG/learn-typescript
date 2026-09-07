// Array Types in TypeScript
// Array types tell TypeScript what type of values an array is allowed to contain.

// There are two main ways to write an array type:

// 1. Square bracket syntax []

const names: string[] = ["john", "Akira", "Doe"];

const scores: number[] = [45, 65, 33];

console.log(typeof scores, scores);
console.log(typeof names, names);

const list: number[] = [];
// using the spread operator method
const newList: number[] = [...list, 22, 22];
// push method
newList.push(33);
console.log(newList);
// 2. Generic Array<Type> syntax

const nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);
