export let a;
export function hello() {
  console.log("Hello");
}
export const obj = {
  foo: "Bar",
};
a = "Lib.js";

let b = "b";
let c = "c";
let d = "d";

export { b as b1, c, d };

export const { foo } = obj;

export default function f(){
  // console.log("Je suis la fonction f"); 
}

// console.log("lib.js loading");

