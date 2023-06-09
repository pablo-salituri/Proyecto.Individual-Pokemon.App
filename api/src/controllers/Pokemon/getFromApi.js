//* Anda perrrrrrfecto

/* const axios = require('axios');
//var URL = 'https://pokeapi.co/api/v2/pokemon/'
const cantDePokemons = 20;
const cantDeHojas = Math.ceil(cantDePokemons/20)


const getPokemonsFromApi = async (URL = 'https://pokeapi.co/api/v2/pokemon/') => {  
    try {      
        let pokemones = []

        // Genera un arreglo con los primeros X pokemon de la Api. En cada posición está el detalle de cada Pokemon
        
        for (let i = 1; i <= cantDeHojas; i++) {
            let response = await axios.get(URL);
            let data = response.data.results;
            let nextApi = response.data.next;
            for (const posicion of data) {
                let respuesta = await axios.get(posicion.url);
                const datos = respuesta.data
                pokemones.push({
                    ID: datos.id,
                    Nombre: datos.name,
                    Imagen: datos.sprites.front_default,
                    Vida: datos.stats[0].base_stat,
                    Ataque: datos.stats[1].base_stat,
                    Defensa: datos.stats[2].base_stat,
                    Velocidad: datos.stats[5].base_stat,
                    Altura: datos.height,
                    Peso: datos.weight,
                    Tipo: datos.types.map(elem => elem.type.name)
                })
            }
            URL = nextApi;
        }
        return pokemones
    } catch (error) {
        return {error: 'Error al importar desde la Api'}       // Dai Repaso II 2.00.00
    }
}


module.exports = {
    getPokemonsFromApi
} */





// /****************************************************************************************
//* Los trae mas facil y mas rapido, segun el id

const axios = require('axios');
const cantDePokemons = 20;             //1:20 para 150


const getPokemonsFromApi = async () => {  
    try {
        let pokemones = []

        for (let i = 1; i <= cantDePokemons; i++) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const datos = response.data;
            pokemones.push({
                ID: datos.id,
                Nombre: datos.name,
                Imagen: datos.sprites.front_default,
                Vida: datos.stats[0].base_stat,
                Ataque: datos.stats[1].base_stat,
                Defensa: datos.stats[2].base_stat,
                Velocidad: datos.stats[5].base_stat,
                Altura: datos.height,
                Peso: datos.weight,
                Tipo: datos.types.map(elem => elem.type.name)
            })
        }
        return pokemones
    } catch (error) {
        return {error: 'Error al importar desde la Api'}       // Dai Repaso II 2.00.00
    }
}


module.exports = {
    getPokemonsFromApi
}