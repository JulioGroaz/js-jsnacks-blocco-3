
const frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

frutta.push('pesca');

let ricercaCocomero = false;

for( i = 0; i < frutta.length; i ++){
    if(frutta[i] === 'cocomero'){
        ricercaCocomero = true;

    }
}

if(ricercaCocomero = true){
    console.log("Trovato! Devo solo preparare il cocktail.");
} else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}