// dato sconosciuto
let dato: unknown;
// Se è una stringa: stampala in maiuscolo
if (typeof dato === 'string') {
  console.log(dato.toUpperCase);
}
// Se è un numero: moltiplicalo per due e stampalo
else if (typeof dato === 'number') {
  console.log(dato * 2);

}
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
else if (typeof dato === 'boolean') {
  console.log(dato ? "Si" : "No");

}
// BONUS
// Se è null: stampa “Il dato è vuoto”
else if (dato === null) {
  console.log("Il dato è vuoto");


}
// Se è un array: stampa la sua lunghezza
else if (Array.isArray(dato)) {
  console.log(dato.length);
}
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.
else if (dato instanceof Promise) {
  dato.then((mes) => console.log("Promises risolta", mes))

}



// In tutti gli altri casi 
else {
  console.log("Tipo non supportato")

}

