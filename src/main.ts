// SNACK 01
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


// SNACK 02
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: "indeterminato" | "determinato" | "freelance"
}

// Dipendente

const utente: Dipendente = {
  nome: "Anna",
  cognome: "Rossi",
  annoNascita: 1990,
  sesso: "f",
  anniDiServizio: [2000, 2004.2007],
  emailAziendale: "Anna@gmail.com",
  contratto: "indeterminato"
}

console.log(utente);


// SNACK 02
type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[],
  certificazioni: string[]
}

const developer: Developer = {
  nome: "Adrea",
  cognome: "Rossi",
  annoNascita: 1990,
  sesso: "f",
  anniDiServizio: [2000, 2004.2007],
  emailAziendale: "Anna@gmail.com",
  contratto: "indeterminato",
  livelloEsperienza: "Junior",
  linguaggi: ["javascript"],
  certificazioni: ["boolean"]
}

console.log(developer);



type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}


const pm: ProjectManager = {
  nome: "Marco",
  cognome: "Rossi",
  annoNascita: 1990,
  sesso: "f",
  anniDiServizio: [2000, 2004.2007],
  emailAziendale: "Anna@gmail.com",
  contratto: "indeterminato",
  teamSize: 4,
  budgetGestito: 40000,
  stakeholderPrincipali: ["CEO"]
}

console.log(pm);
