import React from 'react';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemons} from '../../Redux/actions';
import SearchBar from '../SearchBar/SearchBar'

export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.allPokemons);
    const pokemonsPerPage = 12;
    const cantDePaginas = Math.ceil(allPokemons.length/pokemonsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const firstPokemonInPage = pokemonsPerPage * (currentPage - 1);
    const lastPokemonInPage = firstPokemonInPage + pokemonsPerPage;
    const pokemonsInPage = allPokemons.slice(firstPokemonInPage,lastPokemonInPage)

    const arrayDePaginas = []
    for (let i = 1; i <= cantDePaginas; i++)
        arrayDePaginas.push(i)
    //console.log(arrayDePaginas);

    function goToPage(num) {
        setCurrentPage(num)
    }

    useEffect(() => {
        dispatch(getAllPokemons());
    },[dispatch]);

    return(
        <div>
            <SearchBar />
            <select name="Filtrar_tipo" id="Filtrar_tipo">
                <option value="Todos">Mostrar Todos</option>
                <option value="Bug">Bug</option>
                <option value="Dark">Dark</option>
                <option value="Dragon">Dragon</option>
                <option value="Electric">Electric</option>
                <option value="Fairy">Fairy</option>
                <option value="Fighting">Fighting</option>
                <option value="Fire">Fire</option>
                <option value="Flying">Flying</option>
                <option value="Ghost">Ghost</option>
                <option value="Grass">Grass</option>
                <option value="Ground">Ground</option>
                <option value="Ice">Ice</option>
                <option value="Normal">Normal</option>
                <option value="Phychic">Phychic</option>
                <option value="Poison">Poison</option>
                <option value="Rock">Rock</option>
                <option value="Shadow">Shadow</option>
                <option value="Steel">Steel</option>
                <option value="Unknown">Unknown</option>
                <option value="Water">Water</option>
            </select>

            <select name="Filtrar_origen" id="Filtrar_origen">
                <option value="Mostrar Todos">Mostrar Todos</option>
                <option value="API">API</option>
                <option value="Base de Datos">Base de Datos</option>
            </select>

            <select name="Ordenar" id="Ordenar">
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select name="Ordenar_por" id="Ordenar_por">
                <option value="Nombre">Nombre</option>
                <option value="Ataque">Ataque</option>
            </select>

            <h1>HomePage</h1>
            {
            pokemonsInPage.map((pokemon, index) => {
                return (
                    <div key={index}>
                        <h2>{pokemon.Nombre}</h2>
                        <img src={pokemon.Imagen} alt={pokemon.Name} />
                    </div>      // Breakpoint
                )
            })
            }
            <section>
                {
                arrayDePaginas.map((num) => {
                    //console.log(elem);
                    return(
                        <ul key={num}>
                            <a href='' onClick={() => goToPage(num)}>{num}</a>
                        </ul>
                    )
                })
                }      
            </section>
        </div>
    )
}