/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve */
/* BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */


var principiante = document.getElementById('Principiante');

var esperto = document.getElementById('Esperto');

var campione = document.getElementById('Campione');

principiante.addEventListener('click', function(){
  botNumbersGeneretor()
  playerInteractions();


})

esperto.addEventListener('click', function(){
  botNumbersGeneretor()
  playerInteractionsFirstlevel();


})

campione.addEventListener('click', function(){
  botNumbersGeneretor()
  playerInteractionsSecondLevel();


})


var botNumbers = [];  //array composto dai numeri del gioco che determinano la sconfitta
var playerNumbers = []; //array composto dai numeri inseriti dal giocatore con lo scopo di non incontrare i numeri  del computer

function botNumbersGeneretor(){

  for (var i = 0; i < 16; i++) {

    var botRndnumbers = Math.round(Math.random() * 100 )+1;

    if ( botNumbers.includes(botRndnumbers) ) {

      i--;
      
    } else {

      botNumbers.push(botRndnumbers);

    }
  }
}

//level 0
function playerInteractions() {

    var score = 0; //punteggio del giocatore


    for (var i = 0; i < (100 - 16); i++) {

      var playerRndNumbers = parseInt(prompt("Inserisci un numero da 1 a 100"));

      if (playerNumbers.includes(playerRndNumbers)) {

        i--;

        alert("Non puoi inserire due volte lo stesso numero! Attenzione!");

      }else if(playerNumbers>100){
          alert("Ho detto da 1 a 100!!!!")
      }
      
      else {

        playerNumbers.push(playerRndNumbers);

        if (botNumbers.includes(playerRndNumbers)) {

          alert("Hai perso! Il tuo punteggio totale: " + score + ' alla difficoltà Principiante');

          console.log("Hai perso! Il tuo punteggio totale: " + score);

          var loserNumber = playerNumbers.pop();

          console.log(playerNumbers);

          console.log("Numero sbagliato: " + loserNumber);

            return false;

        } else {

          score += +10;

        }

      }

    }
 
  }




//level 1

function playerInteractionsFirstlevel() {

  var score = 0; //punteggio del giocatore


  for (var i = 0; i < (80 - 16); i++) {

    var playerRndNumbers = parseInt(prompt("Inserisci un numero da 1 a 100"));

    if (playerNumbers.includes(playerRndNumbers)) {

      i--;

      alert("Non puoi inserire due volte lo stesso numero! Attenzione!");

    }else if(playerNumbers>100){
        alert("Ho detto da 1 a 100!!!!")
    }
    
    else {

      playerNumbers.push(playerRndNumbers);

      if (botNumbers.includes(playerRndNumbers)) {

        alert("Hai perso! Il tuo punteggio totale: " + score + ' alla difficoltà Esperto');

        console.log("Hai perso! Il tuo punteggio totale: " + score);

        var loserNumber = playerNumbers.pop();

        console.log(playerNumbers);

        console.log("Numero sbagliato: " + loserNumber);

          return false;

      } else {

        score += +20;

      }

    }

  }

}


//level 2
function playerInteractionsSecondLevel() {

  var score = 0; //punteggio del giocatore


  for (var i = 0; i < (50 - 16); i++) {

    var playerRndNumbers = parseInt(prompt("Inserisci un numero da 1 a 100"));

    if (playerNumbers.includes(playerRndNumbers)) {

      i--;

      alert("Non puoi inserire due volte lo stesso numero! Attenzione!");

    }else if(playerNumbers>100){
        alert("Ho detto da 1 a 100!!!!")
    }
    
    else {

      playerNumbers.push(playerRndNumbers);

      if (botNumbers.includes(playerRndNumbers)) {

        alert("Hai perso! Il tuo punteggio totale: " + score + ' alla difficoltà Campione');

        console.log("Hai perso! Il tuo punteggio totale: " + score);

        var loserNumber = playerNumbers.pop();

        console.log(playerNumbers);

        console.log("Numero sbagliato: " + loserNumber);

          return false;

      } else {

        score += +30;

      }

    }

  }

}