// let a = 1;
// let b = a;

// console.log({ a, b });

// b += 3;
// console.log({ a, b });

let a = {b:1};
let c = a;

c.b = 4;

console.log(a);
console.log(c);

const title = document.querySelector("h1");

console.log(title);

title.innerHTMl = "Tano";
