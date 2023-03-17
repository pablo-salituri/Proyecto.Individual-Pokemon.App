import {GET_ALL_POKEMONS} from './types';
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