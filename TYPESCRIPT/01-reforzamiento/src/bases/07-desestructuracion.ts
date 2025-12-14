// Desestructuración de Arrays
const characterNames: Array<string> = ['Goku', 'Vegeta', 'Goten'];

// Para conseguir al primero y segundo
const [ p1 , p2] = characterNames;

console.log(characterNames);

console.log(p1);
console.log(p2);

/**
 * Para obtener otro en concreto.
 * Se usa espación, asi no se guarda en variable que ocupen espacio en memoria.
 * 
 * Esta forma no suele ser muy usada
 */
let [ , , p3 ] = characterNames;
console.log(p3);

// Ejemplo de desestructurar varios objetos y callbacks
const userState = (name: string): { name: string; setName: (name2: string) => void } => {
   // Retorna un objeto literal
    return { 
        name,
        setName: function (name2: string) { console.log(name2); }
    }
}
// se captura en forma de objeto literal, con {}
const { name, setName} = userState('Trunks');

console.log(name);
setName('Pikolo')


const userState2 = (name: string): [string, (name2: string) => void] => {
    return [ 
        name,
        (name2: string) => { console.log(name2); }
    ]
};

