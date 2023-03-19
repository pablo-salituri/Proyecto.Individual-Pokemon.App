import {GET_ALL_POKEMONS, GET_POKEMON_DETAIL} from './types';
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