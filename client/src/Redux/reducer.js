import {GET_ALL_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_BY_NAME, CLEAR_DETAIL, FILTER, FILTER_BY_ORIGIN, 
        ORDER_BY_ASC, ORDER_BY_DESC, GET_TYPES, CLEAR_ERRORS, CREATE_POKEMON, DELETE_POKEMON} from './types';

const initialState = {
    allPokemons: [],
    tipos: [],
    pokemon: [],    // Este estado se carga con el detalle de un pokemon en particular, pedido por Id o por Nombre
    filtro: [],     // Este es el filtro por tipo, pero no quería abusar de la palabra "tipo" en la aplicación
    origen: [],      
    erroresBack: [],        // Son los mensajes que vienen desde el Back (no necesariamente son errores)
    firstRender: true       // Lo uso para saber si el getAllPokemons sólo debe traer los pokemones (false), o también cargar los estados de filtro y origen (true
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_ALL_POKEMONS:
            if (state.firstRender) {
                return {
                    ...state,                       
                    allPokemons: payload,
                    filtro: payload,
                    origen: payload,
                    firstRender: false
                }}
            else return  {
                ...state,
                allPokemons: payload
            }
        case GET_TYPES:
            const tipos = payload.map(tipo => tipo.Nombre);
            tipos.sort((a,b) => {
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                return 0
            });
            return {
                ...state,
                tipos: tipos
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemon: payload
            }
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemon: payload
            }
        case CLEAR_DETAIL:                                   // Vacía el estado global "pokemon"
            return {
                ...state,
                pokemon: payload
            }
        case FILTER: {
            let cambio;
            payload === 'Todos'
            ? cambio = state.allPokemons
            : cambio = state.allPokemons.filter(pokemon => pokemon.Tipo.some(tipo => tipo === payload))
            return {
                ...state,
                filtro: cambio 
            }
        }
        case FILTER_BY_ORIGIN: {
            let cambio;
            payload === "Mostrar Todos"
            ? cambio = state.allPokemons
            : (
                payload === "API"
                ? cambio = state.allPokemons.filter(pokemon => !pokemon.Serial)
                : cambio = state.allPokemons.filter(pokemon => pokemon.Serial)
            )
            return {
                ...state,
                origen: cambio
            }
        }
        case ORDER_BY_ASC: {
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
                default:        //*Nombre
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
        }
        case ORDER_BY_DESC: {
        //console.log(payload);
            let filtroOrdenado = [];
            let origenOrdenado = [];
            switch(payload) {
                case 'Id':
                    filtroOrdenado = state.filtro.slice().sort((a,b) => b.ID - a.ID);
                    origenOrdenado = state.origen.slice().sort((a,b) => b.ID - a.ID);
                    /* console.log('filtro --> ',filtroOrdenado);
                    console.log('origen --> ',origenOrdenado); */
                    break;
                case 'Ataque':
                    filtroOrdenado = state.filtro.slice().sort((a,b) => b.Ataque - a.Ataque);
                    origenOrdenado = state.origen.slice().sort((a,b) => b.Ataque - a.Ataque);
                    /* console.log('filtro --> ',filtroOrdenado);
                    console.log('origen --> ',origenOrdenado); */
                    break;
                default:        //Nombre
                    filtroOrdenado = state.filtro.slice().sort((a,b) => {
                        if (a.Nombre < b.Nombre)
                            return 1;
                        if (a.Nombre > b.Nombre)
                            return -1;
                        return 0
                    });
                    origenOrdenado = state.origen.slice().sort((a,b) => {
                        if (a.Nombre < b.Nombre)
                            return 1;
                        if (a.Nombre > b.Nombre)
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
        }
        case CREATE_POKEMON:
            return {
                ...state,
                firstRender: true,
                erroresBack: payload
            }
        case DELETE_POKEMON:
            return {
                ...state,
                firstRender: true,
                erroresBack: payload
            }
        case 'ERROR':
            return {
                ...state,
                erroresBack: payload
            }                          
        case CLEAR_ERRORS:                       //Limpia el estado global de mensajes del Back
            return {
                ...state,
                erroresBack: payload
            }
        default:
            return {...state};
    }
}

export default reducer