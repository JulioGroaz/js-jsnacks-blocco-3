// Snack 12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


function lunghezza (parola1, parola2){
    if(parola1.lenght === parola2.lenght){
        console.log(parola1, parola2);

    } else if (parola1.lenght> parola2.lenght){
        console.log(parola1);

    }else{
        console.log(parola2);
    }
}
const parola1 = prompt('inserisci una parola');
const parola2= prompt('inserisci una parola');