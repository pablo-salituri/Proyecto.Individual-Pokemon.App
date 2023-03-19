import {GET_ALL_POKEMONS, GET_POKEMON_DETAIL, CLEAR_DETAIL, FILTER, FILTER_BY_ORIGIN, ORDER_BY} from './types';

const initialState = {
    allPokemons: [],
    pokemon: [],
    filtro: [],     //Este es el filtro por tipo, pero no quería abusar de la palabra "tipo" en la aplicación
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
        case ORDER_BY: 
        //console.log(payload);
            let filtroOrdenado = [];
            let origenOrdenado = [];
            switch(payload) {
                case 'Id':
                    filtroOrdenado = state.filtro.slice().sort((a,b) => a.ID - b.ID);
                    origenOrdenado = state.origen.slice().sort((a,b) => a.ID - b.ID);
                    /* console.log('filtro --> ',filtroOrdenado);
                    console.log('origen --> ',origenOrdenado); */
                    break;
                case 'Ataque':
                    filtroOrdenado = state.filtro.slice().sort((a,b) => a.Ataque - b.Ataque);
                    origenOrdenado = state.origen.slice().sort((a,b) => a.Ataque - b.Ataque);
                    /* console.log('filtro --> ',filtroOrdenado);
                    console.log('origen --> ',origenOrdenado); */
                    break;
                default:        //Nombre
                    filtroOrdenado = state.filtro.slice().sort((a,b) => {
                        if (a.Nombre > b.Nombre)
                            return 1;
                        if (a.Nombre < b.Nombre)
                            return -1;
                        return 0
                    });
                    origenOrdenado = state.origen.slice().sort((a,b) => {
                        if (a.Nombre > b.Nombre)
                            return 1;
                        if (a.Nombre < b.Nombre)
                            return -1;
                        return 0
                    })
                    /* console.log('filtro --> ',filtroOrdenado);
                    console.log('origen --> ',origenOrdenado); */
            }
            return {
                ...state,
                filtro: filtroOrdenado,
                origen: origenOrdenado,
            }
        default:
            return {...initialState};
    }
}

export default reducer