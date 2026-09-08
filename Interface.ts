// In TypeScript, an interface is a way to describe the shape of an object.

// Think of it as a contract that says:

// "Any object that claims to be this type must have these properties and types."

// With an Object
interface User {
  Name: string;
  age: number;
  currentLocation?: string;
}

const user: User = {
  Name: "John Doe",
  age: 28,
};

console.log(user);

// With a Function

interface addNumbers {
  (a: number, b: number): number;
}

const Add: addNumbers = (a, b) => a + b;

console.log(Add(2, 4));

// With method

interface Song {
  title: string;
  singerName: string;
  getSong(name: string, title: string): string;
}

const playlist: Song = {
  title: "SunLight",
  singerName: "R Kelly",
  getSong: (name, title) => {
    return `${name} ${title}`;
  },
};

console.log(playlist.getSong("Sunlight", "R Kelly"));
