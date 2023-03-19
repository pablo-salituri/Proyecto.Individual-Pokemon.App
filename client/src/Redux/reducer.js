import {GET_ALL_POKEMONS, GET_POKEMON_DETAIL, CLEAR_DETAIL, FILTER, FILTER_BY_ORIGIN} from './types';

const initialState = {
    allPokemons: [],
    pokemon: [],
    filtro: [],
    origen: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
                filtro: payload,
                origen: payload
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemon: payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                pokemon: payload
            }
        case FILTER:
            return {
                ...state,
                filtro: 
                    payload === 'Todos'
                    ? state.allPokemons
                    : state.allPokemons.filter(pokemon => pokemon.Tipo.some(tipo => tipo === payload))
            }
        case FILTER_BY_ORIGIN:
            return {
                ...state,
                origen:
                    payload === "Mostrar Todos"
                    ? state.allPokemons
                    : (
                        payload === "API"
                        ? state.allPokemons.filter(pokemon => !pokemon.Serial)
                        : state.allPokemons.filter(pokemon => pokemon.Serial)
                    )
            }
        default:
            return {...initialState};
    }
}

export default reducer