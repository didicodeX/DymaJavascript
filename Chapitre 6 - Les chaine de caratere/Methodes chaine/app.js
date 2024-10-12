const a = "      je suis le soleil";
const bt = "soleil,terre,lune"
const at = a.trim()
// const b = a[0];
const b = a.toLowerCase().endsWith("eil")
const c = a.indexOf("il");
const d = a.slice(2,a.length);


console.log(at,b,c,d, bt.split(""));
