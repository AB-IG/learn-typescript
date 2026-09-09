// A generic function is a function that can work with multiple different types, while still keeping full type safety — instead of locking itself to one specific type, or giving up type safety entirely with any.

const func = <T>(a: T, b: T): [T, T] => {
  return [a, b];
};

const res = func<number>(1, 2);
const res_2 = func<string>("John", "Doe");

console.log(res);
console.log(res_2);
