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
