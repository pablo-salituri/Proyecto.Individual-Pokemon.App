import React from 'react';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemons, getTypes} from '../../Redux/actions';
import SearchBar from '../SearchBar/SearchBar';
import Paginado from '../Paginado/Paginado';
import Filtros from '../Filtros/Filtros';
import HomeCards from '../HomeCards/HomeCards';

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
        dispatch(getTypes());
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
                    <HomeCards key={index}
                        ID = {pokemon.ID}
                        Nombre = {pokemon.Nombre}
                        Imagen = {pokemon.Imagen}
                        Tipo = {pokemon.Tipo}
                    />
                )
                }))                
            : (<h2>No hay nada para mostrar</h2>)
            }
            <Paginado cantDePaginas={cantDePaginas} goToPage={goToPage} currentPage={currentPage}/>
        </div>
    )
}