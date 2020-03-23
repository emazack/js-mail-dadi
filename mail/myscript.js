// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// 1 esiste una lista di email per accedere ed una lista di email sbagliate
var whitelist;
whitelist = ["gino@mail.com","anna@email.it","casa@mail.it","furio@mail.com"];

console.log("Questa è la variabile whitelist: " + whitelist);
console.log("Questa è la lunghezza della whitelist: " + whitelist.length);

// 2 chiedere all'utente di inserire la propria email
var mailcheck;
mailcheck = prompt("Inserisci l'email di acceso");

console.log("Questa è la email inserita dall'utente: " + mailcheck);

// 3 fare un check di corrispondenza. La mail inserita corrisponde ad una email nella whitelist?
var i;
for (i = 0; i < whitelist.length; i++) {
  if (mailcheck == whitelist[i]) {
    document.getElementById("mail").innerHTML = "Bentornato";
  } else if {

  }

}

// 4 alla fine del check fare uscire un messaggio di accesso oppure di rifiuto

// document.getElementById("mail").innerHTML = "La tua email non è corretta";
