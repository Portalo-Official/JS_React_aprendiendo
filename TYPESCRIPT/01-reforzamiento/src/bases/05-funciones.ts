

function greet(name: string): string{
    return`hola ${name}`; 
}

// Con arrow function
const greet2 = (name: string):string => {
    return `hola ${name}`;
}

let mensaje = greet('Goku');
let mensaje2 = greet2('Vegeta');

console.log(mensaje);
console.log(mensaje2);

interface UserInfo {
    uid: string,
    username: string
}

const userInfo = (uid: string, username: string): UserInfo =>{

    let user: UserInfo = {uid, username};

    return user;
}
//Si el retorno es directo
const userInfo2 = (uid: string, username: string): UserInfo =>({uid, username});

console.log(userInfo('AAB-123', 'Vegeta23'));
console.log(userInfo2('AAB-123', 'Vegeta77'));
