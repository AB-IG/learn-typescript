// Access Modifiers in TypeScript
// Access modifiers control where a class property or method can be accessed.

// TypeScript has three main access modifiers:

// public
// private
// protected
// Think of them as different levels of visibility.

// 1. Public
//public means the property/method can be accessed from anywhere.It is also the default.
// 2. private
// private means the property/method can only be accessed inside the class that declared it.
// 3. protected
// protected is similar to private, but child classes can also access it.

class User {
  public Name: string;
  public age: number;
  private location: string;

  constructor(name: string, age: number, location: string) {
    this.Name = name;
    this.age = age;
    this.location = location;
  }
  getLocation = (): string => {
    return `${this.location}. Private =  Accessible only inside the class where it is declared.`;
  };
}

const person = new User("John", 33, "Lagos");

console.log(person.getLocation());
console.log(
  `${person.Name}  ${person.age}. Public = Accessible everywhere. It is also the default if you don't specify a modifier.`,
);
