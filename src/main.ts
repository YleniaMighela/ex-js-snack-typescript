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
// In tutti gli altri casi 
else {
  console.log("Tipo non supportato")

}

