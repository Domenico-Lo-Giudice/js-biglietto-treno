// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// - Va applicato uno sconto del 20 % per i minorenni.
// - Va applicato uno sconto del 40 % per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// CHIEDI NUMERO DI CHILOMETRI
let km = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log(km);

// CHIEDI ETA' PASSEGGERO
let age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

// DEFINISCI PREZZO BIGLIETTO
let ticketPrice = (0.21 * km);
console.log(ticketPrice);

// SE LA PERSONA E' MINORENNE
if (age < 18) {
    // APPLICA SCONTO 20%
    alert(ticketPrice - (20 / 100) * (ticketPrice)); 
}

else if (age > 65) {
    // APPLICA SCONTO 40%
    alert(ticketPrice - (40 / 100) * (ticketPrice));
}
// ALTRIMENTI
else {
    // PREZZO NORMALE
    alert(ticketPrice);
}

// Output del prezzo finale con massimo due decimali
document.getElementById(`prezzo_finale`).innerHTML = (ticketPrice).toFixed(2);
