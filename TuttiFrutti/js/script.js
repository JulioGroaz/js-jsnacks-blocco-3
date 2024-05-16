const elementArray = Number.parseInt(prompt("quanti elementi vuoi che siano presenti nell'Array?"),10);

const array = [];

for(let i =0; i<elementArray; i++){
    array[i]= Math.floor(Math.random() *100)+1;
    console.log(array);
}

