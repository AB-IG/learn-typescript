// Union Types in TypeScript
// A union type allows a value to be one of several types. You create a union using the | operator.

// Think of it as OR.

type Person = {
  name: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};
type PersonalData = Person | AccountDetails;

const user: PersonalData = {
  email: "doe@gmail.com",
  password: "doe",
};

const list: (number | string)[] = ["John", 1, 2, 3];

console.log(user);
console.log(list);
