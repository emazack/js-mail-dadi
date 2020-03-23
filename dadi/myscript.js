// Gioco dei dadi, chi fa di più vince.

// creiamo il dado
var dado;
dado = [1,2,3,4,5,6];
var max = 6

// Un utente tira il primo dado ed avrà un risultato
var utente1 = prompt(" UTENTE 1 Scrivi 'lancia' per lanciare il dado");
if (utente1 == "lancia") {
  var lancio =  Math.floor(Math.random() * max)
  var PrimoLancio = dado[lancio]
  document.getElementById('utente1').innerHTML = PrimoLancio;
  console.log("valore del primo lancio: " + PrimoLancio);
}
// Un altro utente tira un altro dado ed avrà un risulato
var utente2 = prompt(" UTENTE 2 Scrivi 'lancia' per lanciare il dado");
if (utente2 == "lancia") {
  var lancio =  Math.floor(Math.random() * max)
  var SecondoLancio = dado[lancio]
  document.getElementById('utente2').innerHTML = SecondoLancio;
  console.log("valore del secondo lancio: " + SecondoLancio);
}
// i due risultati vengono cofrontati e si decreta il vincitore
if (PrimoLancio > SecondoLancio) {
  document.getElementById('risultato1').innerHTML = "Vittoria utente 1"
} else if (SecondoLancio > PrimoLancio) {
  document.getElementById('risultato2').innerHTML = "Vittoria utente 2"
} else {
  document.getElementById('risultato2').innerHTML = "PARITA'"
  document.getElementById('risultato1').innerHTML = "PARITA'"
}
