"use strict";
let n = 0;
n = 3;

// function a1(){
//   let test = "test";
//   console.log(test);

// }
// function b2(){
//   a1();
//   let foo = "foo";
//   console.log(foo);
// }

// b2();
// const baro = 0;

// Chaine de portee

function b() {
  function a() {
    console.log(foo);
  }
  let foo = 1;
  a();
}
let foo = 2;
b();

// contexte d'execution global
//    1- Phase d'initialisation hoisting preparation de la memoire
//    2- Execution

// console.log(this);

// function func(){
//   console.log(this);
// }
// func();

// const a = () => {
//   console.log(this);
// }
// window.addEventListener("load",a);

// console.log(window.func);

const obj = {
  a: 1,
  func() {
    console.log(this);
  },
  f2: function () {
    console.log(this);
  },
  f3: () => {
    console.log(this);
  }
};

obj.func();
obj.f2();
obj.f3();

function func2(f){
  f();
}

func2(obj.f3); // this ici represente window parceque la finction passe en paranetre n'est plus dans obj

// ************************* Fonction fleche ***********************

const add = (nb1,nb2) => nb1 + nb2;

console.log(add(1,2))

const add2 = (nb1,nb2) => ({
  nb1,nb2,
  total: nb1 + nb2
})

console.log(add2(2,4));

// this de la fonction fleche c'est le this de l'environnement lexical du parent


// ***************** Fonction de rappel callback ********************

// const cb = (p1, p2) => {
//   console.log("cb",p1,p2);
// }

function fn(a,cb){
  console.log("a : ",a);
  const p1 = 1, p2 = 2;
  cb(p1,p2);
}

fn("je sui a ",(p1,p2) => {
    console.log("cb",p1,p2);
})
fn("je sui a ",p1 => {
    console.log("cb",p1);
})

// ***************** Closure ********************

function powerBy(power){
  return function(nb){
    return nb ** power;
  }
}

console.log(powerBy(2)(2));