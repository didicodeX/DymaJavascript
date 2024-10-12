const a = "je suis le 778soleil";

const evaluate = /[le] {1,3}\d/.test(a); // /[le]+\d/.test(a); le (+) signifie 1 ou plusieur donc cette regex return false
// /[le]*\d/.test(a); le (*) siginifie 0 ou plusieur
// /[le] {1,3}\d/.test(a); le {1,3} signifie entre 1 et 3
//ou
const inclue = a.includes("je");
const evaluate2 = /\d{3}[A-Z]?/.test(a);

const b = "maPhoto_1234.jpg";
const evalueB = /(.*)\./.exec(b) // les () permettent de groupe'
console.log(evaluate, evaluate2, evalueB);
