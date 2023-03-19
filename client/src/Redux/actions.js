import {GET_ALL_POKEMONS, GET_POKEMON_DETAIL, CLEAR_DETAIL, FILTER, FILTER_BY_ORIGIN, ORDER_BY} from './types';
import axios from 'axios';

const URL = 'http://localhost:3001/pokemons/';


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


export const getPokemonDetail = (ID) => {
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


export const orderBy = (criterio) => {
    return async function(dispatch) {
        try {
            return dispatch({
                type: ORDER_BY,
                payload: criterio
            })
        } catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
    }
}