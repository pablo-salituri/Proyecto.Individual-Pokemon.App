const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon/';
const  {Pokemon, Type}  = require('../../db.js');
//var i = 1;    Es de la parte comentada del código


const postPokemons = async(Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo) => {
    try {
        
        //Valido si el Nombre existe en la BDD
        if (await Pokemon.findOne({
            where: {Nombre: Nombre.toLowerCase()}
            })
        )
            return {error: 'No se pudo completar la carga porque ya existe un Pokemon con ese Nombre'}


        //Valido si La imagen existe en la BDD
        if (await Pokemon.findOne({
            where: {Imagen}
            })
        )
            return {error: 'No se pudo completar la carga porque ya existe un Pokemon con esa Imagen'}


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

        // /*******************************************************************************************


        // Genero un Id automático, partiendo del máximo existente en la Api y la DB

        const respuesta = await axios.get(URL);
        const totalEnApi = respuesta.data.count
                
        const newPokemon = await Pokemon.create({
            ID: Math.max(totalEnApi, await Pokemon.max('ID')) + 1,
            Nombre: Nombre.toLowerCase(),
            Imagen,                
            Vida,                   
            Ataque,
            Defensa,
            Velocidad,
            Altura,
            Peso,
        })

        const tipo = await Type.findOne({where: {Nombre: Tipo}});

        await newPokemon.addType(tipo)

        return newPokemon
    } catch (error) {
        return {error: 'No se pudo agregar el pokemon solicitado'}
    }
}


module.exports = {postPokemons}
