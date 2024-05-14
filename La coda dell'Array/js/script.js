
const frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

frutta.push('pesca');

let ricercaCocomero = false;

for( i = 0; i < frutta.length; i ++){
    if(frutta[i] === 'cocomero'){
        ricercaCocomero = true;

    }
}

if(ricercaCocomero = true){
    console.log("cocomero trovato, il cocktail è in arrivo!");
} else{
    console.log("Mi dispiace, abbiamo finito il cocomero, le va un altro cocktail?");
}