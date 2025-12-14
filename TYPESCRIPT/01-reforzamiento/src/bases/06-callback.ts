

const myNumbers: Array<number> = [1, 2, 4, 5];

// el foreach espera un callback
myNumbers.forEach(function (value) {
    console.log(value);
});

console.log('--------ARROW FUNCTION----------');

myNumbers.forEach( (value) => {
    console.log(value);
});
// Funcion de primer orden-> imprimirá el: Valor - Indice - Array
myNumbers.forEach( console.log);
