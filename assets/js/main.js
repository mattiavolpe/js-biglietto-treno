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
- getElementById ed innerHTML
*/

// Chiedo all'utente quanti km deve percorrere e controllo che sia un numero e che sia maggiore di 0
const kms = Number(prompt("Quanti km devi percorrere? (Separare i decimali con il punto)"));

console.log(`Km: ${kms}`);

if (isNaN(kms) || kms <= 0) {
  alert("ERRORE: Il valore deve essere un numero maggiore di 0");
} else {
  // Chiedo all'utente l'età e controllo che sia un numero e che sia maggiore o uguale a 0
  // N.B. ACCETTIAMO ANCHE 0 NEL CASO DI NEONATO CHE, COMUNQUE, DA CONSEGNA NON VIAGGIA GRATIS ED USIAMO MATH.FLOOR() NEL CASO L'UTENTE INSERISCA PER QUALCHE MOTIVO UN NUMERO DECIMALE
  const userAge = Math.floor(Number(prompt("Quanti anni hai?")));

  console.log(`Age: ${userAge}`);

  if (isNaN(userAge) || userAge < 0) {
    alert("ERRORE: Il valore deve essere un numero maggiore o uguale a 0");
  } else {
    // Calcolo il costo lordo del viaggio
    const fullPrice = kms * 0.21;

    console.log(`Full price: ${fullPrice}`);

    // Calcolo lo sconto a seconda dell'età
    // ASSEGNO A DISCOUNTEDPRICE IL VALORE DI FULLPRICE COSÌ DA POTER EVITARE IL SECONDO ELSE PER FARE L'ASSEGNAZIONE
    let discountedPrice = fullPrice;
    if (userAge < 18) {
      discountedPrice = fullPrice * 0.8;

      console.log(`Discounted price: ${discountedPrice}`);

    } else if (userAge >= 65) {
      discountedPrice = fullPrice * 0.6;

      console.log(`Discounted price: ${discountedPrice}`);

    }

    // Formatto il prezzo scontato per avere due cifre decimali
    const priceToShow = (Math.round(discountedPrice * 100) / 100).toFixed(2);

    console.log(`Final price: ${priceToShow}`);

    // Mostro all'utente il prezzo finale in pagina
    const finalPriceContainer = document.getElementById("finalPriceContainer");
    finalPriceContainer.innerHTML = `<h1 style="text-align: center">Il costo del tuo biglietto sarà di</h1>
    <h1 style="text-align: center; color: green; text-decoration: underline">${priceToShow}€</h1>`;

  }
}
