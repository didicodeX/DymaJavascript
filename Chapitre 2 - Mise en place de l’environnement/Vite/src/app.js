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


// ************************************** NPM **************************************

// Le versionning avec npm
/**
 * version: "1.0.0"
 * le dernier 0 c'est pour les bug. a chaque fois qu'on resous un bug on incremente la valeur Ex: "1.0.1"
 * l'avant dernier 0 c'est les minor realease, nouvelle version mineur => nouvel fonctionnalite tout est toujours compatible pas de mise a jour drastique Ex: "1.1.0" on remet le dernier 0 a 0 pour les bug de la nouvelle realease
 * le premier "1" -> la version majeur || major realease lorqu'on a effectuee des mise a jour majeur au point ou ca casse la retrocompatibilite.
 *
 *"express": "^4.21.0" le symbole "^" signifie qu s'il ya des mise a jour(minor realease) fait les et implicitement la mise  la mise a jour des bug ou patch
 *"express": "~4.21.0" le symbole "~" signifie qu npm vas faire la mise a jour des bug ou patch
 *"express": "*4.21.0" le symbole "*" signifie qu npm vas faire la mise a jour des version majeur => c'est deconseiller parce que les mise a jour majeur peuvent tout casse
 * "0.0.0" ==> veut dire que c'est en version beta ou alpha
 */
