import React from 'react';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemons} from '../../Redux/actions';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Paginado from '../Paginado/Paginado';
import Filtros from '../Filtros/Filtros';

export default function Home() {
    const dispatch = useDispatch();
    const pokemonsPerPage = 12;

    const pokemonsPorFiltro = useSelector(state => state.filtro);
    const pokemonsPorOrigen = useSelector(state => state.origen);
    const pokemonsToRender = pokemonsPorFiltro.filter(pokefilter => pokemonsPorOrigen.some(pokeorigin => pokefilter.ID === pokeorigin.ID))

    const cantDePaginas = Math.ceil(pokemonsToRender.length/pokemonsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const firstPokemonInPage = pokemonsPerPage * (currentPage - 1);     
    const lastPokemonInPage = firstPokemonInPage + pokemonsPerPage;
    const pokemonsInPage = pokemonsToRender.slice(firstPokemonInPage,lastPokemonInPage)
    
    const goToPage = (num) => {
        setCurrentPage(num)
    }

    useEffect(() => {
        dispatch(getAllPokemons());
    },[dispatch]);

    return(
        <div>
            <SearchBar />
            <Filtros />
            <h1>HomePage</h1>
            {/* {console.log('filtro --> ',pokemonsPorFiltro)}
            {console.log('origen --> ',pokemonsPorOrigen)} */}
            {
            pokemonsInPage.length
            ? (pokemonsInPage.map((pokemon, index) => {
                return (
                    <div key={index}>
                        <Link to={`/detailPage/${pokemon.ID}`}>
                            <h2>{pokemon.Nombre}</h2>
                            <img src={pokemon.Imagen} alt={pokemon.Name} />
                            <h2>Tipo: {pokemon.Tipo ? pokemon.Tipo.join(', ') : null}</h2>
                        </Link>
                    </div>
                )
                }))                
            : (<h2>No hay nada para mostrar</h2>)
            }
            <Paginado cantDePaginas={cantDePaginas} goToPage={goToPage} currentPage={currentPage}/>
        </div>
    )
}