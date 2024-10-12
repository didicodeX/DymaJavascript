const terre = {
  population: 7e7,
  satellite: "Lune",
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
  getTemperatureMin() {
    console.log(`Temperature minimal ${terre.temperature.min}`);
  },
};

// console.log(terre.population);
// console.log(terre["population"]);

// les objet sont copie par reference
const copy = terre; // copy c'est une reference de terre

copy.isOld = true;
const prop = "temperature";
// console.log(terre[prop]);
// terre.getTemperatureMin();

// ******************* Syntaxe ES6 ***************************

// const population = 7e7;
// const satellite = "Lune";
// const temperature = {
//   min: -70,
//   max: 60,
// };
// const isOld = false;

// const pop = "population";

// const newTerre = {
//   [pop]: population,
//   satellite,
//   temperature,
//   isOld,
// };

// console.log(newTerre);

// ******************* Decomposition ***************************

//Avant
// const population = terre.population;
const population = 50;

//Maintenant
const { population: populationTerre, satellite, ...rest } = terre;
console.log(population, populationTerre, satellite);
console.log(rest);

// ***************** Verifier l'existance d'un objet *********************

//Avant
// if (terre.population) {
//   console.log("ok !");
// }
// else {
//   console.log("Ko !");
// }

//Maintenant
if ("population" in terre) {
  console.log("ok !");
} else {
  console.log("Ko !");
}

if (terre.hasOwnProperty("test")) {
  console.log("ok !");
} else {
  console.log("Ko !");
}

// ***************** Fusion d'objet *********************

// Object.assign(objetCible, objetACopier1, objetACopier2...)

const objet1 = { a: 1, b: 2 };
const objet2 = { c: 3 };
const résultat = Object.assign({}, objet1, objet2);
console.log(résultat); // {a: 1, b: 2, c: 3}

const monObj = { a: 1, c: "toto" };
const monObj2 = { b: 2, d: 4 };
const copie = { ...monObj, ...monObj2 };

copie.a = 2;
console.log(monObj); // {a: 1}
console.log(copie); // {a: 2, b: 2}

// ***************** iterer sur des objets *********************

const obj = {
  a: "un",
  b: "deux",
  c: "trois",
};

for (o in obj) {
  // console.log(o);
  console.log(obj[o]);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// ***************** copie des objets *********************
const a = {
  name: "Toto",
  age: 12,
  foo: {
    bar: "zoo",
  },
};
// shallow copir
// const b = Object.assign({}, a);
// const c = { ...a };

// deep
// On ne peut pas utiliser JSON.stringify() sur un objet qui contient une fonction
const b = JSON.parse(JSON.stringify(a));
b.name = "Tata";
b.foo.bar = 123;
console.log(b);
console.log(a);

// ***************** Chainage optionnel *********************

const book = {
  author: {
    name: "Jean",
    age: 34,
    sayHello() {
      return true;
    },
    sayBye(){
      console.log("Bye");
    }
  },
};

if (book?.author?.name) {
  console.log("Il y a un nom");
} else {
  console.log("Il y a pas de nom");
}

if (book?.author?.sayHello?.()) {
  console.log("Il y a un Hello");
}
else {
  console.log("no Hello");
}

if (book?.author?.sayBye?.()) {
  
}

