const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon/';
const  {Pokemon}  = require('../../db.js')

const getPokemonByName = async (name) => {
    //console.log(name)
    try {
        const respuestaDataBase = await Pokemon.findOne({
            where: {
                Nombre: name
            }
        })

        if (respuestaDataBase)
            return respuestaDataBase
        else {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
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
        return {error: 'No se encontró el pokemon con el nombre solicitado'}
    }
}

module.exports = {getPokemonByName}