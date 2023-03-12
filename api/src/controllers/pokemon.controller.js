const axios = require('axios');
const pokemon = require('../models/Pokemon.js');
const URL = 'https://pokeapi.co/api/v2/pokemon/'
const cantDePokemons = 1;
let arregloBDD = [];


const getPokemons = async (req, res) => {  
    //console.log('get 151');
    //return res.send('get 151')
    try {
        //for (let i = 1; i <= cantDePokemons; i++) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${97}`);
            const data = response.data;
            //console.log(data);
            arregloBDD.push({
                ID: response.data.order,
                Nombre: response.data.name,
                Imagen: response.data.sprites.front_default,
                Vida: response.data.stats[0].base_stat,
                Ataque: response.data.stats[1].base_stat,
                Defensa: response.data.stats[2].base_stat,
                Velocidad: response.data.stats[5].base_stat,
                Altura: response.data.height,
                Peso: response.data.weight
            })
            console.log(arregloBDD);
        //}
        return res.status(202).json(arregloBDD)
    } catch (error) {
        return res.send('error en traer los 151')
    }


    /* try {
        let arregloBDD = [];
        for (let i = 1; i <= cantDePokemons; i++) {
            const response = await axios.get(`URL/${i}`);
            const data = response.data;
            console.log(data);
        }
        return res.status(201).json(data)
    } catch (error) {
        return res.send('error en traer los 151')
    } */
}






module.exports = {
    getPokemons
}