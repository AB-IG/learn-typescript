// Classes in TypeScript
// A class in TypeScript is a blueprint for creating objects. It combines data (properties) and behavior (methods) in one place.

// If you've used classes in JavaScript, TypeScript classes are very similar, but TypeScript adds types and access modifiers.

class User {
  Name: string;
  age: number;

  constructor(name: string, age: number) {
    this.Name = name;
    this.age = age;
  }
}

const person = new User("John", 29);

const secondPerson = new User("Doe", 30);

console.log(person);
console.log(secondPerson);
