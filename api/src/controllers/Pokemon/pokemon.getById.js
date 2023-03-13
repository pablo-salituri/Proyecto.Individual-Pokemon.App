const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon/';


const getPokemonById = async (idPokemon) => {
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
            Velocidad: data.stats[5].base_stat,
            Altura: data.height,
            Peso: data.weight
        }
        return pokemon
    } catch (error) {
        return {error: 'No se encontró el pokemon solicitado'}
    }
}


module.exports = {
    getPokemonById
}
