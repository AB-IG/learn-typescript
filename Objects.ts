// Objects in TypeScript
// An object is a collection of key-value pairs. In TypeScript, you can specify the types of those properties.

// Normal Objects
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
};
console.log(person);

// with a fucntion

const data = (): { firstName: string; lastName: string; age: number } => ({
  firstName: "john",
  lastName: "Doe",
  age: 30,
});

console.log(data());
