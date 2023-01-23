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
let ticketPrice = (0.21 * km).toFixed(2);

let FinalPrice20 = (ticketPrice - (20 / 100) * (ticketPrice)).toFixed(2);

let FinalPrice40 = (ticketPrice - (40 / 100) * (ticketPrice)).toFixed(2);

// SE LA PERSONA E' MINORENNE
if (age < 18) {
    // APPLICA SCONTO 20%
    alert("Il nuovo prezzo del biglietto scontato al 20% è di: " + FinalPrice20 + "€"); 
    // OUTPUT PREZZO FINALE CON MASSIMO DUE DECIMALI
    document.getElementById(`prezzo_finale`).innerHTML = "Il prezzo finale del biglietto è di " + FinalPrice20 + "€";
}

else if (age > 65) {
    // APPLICA SCONTO 40%
    alert("Il nuovo prezzo del biglietto scontato al 40% è di: " + FinalPrice40 + "€");
    // OUTPUT PREZZO FINALE CON MASSIMO DUE DECIMALI
    document.getElementById(`prezzo_finale`).innerHTML = "Il prezzo finale del biglietto è di " + FinalPrice40 + "€";
}
// ALTRIMENTI
else {
    // PREZZO NORMALE
    alert("Il prezzo del biglietto è di: " + ticketPrice + "€");
    // OUTPUT PREZZO FINALE CON MASSIMO DUE DECIMALI
    document.getElementById(`prezzo_finale`).innerHTML = "Il prezzo finale del biglietto è di " + ticketPrice + "€";
}


