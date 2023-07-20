// BOTTONE GENERA
const nameInput = document.getElementById("nome");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("fascia-eta");

const passengerNameElem = document.getElementById("nome-passeggero");
const offerElem = document.getElementById("offerta-applicata");
const codeElem = document.getElementById("codice-cp");
const cabinElem = document.getElementById("carrozza");
const priceElem = document.getElementById("costo");
const errorElem = document.getElementById("error-message");

const generateBtn = document.getElementById("bottone");
generateBtn.addEventListener("click", function() {
    errorElem.classList.add("hidden");

    //Prelevo i valori inseriti dal utente
    const name = nameInput.value;
    const km = parseInt(kmInput.value)
    const age = ageInput.value;

    // Il nome deve essere non vuoto e almeno di 3 caratteri
    const nameIsValid =name !== "" && name.length > 3;
    // km non e Nan e deve essere maggiore di 10
    const kmIsValid = !isNaN(km) && km >10;
    // Age deve essere selezionato
    const ageIsValid = age !=="" ;

    // Se tutti i valori sono validi 
    if (nameIsValid && kmIsValid && ageIsValid) {
        // Faccio il calcolo
        // Calcolo offerta e costo del biglietto
        const basePrice = km * 0.21 ;
        let finalPrice = basePrice ;
        let offer ="nessuna offerta" ;
         
        if (age ==="minorenne"){
            finalPrice = basePrice - (basePrice * 20) / 100;
            offer = "Under 18"
        }else if (age === "over65") {
            finalPrice =basePrice - (basePrice * 40) /100;
        }

        // Genero il  numero della carozza tra 1 e 8
        const cabin = Math.floor(Math.random()*8)+1;
        // Genero codice CP tra 1000 e 9999
        const code = Math.floor(Math.random()*(9999 - 1000 +1)) + 1000;
        console.log(code);

        // Stampa dei risultati nel biglietto
        const biglietto = document.getElementById("biglietto");
        biglietto.classList.remove("hidden");

        passengerNameElem.innerHTML = name ;
        offerElem.innerHTML = offer;
        cabinElem.innerHTML = code;
        priceElem.innerHTML =  `€ ${finalPrice.toFixed(2)}`;

        // Ripulire i campi
        nameInput.value = "";
        kmInput.value = "";
        ageInput.value = "";

    } else {
        // Stampo il messaggio di error
        errorElem.classList.remove("hidden");
    }
    
});

// Implementazione della funzionalita annulla
const clearBtn = document.getElementById("annulla");
clearBtn.addEventListener("click", function(){
    // Ripulire e nascondere il biglietto 
    passengerNameElem.innerHTML = "";
    offerElem.innerHTML = "";
    cabinElem.innerHTML = "";
    codeElem.innerHTML = "";
    priceElem.innerHTML ="";
    document.getElementById("biglietto").classList.add("hidden");

    // Ripulire gli input
    nameInput.value = "";
    kmInput.value = "";
    ageInput.value ="";
})

