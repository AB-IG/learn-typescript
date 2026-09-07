//any tells TypeScript: “Don't check this value's type.”

let color: any = "Blue";

color = 21;
color = true;
console.log(color);
