const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon/';
const  {Pokemon}  = require('../../db.js')


const getPokemonById = async (idPokemon) => {
    try {
        const respuestaDataBase = await Pokemon.findOne({
            where: {
                ID: idPokemon
            }
        })

        if (respuestaDataBase)
            return respuestaDataBase
        else {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const data = response.data;
            const pokemon = {
                ID: data.id,
                Nombre: data.name,
                Imagen: data.sprites.front_default,
                Vida: data.stats[0].base_stat,
                Ataque: data.stats[1].base_stat,
                Defensa: data.stats[2].base_stat,
                Velocidad: data.stats[5].base_stat,         //ToDo: Tiene que incluir los datos del tipo de pokemon al que está asociado.
                Altura: data.height,
                Peso: data.weight
            }
            return pokemon
        }
    } catch (error) {
        return {error: 'No se encontró el pokemon solicitado'}
    }
}

/* const pokemonInDataBase = async (idPokemon) => {
    try {
        const respuesta = await Pokemon.findOne({
            where: {
                ID: idPokemon
            }
        })

        if (respuesta)
            return 
    } catch (error) {
        
    }
} */


module.exports = {getPokemonById}





/* const getPokemonById = async (idPokemon) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        const data = response.data;
        const pokemon = {
            ID: data.id,
            Nombre: data.name,
            Imagen: data.sprites.front_default,
            Vida: data.stats[0].base_stat,
            Ataque: data.stats[1].base_stat,
            Defensa: data.stats[2].base_stat,
            Velocidad: data.stats[5].base_stat,         ToDo: Tiene que incluir los datos del tipo de pokemon al que está asociado.
            Altura: data.height,
            Peso: data.weight
        }
        return pokemon
    } catch (error) {
        return {error: 'No se encontró el pokemon solicitado'}
    }
} */