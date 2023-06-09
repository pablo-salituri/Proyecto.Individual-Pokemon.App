const axios = require('axios');
const {Type} = require('../../db.js')
const URL = 'https://pokeapi.co/api/v2/type';

const getTypes = async() => {
    try {
        // Verifico primero si hay tipos cargados en la Base de Datos
        const tipos = await Type.findAll({
            attributes: ['Nombre']
        });

        if (tipos.length) {
            console.log('De DB');
            return tipos;
        }

        //Sino, los traigo de la API, y los cargo en la Base de Datos
        let arregloBDD = [];
        const respuesta = await axios.get(URL);
        const apiTypes = respuesta.data.results
        for (const tipo of apiTypes) {
            arregloBDD.push({Nombre: tipo.name})
        }

        await Type.bulkCreate(arregloBDD);
        console.log('De Api');
        return arregloBDD
    } catch (error) {
        return {error: 'No se puede acceder a los tipos de Pokemon'}
    }
}


module.exports = {getTypes}