const firstNamen: string = 'Juan';
let lastName: string= 'Perez';
const fullName: string = `${firstNamen} ${lastName}`;

//console.log(fullName);

let texto: string = `
  O'Hara, como estas ${fullName}?
  Necesito escribit \`Estas comillas\`
  Para meterlas en \`${fullName}\`
`;

console.log(texto);
