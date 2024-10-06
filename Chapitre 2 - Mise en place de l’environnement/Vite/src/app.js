console.log("Hello World !");


/**
 * Package.json
  {
  "name": "vite",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "vite",  // Stater un projet vite
    "build": "vite build",   // creer un dossier dist(distrubution l'app est terminer)
    "preview": "vite preview",  // Previsualiser l'applocation final
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "vite": "^5.4.8"
  }
}
 */

console.info("test");
console.warn("test");
console.error("test");
console.log("test");

// On peut afficher le temps passé entre l'exécution de la ligne suivante
// et de l'exécution de la ligne d'après :
console.time();
console.timeEnd();

// Affichage d'un tableau, nous verrons en détails les tableaux dans les
// leçons suivantes :
console.table(["chat", "chien", "koala"]);

// Affichera une erreur pour le deuxième car l'assertion est fausse :
console.assert(true, "Bonjour 1 !");
console.assert(false, "Bonjour 2 !");

// Compter le nombre d'exécution :
// Nous étudierons les boucles en détails plus tard également.
for (let i = 0; i < 10; i++) {
  console.count();
}
