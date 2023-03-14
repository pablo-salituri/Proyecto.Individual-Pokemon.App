const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon/';
const  {Pokemon}  = require('../../db.js');
var i = 1;


const postPokemons = async(ID, Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso) => {
    try {
        //Valido si el id existe en la BDD
        const respuestaDataBase = await Pokemon.findOne({
            where: {
                ID
            }
        })
        if (respuestaDataBase)
            return {error: 'No se pudo completar la carga porque ya existe un Pokemon con ese Id'}


        // * Esta es la busqueda de id en Api. Funciona bien, pero tarda muchísimo
        /* Valido si el Id existe en la Api
        Busco el total de pokemons en la Api
        const respuesta = await axios.get(URL);
        const totalDePokemon = respuesta.data.count
        

        Itero hasta que termine o encuentre uno con ese Id
        do {
            const response = await axios.get(`${URL}${i}`);
            const data = response.data.id;
            console.log('id por api  ' + data);
            if (ID === data)
                return {error: 'No se pudo completar la carga porque ya existe un Pokemon con ese Id en la Api'}
            i++
        }
        while(i <= totalDePokemon) */

        
        const newPokemon = await Pokemon.create({
            ID,
            Nombre,
            Imagen,                 //ToDo: Debe crear un pokemon en la base de datos, y este debe
            Vida,                   //ToDo: estar relacionado con sus tipos indicados (al menos uno).
            Ataque,
            Defensa,
            Velocidad,
            Altura,
            Peso
        })
        return newPokemon
    } catch (error) {
        return {error: 'No se pudo agregar el pokemon solicitado'}
    }
}


module.exports = {postPokemons}




/* const postPokemons = async(ID, Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso) => {
    try {
        const newPokemon = await Pokemon.create({
            ID,
            Nombre,
            Imagen,
            Vida,
            Ataque,
            Defensa,
            Velocidad,
            Altura,
            Peso
        })
        return newPokemon
    } catch (error) {
        return {error: 'No se pudo agregar el pokemon solicitado'}
    }
} */