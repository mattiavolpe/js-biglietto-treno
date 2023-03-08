/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/* 
STRUMENTI
- prompt()
- const / let
- console.log()
- Number()
- if else
- Math.round ?
*/

// Chiedo all'utente quanti km deve percorrere e controllo che sia un numero e che sia maggiore di 0
// Chiedo all'utente l'età e controllo che sia un numero maggiore o uguale a 0
// Calcolo il costo lordo del viaggio
// Calcolo il prezzo scontato a seconda dell'età
// Formatto il prezzo scontato per avere due cifre decimali

// Chiedo all'utente quanti km deve percorrere e controllo che sia un numero e che sia maggiore di 0
const kms = Number(prompt("Quanti km devi percorrere? (Separare i decimali con il punto)"));

console.log(`Km: ${kms}`);

if (isNaN(kms) || kms <= 0) {
  alert("ERRORE: Il valore deve essere un numero maggiore di 0");
} else {
  
}
