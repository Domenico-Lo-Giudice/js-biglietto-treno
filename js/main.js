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

let FinalPrice20 = (ticketPrice - (20 / 100) * (ticketPrice));

let FinalPrice40 = (ticketPrice - (40 / 100) * (ticketPrice));

// DECIMALE PREZZO FINALE
let ticketPriceFixed = ticketPrice.toFixed(2);

let FinalPrice20Fixed = FinalPrice20.toFixed(2);

let FinalPrice40Fixed = FinalPrice40.toFixed(2);


// SE LA PERSONA E' MINORENNE
if (age < 18) {
    // APPLICA SCONTO 20%
    alert("Il nuovo prezzo del biglietto scontato al 20% è di: " + FinalPrice20Fixed + "€"); 
    // OUTPUT PREZZO FINALE CON MASSIMO DUE DECIMALI
    document.getElementById(`prezzo_finale`).innerHTML = "Il prezzo finale del biglietto è di " + FinalPrice20Fixed + "€";
}

else if (age > 65) {
    // APPLICA SCONTO 40%
    alert("Il nuovo prezzo del biglietto scontato al 40% è di: " + FinalPrice40Fixed + "€");
    // OUTPUT PREZZO FINALE CON MASSIMO DUE DECIMALI
    document.getElementById(`prezzo_finale`).innerHTML = "Il prezzo finale del biglietto è di " + FinalPrice40Fixed + "€";
}
// ALTRIMENTI
else {
    // PREZZO NORMALE
    alert("Il prezzo del biglietto è di: " + ticketPriceFixed + "€");
    // OUTPUT PREZZO FINALE CON MASSIMO DUE DECIMALI
    document.getElementById(`prezzo_finale`).innerHTML = "Il prezzo finale del biglietto è di " + ticketPriceFixed + "€";
}


