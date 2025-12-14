
interface Person {
   name: string;
   apellido: string;
   edad: number;
   direccion?: Adrress; // Interrogacion '?' significa que es opcional
}

interface Adrress {
   calle: string;
   numero: number;
}

const person: Person = {
   name: 'Santiago',
   apellido: 'Miguez Cea',
   edad: 31,
   // direccion: {
   //  calle: 'Av. 123',
   //  numero: 123,
   // }
}



console.log('person', person);
