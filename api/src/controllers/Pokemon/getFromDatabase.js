const  {Pokemon, Type}  = require('../../db.js')

const getPokemonsFromDataBase = async () => {  
    try {      
        const pokemones = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['Nombre'],
                through: {attributes:[]}
            }
        });

        if (pokemones) { 
            const arreglo = pokemones.map(pokemon => {
                const respuesta = pokemon.toJSON();
                //console.log(respuesta)
                const tipos = respuesta.Types.map(tipo => tipo.Nombre);
                respuesta.Tipo = tipos;
                delete respuesta.Types;
                return respuesta
            })
            return arreglo
        }
        return pokemones
    } catch (error) {
        return {error: 'Error al importar desde la Base de Datos'}       // Dai Repaso II 2.00.00
    }
}


module.exports = {
    getPokemonsFromDataBase
}

