const axios = require('axios');
const  {Pokemon, Type}  = require('../../db.js')

var URL = 'https://pokeapi.co/api/v2/pokemon/'
const cantDePokemons = 40;
const cantDeHojas = Math.ceil(cantDePokemons/20)


const getPokemons = async () => {  
    try {      
        let pokemones = []

        for (let i = 1; i <= cantDeHojas; i++) {
            let response = await axios.get(URL);
            let data = response.data.results;
            let nextApi = response.data.next;
            for (const posicion of data) {
                let respuesta = await axios.get(posicion.url);
                let datos = respuesta.data
                pokemones.push(datos)
            }
            URL = nextApi;
        }

        //console.log(pokemones);

        const allPokemones = pokemones.map(async (response) => {
            //console.log(response.name);
            const pokemon = await Pokemon.create({
                ID: response.id,
                Nombre: response.name,
                Imagen: response.sprites.front_default,
                Vida: response.stats[0].base_stat,
                Ataque: response.stats[1].base_stat,
                Defensa: response.stats[2].base_stat,
                Velocidad: response.stats[5].base_stat,
                Altura: response.height,
                Peso: response.weight
            })

            const types = response.types.map(async (type) => {
                //console.log(type);
                const [createdType] = await Type.findOrCreate({
                    where: {Nombre: type.type.name},
                    defaults: {ID: type.type.url.split('/').slice(-2, -1)[0]}
                })

                await pokemon.addType(createdType)
            })
        
            await Promise.all(types)
            return pokemon;
        })
        return Promise.all(allPokemones)
    } catch (error) {
        return {error: 'No se puede acceder a la lista completa'}       // Dai Repaso II 2.00.00
    }
}


const getAndSavePokemons = async () => {
    try {
        const arregloPokemons = await getPokemons();
        //const savePokemons = await Pokemon.bulkCreate(arregloPokemons);
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