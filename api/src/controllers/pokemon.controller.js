const axios = require('axios');
const pokemon = require('../models/Pokemon.js');
const URL = 'https://pokeapi.co/api/v2/pokemon/'
const cantDePokemons = 30;
let arregloBDD = [];


const getPokemons = async (req, res) => {  
    try {
        for (let i = 1; i <= cantDePokemons; i++) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = response.data;
            arregloBDD.push({
                ID: response.data.id,
                Nombre: response.data.name,
                Imagen: response.data.sprites.front_default,
                Vida: response.data.stats[0].base_stat,
                Ataque: response.data.stats[1].base_stat,
                Defensa: response.data.stats[2].base_stat,
                Velocidad: response.data.stats[5].base_stat,
                Altura: response.data.height,
                Peso: response.data.weight
            })
            //console.log(arregloBDD);
        }
        return res.status(200).json(arregloBDD)
    } catch (error) {
        return res.status(503).json({message: error.message})
    }
}






module.exports = {
    getPokemons
}