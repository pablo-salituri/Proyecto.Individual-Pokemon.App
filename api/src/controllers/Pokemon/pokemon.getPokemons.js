const axios = require('axios');
const  {Pokemon}  = require('../../db.js')

var URL = 'https://pokeapi.co/api/v2/pokemon/'
const cantDePokemons = 20;
const cantDeHojas = Math.ceil(cantDePokemons/20)
let arregloURLS = [];
var arregloBDD = [];


const getPokemons = async () => {  
    try {
        for (let i = 1; i <= cantDeHojas; i++) {
            let response = await axios.get(URL);
            let data = response.data.results;
            let nextApi = response.data.next;
            for (const posicion of data) {
                arregloURLS.push(posicion.url)
            }
            URL = nextApi;
        }

        for (const url of arregloURLS) {
            let response = await axios.get(url);
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
        }
        return arregloBDD
    } catch (error) {
        return {error: 'No se puede acceder a la lista completa'}       // Dai Repaso II 2.00.00
    }
}


const getAndSavePokemons = async () => {
    try {
        const arregloPokemons = await getPokemons();
        const savePokemons = await Pokemon.bulkCreate(arregloPokemons);
        return arregloPokemons
    } catch (error) {
        return {error: 'Error al completar la Base de Datos'}
    }
}



module.exports = {
    getAndSavePokemons
}







// /****************************************************************************************
//* Los trae mas facil y mas rapido, segun el id


/* const getPokemons = async () => {  
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
            console.log(arregloBDD);
        }
        return arregloBDD
    } catch (error) {
        return {error: 'No se puede acceder a la lista completa'}       // Dai Repaso II 2.00.00
    }
} */