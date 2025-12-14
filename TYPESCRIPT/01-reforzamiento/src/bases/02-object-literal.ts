

const ironman = {
   name: 'Santiago',
   apellido: 'Miguez Cea',
   edad: 31,
   direccion: {
    calle: 'Av. 123',
    numero: 123,
   }
}
/**
 * En una constante no se puede modificar el valor de la variable, 
 * pero en un objeto si se puede modificar el valor de las propiedades.
 */
ironman.name = 'Tony';
ironman.apellido = 'Stark';
ironman.edad = 40;
console.log('cambio de propiedades desde ironman', ironman);

/**
 *  spriderman coge la referencia donde apunta ironman, 
 *  por lo tanto si modifico spiderman, modifico ironman.
 */
let spiderman = ironman;
spiderman.name = 'Peter';
spiderman.apellido = 'Parker';
spiderman.edad = 20;

console.log('cambio de propiedades desde spiderman', ironman);

//Reseteamos el objeto ironman
ironman.name = 'Tony';
ironman.apellido = 'Stark';
ironman.edad = 40;

/**
 * Para evitar que spiderman modifique ironman, se debe crear un nuevo objeto.
 */
let spiderman2 = { ...ironman };
spiderman2.name = 'Peter';
spiderman2.apellido = 'Parker';
spiderman2.edad = 20;
/**
 * Pero direccion es un objeto, por lo tanto se modifica el objeto original.
 */
spiderman2.direccion.calle = 'Av. 456';
console.log('cambio de propiedades desde spiderman con operador spread', ironman);

/**
 * Para evitar que spiderman modifique ironman, 
 * se debe clonar con structurredClone().
 */
let spiderman3 = structuredClone(ironman);
spiderman3.name = 'Peter';
spiderman3.apellido = 'Parker';
spiderman3.edad = 20;
spiderman3.direccion.calle = 'Av. 777';
spiderman3.direccion.numero = 777;
console.log('cambio de propiedades desde spiderman con structuredClone', ironman);
