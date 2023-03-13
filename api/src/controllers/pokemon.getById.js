const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon/';


const getPokemonById = (idPokemon) => {
    //try {
        const response = axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
        const data = response.data;
        console.log(data);
    /* } catch (error) {
        
    } */
}


module.exports = {
    getPokemonById
}
