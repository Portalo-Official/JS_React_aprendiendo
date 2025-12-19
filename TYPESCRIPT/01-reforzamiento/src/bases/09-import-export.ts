import { heroes, type Hero, type Owner } from "../data/herroes.data";

const getHeroById = (id: number) => {
    
}

/**
 * getHeroesByOwner ==> Hero[]
 * Filtrar heroes por su propietario
 * 
 */

function getHeroesByOwner(owner: Owner): Hero[] {
    const resultado: Hero[] = heroes.filter((hero) => {
        return hero.owner === owner;
    });

    return resultado;
}
