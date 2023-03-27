import {GET_ALL_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_BY_NAME, CLEAR_DETAIL, FILTER, FILTER_BY_ORIGIN, ORDER_BY_ASC, ORDER_BY_DESC, GET_TYPES, CLEAR_ERRORS} from './types';
import axios from 'axios';

const URL = 'http://localhost:3001/pokemons/';
const URLtypes = 'http://localhost:3001/types'


export const getAllPokemons = () => {
    return async function(dispatch) {
        try {
            const respuestaDelBack = await axios.get(URL);
            return dispatch({
                type: GET_ALL_POKEMONS,
                payload: respuestaDelBack.data
            })
        }
        catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
    }
}


export const getPokemonDetail = (ID) => {       // Busca por Id
    return async function(dispatch) {
        try {
            const respuestaDelBack = await axios.get(`${URL}${ID}`);
            return dispatch({
                type: GET_POKEMON_DETAIL,
                payload: respuestaDelBack.data
            })
        }
        catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
    }
}


export const getPokemonByName = (Nombre) => {
    return async function(dispatch) {
        try {
            const respuestaDelBack = await axios.get(`${URL}name?name=${Nombre}`);
            //console.log(respuestaDelBack.data);
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: respuestaDelBack.data
            })
        } catch (error) {
            console.log(error.response.data.error);
            return dispatch({type: 'ERROR', payload: error.response.data.error})  
        }
    }
}


export const clearDetail = () => {
    return async function(dispatch) {
        try {
            return dispatch({
                type: CLEAR_DETAIL,
                payload: {}
            })
        } catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
    }
}


export const filter = (tipo) => {
    return async function(dispatch) {
        try {
            return dispatch({
                type: FILTER,
                payload: tipo
            })
        } catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
    }
}


export const filterByOrigin = (origen) => {
    return async function(dispatch) {
        try {
            return dispatch({
                    type: FILTER_BY_ORIGIN,
                    payload: origen
                })            
        } catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
    }
}


export const orderByAsc = (criterio) => {
    return async function(dispatch) {
        try {
            return dispatch({
                type: ORDER_BY_ASC,
                payload: criterio
            })
        } catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
    }
}


export const orderByDesc = (criterio) => {
    return async function(dispatch) {
        try {
            return dispatch({
                type: ORDER_BY_DESC,
                payload: criterio
            })
        } catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
    }
}


export const getTypes = () => {
    return async function(dispatch) {
        try {
            const respuestaDelBack = await axios.get(URLtypes);
            return dispatch({
                type: GET_TYPES,
                payload: respuestaDelBack.data
            })
        } catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
    }
}


export const createPokemon = (pokemon) => {                 
    return async function(dispatch) {
        try {
            const respuestaDelBack = await axios.post(URL, pokemon);
            console.log(respuestaDelBack.data.message);
            return respuestaDelBack.data.message
        } catch (error) {                   
            return error.response.data.error
            //console.log('action -> ',error.response.data.error);
        }
    }
}


export const clearErrors = (dispatch) => {
    return dispatch({
        type: CLEAR_ERRORS,
        payload: {}
    })
}