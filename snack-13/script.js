// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

// scomposizione del problema: funzione --> numero dato
// trasformo il numero in una stringa così da poter separare le singole cifre.
// creazione di un ciclo for che iniziando dall'ultima cifra stampi in ordine inverso index -- la somma tra le cifre prima.




function numeroInvertito (numeroInserito){
    let string = numberInserito.toString();
    let risultato = '';

    for( let i = string.length - 1;i>= 0; i--){
        risultato = risultato + string[i];
    }

    return risultato;
}   

