// Intersection Types in TypeScript
// An intersection type combines multiple types into one type. It uses the & operator.

// The resulting type must satisfy all the combined types.

// First Type
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

// Second Type
type AccountDetails = {
  email: string;
  password: string;
};

type PersonAndAccountDetails = Person & AccountDetails;

const user: PersonAndAccountDetails = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "johndoe@gmail.com",
  password: "johndoe",
};

console.log(user);
