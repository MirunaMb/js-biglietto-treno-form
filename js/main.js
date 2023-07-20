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
    }
    
})

