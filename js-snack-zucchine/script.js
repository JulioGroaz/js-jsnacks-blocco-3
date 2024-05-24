// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        varietà: 'tipo1',
        peso: 5,
        lunghezza: 15,
    },

    {
        varietà: 'tipo2',
        peso: 3,
        lunghezza: 8,
    },
    {
        varietà: 'tipo3',
        peso: 7,
        lunghezza: 4,
    },
    {
        varietà: 'tipo4',
        peso: 9,
        lunghezza: 45,
    },
    {
        varietà:'tipo5' ,
        peso: 10,
        lunghezza: 17,
    },
    {
        varietà: 'tipo6',
        peso: 22,
        lunghezza: 20,
    },
    {
        varietà: 'tipo7',
        peso: 54,
        lunghezza: 50,
    },
    {
        varietà: 'tipo8',
        peso: 1,
        lunghezza: 1,
    },
    {
        varietà: 'tipo9',
        peso: 4,
        lunghezza: 6,
    },
    {
        varietà: 'tipo10',
        peso: 6,
        lunghezza: 9,
    },


];

//peso totale
let pesoTotale = 0;
for (let i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i].peso;
};
console.log(pesoTotale);

//creazione dei due array in base alla misura: utilizzo un ciclo for per controllare ogni zucchina dell'array zucchine e le suddivido con un if: se minori di 8 allora arrayCorte, se maggiori di 8 allora array lunghe.

const zucchinePiuCheOneste = [];
const zucchineEsagerate = [];
for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 8) {
        zucchinePiuCheOneste.push(zucchine[i]);
    } else {
        zucchineEsagerate.push(zucchine[i]);
    }
};
console.log(zucchinePiuCheOneste);
console.log(zucchineEsagerate);

let pesoGiusto = 0;
for (let i = 0; i < zucchinePiuCheOneste.length; i++) {
    pesoGiusto += zucchinePiuCheOneste[i].peso;
};
console.log(pesoGiusto);

let pesoEsagerato = 0;
for (let i = 0; i < zucchineEsagerate.length; i++) {
    pesoEsagerato += zucchineEsagerate[i].peso;
};
console.log(pesoEsagerato);



