// A generic function is a function that can work with multiple different types, while still keeping full type safety — instead of locking itself to one specific type, or giving up type safety entirely with any.

const func = <T>(a: T, b: T): [T, T] => {
  return [a, b];
};

const num = func<number>(1, 2);
const str = func<string>("John", "Doe");

interface Dog {
  name: string;
  local: boolean;
}

// Using an interface to type a Generic
const localBreed = func<Dog>(
  { name: "Bingo", local: true },
  { name: "Jack", local: false },
);

console.log(num);
console.log(str);
console.log(localBreed);
