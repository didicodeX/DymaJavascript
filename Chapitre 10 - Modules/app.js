// import "./lib.js"

import { a as a1} from "./lib.js"; // lorsqu'on met les acolade on vas exporter les export nomm

import * as obj from "./lib.js"; //importer tout sous forme d'un seul objet

import f from './lib.js'; // sans accolade c'est un export default

// console.log(obj);

f()

// console.log(a1);


const span = document.querySelector("span");
const div = document.querySelector("div")

// console.log(span,div);

span.addEventListener("click",()=> {
  console.log("Click on span");
})
div.addEventListener("click",(e)=> {
  console.log("Click on div");
  e.stopPropagation();
})
