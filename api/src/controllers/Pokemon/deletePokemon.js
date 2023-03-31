const {Pokemon} = require('../../db.js')



const deletePokemon = async(Nombre) => {
    try {
        await Pokemon.destroy({
            where: {Nombre}
        });
        return {message: `Pokemon eliminado con éxito`} 
    } catch (error) {
        return {error: 'No se pudo eliminar el pokemon solicitado'}
    }
}


module.exports = {deletePokemon}