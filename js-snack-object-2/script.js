
// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const personeArray = [
    {
        nome: 'Gianni' ,
        cognome: 'Giannari',
        età: 55,
    },
    {
        nome: 'Beppa',
        cognome: 'Beppina',
        età: 10,
    },
    {
        nome: 'Zeus',
        cognome: '?',
        età: 293894382928120,
    },
    {
        nome: 'Cristoph',
        cognome: 'America',
        età: 70,
    },
    {
        nome: 'Franz',
        cognome: 'Znarf',
        età: 30,
    },
    {
        nome: 'Gino',
        cognome: 'Onig',
        età: 2,
    },
    {
        nome: 'Dante',
        cognome: 'Alighieroz',
        età: 18,
    },
    {
        nome: 'Lorem',
        cognome: 'Plutino',
        età: 34,
    },
    {
        nome: 'Simon',
        cognome: 'Saponetta',
        età: 5,
    },
    {
        nome: 'Lolla',
        cognome: 'Lulli',
        età: 3,
    },
];

const personeMaggiorenne = personeArray.map((persone) => {
    if(persone.età >= 18){
        return `${persone.nome} ${persone.cognome} può guidare`;
    } else {
        return `${persone.nome} ${persone.cognome} non può guidare`;
    }
});

console.log(personeMaggiorenne);



