import {GET_ALL_POKEMONS, GET_POKEMON_DETAIL} from './types';

const initialState = {
    allPokemons: [],
    pokemon: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: payload
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemon: payload
            }
        default:
            return {...initialState};
    }
}

export default reducer