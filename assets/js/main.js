/* 
Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
*/

 //lista email
const emailVerified = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com'];

//chiedi all'utente la sua email
const userEmail = prompt("inserisci la tua email");
let vero_falso = false;

for (let i = 0; i < emailVerified.length; i++) {
    const email = emailVerified[i];

    if (userEmail == email) {
        vero_falso = true;
    } 
}

if (vero_falso == true) {
    console.log("mail corretta");
} else {
    console.log("mail errata");    
}



/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia 
per il computer. Stabilire il vincitore, in base a chi 
fa il punteggio più alto.
*/
const giocatore = Math.floor(Math.random() * 6) +1;
document.getElementById('giocatore').innerHTML += giocatore

const computer = Math.floor(Math.random() * 6) +1;
document.getElementById('computer').innerHTML += computer


if (giocatore > computer) {
    document.getElementById("dadi").innerHTML = "hai vinto"
} else  if (giocatore == computer){
    document.getElementById("dadi").innerHTML = "pari"
} else {
    document.getElementById("dadi").innerHTML = "hai perso"
   
}



