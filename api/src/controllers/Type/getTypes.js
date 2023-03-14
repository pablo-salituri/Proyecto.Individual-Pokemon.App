const axios = require('axios');
const {Type} = require('../../db.js')
const URL = 'https://pokeapi.co/api/v2/type';
let arregloBDD = [];


const getTypes = async() => {
    try {
        const respuesta = await axios.get(URL);
        const apiTypes = respuesta.data.results
        for (const tipo of apiTypes) {
            arregloBDD.push({Nombre: tipo.name})
        }
        return arregloBDD
    } catch (error) {
        return {error: 'No se puede acceder a los tipos de Pokemon'}
    }
}


const getAndSaveTypes = async() => {
    try {
        const arregloTypes = await getTypes();
        const saveTypes = await Type.bulkCreate(arregloTypes);
        return arregloTypes
    } catch (error) {
        return {error: 'Error al completar la Base de Datos'}
    }
}


module.exports = {getAndSaveTypes}