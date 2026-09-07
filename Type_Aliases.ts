// Type Aliases in TypeScript
// A type alias lets you give a custom name to a type. It is created using the type keyword.

type User = {
  name: string;
  age: number;
  location: string;
};

const personData = (user: User) => {
  return { name: user.name, age: user.age, location: user.location };
};
console.log(personData({ name: "John Doe", age: 30, location: "Abuja" }));

// Destructuring
const userData = ({ name, age, location }: User) => {
  return { name, age, location };
};

console.log(userData({ name: "Paul", age: 44, location: "Manchester" }));
