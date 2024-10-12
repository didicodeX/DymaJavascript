let arr = [1, 2, 3];

const [, , ...arr2] = arr;

console.log(arr2);

let a = "a";
let b = "b";

// L'operateur de decomposition ce sont les crochet([]) a gauche de l'operateur egale

[a, b] = [b, a];

console.log("a : ", a);
console.log("b : ", b);


//*************** Ajouter un element dans un tableau *********************
arr.unshift(-1,0)
arr.push(4,5)
// arr.push([...arr,6])
arr = [-2,...arr,6] // spread operateur
console.log("arr : ",arr);

const numbers = [1, 2, 3];
const newNumbers = [...numbers, ...[4, 5]]; // [1, 2, 3, 4, 5]
const [first, ...rest] = newNumbers;
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

/**
 * Dans cet exemple, on utilise spread pour combiner deux tableaux et     rest pour extraire le premier élément et le reste du tableau.
**/

arr.splice(1,0,-1.3)
console.log("arr : ",arr);

//******************* Supprimer un element dans un tableau ******************
arr.shift()
arr.pop()
console.log("arr : ",arr);

const [,,...arr3] = arr;  
console.log("arr3 : ",arr3);

console.log(arr.splice(0,4,"un","deux","trois"))
console.log("arr : ",arr);


//****************** Trouver un element ********************
console.log(arr.indexOf("un"));
console.log(arr.includes("un"));


const monObj = { a: 1, c: "toto" };
const monObj2 = { b: 2, d: 4 };
const copie = { ...monObj, ...monObj2 }; // rest operateur

const tabObj = [{monObj},{monObj2}];

console.log(tabObj);
const element = tabObj.findIndex((element) => {
  return  element.monObj.c === "toto";
});
const el = tabObj.find(el => el.monObj.c === "toto");

console.log(element,el);


const arr4 = [2,3,1];

const copy = [...arr4]; //spread operateur e
console.log();

copy.push(5)

// const copy2 = arr4.slice();
// console.log("Copy 2: ", copy2);

console.log("\narr4 : ",arr4,"\nCopy arr4 : ",copy);

const [,,...reste] = copy;
// console.log(reste);

// const copy3 = arr4.With(1,{name:"Lune"});

//********************* Trier un tableau **************************

// arr4.sort((a,b) => b-a);
// arr4.sort();
console.log("Trier arr4 : ",arr4);

//toSorted retourne un nouveau tableau
const c = arr4.toSorted((a,b) => b-a);
console.log(c);



const arr5 = arr.splice(0,3);
console.log("arr5 : ",arr5);

const newArr5 = arr5.map(value => value.toUpperCase());
console.log("newArr5 : ",newArr5);

const new2Arr5 = arr5.filter(value => value == 'trois');
console.log("new2Arr5 : ",new2Arr5);




