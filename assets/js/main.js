/* 
Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
*/

//lista email
const emailVerified = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com'];

//chiedi all'utente la sua email
const userEmail = prompt("inserisci la tua email");

for (let i = 0; i < emailVerified.length; i++) {
    const email = emailVerified[i];
    
    if (userEmail == email) {
        console.log("mail corretta");
    } else {
        console.log("mail errata");  
    }
}
