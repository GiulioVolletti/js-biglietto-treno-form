// alert("Hello , World !")


// bottone
var btnGenera = document.getElementById('genera');

btnGenera.addEventListener("click", function () {

  var nomeUtente = document.getElementById('nome').value;
  console.log(nomeUtente);
  var distanzaKm = document.getElementById('km').value;
  console.log(distanzaKm);
  var età = document.getElementById('fascia').value;
  console.log(età);
  // Nome passeggero
  document.getElementById('passeggero_nome').innerHTML= nomeUtente;

  // Prezzo calcolato
  var prezzoBiglietto = distanzaKm * 0.21
  console.log(prezzoBiglietto);

  if (età == "minorenne" ) {
    // sconto del 20% per i minorenni e del
    var sconto = (prezzoBiglietto - (prezzoBiglietto * 0.2)).toFixed(2)
    document.getElementById("costo_totale_biglietto").innerHTML= sconto;
    document.getElementById("offerta").innerHTML= "Biglietto Junior";

  } else if (età == "over_65") {
    // 40% per gli over 65.
    var sconto = (prezzoBiglietto - (prezzoBiglietto * 0.4)).toFixed(2)
    document.getElementById("costo_totale_biglietto").innerHTML= sconto;
    document.getElementById("offerta").innerHTML= "Biglietto Silver";


  } else {
    document.getElementById("costo_totale_biglietto").innerHTML= prezzoBiglietto ;
    document.getElementById("offerta").innerHTML= "Biglietto Standars";

  }

  // Codice treno (numero casuale tra 90000 e 100000 escluso)
  var codiceTreno = Math.floor(Math.random() * 10000) + 90000;
  document.getElementById('codice_cp').innerHTML= codiceTreno;
  // Numero carrozza (numero casuale tra 1 e 9)
  var codiceCarrozza = Math.floor(Math.random() * 9) + 1;
  document.getElementById('carrozza').innerHTML= codiceCarrozza;
  // Categoria selezionata dall'utente (offerta)
  var removeHide = document.getElementById('hid');
  removeHide.classList.remove("hidden")
  
} );
