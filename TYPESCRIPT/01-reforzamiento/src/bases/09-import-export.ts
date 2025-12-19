import { heroes, type Hero, type Owner } from "../data/herroes.data";

const getHeroById = (id: number) => {
    
}


/**
 * getHeroesByOwner ==> Hero[]
 * Filtrar heroes por su propietario
 * @param owner 
 * @returns Array de Hero según el filtro
 */
function getHeroesByOwner(owner: Owner): Hero[] {
    const resultado: Hero[] = heroes.filter((hero) => {
        return hero.owner.match(owner);
    });

    return resultado;
}


console.log(getHeroesByOwner('DC'));
