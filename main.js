//  // campo minato" (aka "prato fiorito")!
// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50


// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine". (funzione con ciclo for ) (creo un array?)

var cpuMines = [];


function generateRandom(min, max) {
    var random = Math.floor(Math.random() * (+max - +min) + +min) + 1;
    return random;
}

function createMines() {
    var random = generateRandom(1, 100);
    cpuMines.push(random);
}

for (var i = 0; i < 16; i++) {
    createMines();
}

console.log(cpuMines);

// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// (ciclo do while?)
do {
    var playerNumber = parseInt(prompt('inserisci un numero tra 1 e 100'));
    console.log(playerNumber);
    if (isNaN(playerNumber)) {
        alert('non hai inserito un numero');
    } else if (playerNumber < 1) {
        alert('hai inserito un numero fuori range (< 1)');
    } else if (playerNumber > 100) {
        alert('hai inserito un numero fuori range (> 100)');
    }
} while (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100);
