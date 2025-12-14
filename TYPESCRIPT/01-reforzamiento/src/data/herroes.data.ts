interface Hero {
    id: number;
    name: string;
    owner: Owner;
    dead?:Dead; 
}

// type es una regla de tipos permitidos
type Owner = 'DC' | 'Marvel' ;

/**
 * Union type - alternativa moderna a enum cuando erasableSyntaxOnly está habilitado
 * Los enums generan código JS, pero los union types se borran completamente
 */
type Dead = 'Dead' | 'Alive';

// Si necesitas constantes para usar en el código, puedes crear un objeto:
const DeadStatus = {
    Dead: 'Dead' as const,
    Alive: 'Alive' as const,
} as const; 

const heroes: Hero[] = [
    {
      id: 1,
      name: 'Batman',
      owner: 'DC',
      dead: DeadStatus.Alive,
    },
    {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel',
    },
    {
      id: 3,
      name: 'Superman',
      owner: 'DC',
      dead: DeadStatus.Dead,
    },
    {
      id: 4,
      name: 'Flash',
      owner: 'DC',
    },
    {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel',
    },
  ];

export { heroes, DeadStatus };
export type { Hero, Owner, Dead };