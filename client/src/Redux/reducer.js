import {GET_ALL_POKEMONS} from './types';

const initialState = {
    allPokemons: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: payload
            }
        default:
            return {...initialState};
    }
}

export default reducer