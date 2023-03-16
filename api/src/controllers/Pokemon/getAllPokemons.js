const {getPokemonsFromApi} = require('./getFromApi.js');
const {getPokemonsFromDataBase} = require('./getFromDatabase.js');


const getAllPokemons = async() => {
    try {
        const fromApi = await getPokemonsFromApi();
        const fromDB = await getPokemonsFromDataBase();
    
        const allPokemons = fromDB.length ? [...fromApi, ...fromDB] : fromApi
        return allPokemons
    } catch (error) {
        return {error: 'Error al importar todos los Pokemons'}       // Dai Repaso II 2.00.00
    }
}

module.exports = {getAllPokemons}