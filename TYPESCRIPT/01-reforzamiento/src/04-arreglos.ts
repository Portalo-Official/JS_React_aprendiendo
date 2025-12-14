

let arreglo1: Array<number> = [1, 2, 1];

let arreglo2 = structuredClone(arreglo1);

arreglo1.push(5);

console.log(arreglo1);
console.log(arreglo2);
