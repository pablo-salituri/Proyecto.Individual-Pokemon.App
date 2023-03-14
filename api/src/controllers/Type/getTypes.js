const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/type';
let arregloTypes = [];


const getTypes = async() => {
    try {
        const respuesta = await axios.get(URL);
        const apiTypes = respuesta.data.results
        for (const tipo of apiTypes) {
            arregloTypes.push(tipo.name)
        }
        return arregloTypes
    } catch (error) {
        return {error: 'No se puede acceder a los tipos de Pokemon'}
    }
}


module.exports = {getTypes}