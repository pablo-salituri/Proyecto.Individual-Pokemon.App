const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon/';
const  {Pokemon, Type}  = require('../../db.js')

const getPokemonByName = async (name) => {
    //console.log(name)
    try {
        const respuestaDataBase = await Pokemon.findOne({
            where: { Nombre: name },
            include: {
                model: Type,
                attributes: ['Nombre'],
                through: {attributes:[]}
            }
        })

        if (respuestaDataBase) {
            const respuesta = respuestaDataBase.toJSON();
            const tipos = respuestaDataBase.Types.map(elem => elem.Nombre);
            respuesta.Tipo = tipos;
            //console.log(respuesta);
            delete respuesta.Types;
            return respuesta
        }
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
                Velocidad: data.stats[5].base_stat,
                Altura: data.height,
                Peso: data.weight,
                Tipo: data.types.map(tipo => tipo.type.name)
            }
            return pokemon
        }
    } catch (error) {
        return {error: 'No se encontró el pokemon con el nombre solicitado'}
    }
}

module.exports = {getPokemonByName}