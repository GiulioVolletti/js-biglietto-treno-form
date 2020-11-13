// alert("Hello , World !")

// Nome passeggero


// bottone
var btnGenera = document.getElementById('genera');

btnGenera.addEventListener("click", function () {

  var nomeUtente = document.getElementById('nome').value;
  console.log(nomeUtente);
  var distanzaKm = document.getElementById('km').value;
  console.log(distanzaKm);
  var età = document.getElementById('fascia').value;
  console.log(età);
} );
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)
