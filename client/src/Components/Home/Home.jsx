import React from 'react';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemons, getTypes} from '../../Redux/actions';
import SearchBar from '../SearchBar/SearchBar';
import Paginado from '../Paginado/Paginado';
import Filtros from '../Filtros/Filtros';
import HomeCards from '../HomeCards/HomeCards';
import loadingGif from './loadingGif.gif';
import cargando from './cargando.gif'
import styles from './Home.module.css'

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

    const goToPage1 = () => {                   // Cada vez que se aplique un filtro/odenamiento, se vuelve a la página 1  
        setCurrentPage(1)
    }                            

    useEffect(() => {       
        document.body.style.background = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bbf58a6-1e85-4cfe-83fd-02df6f482b45/de8nlib-6bed7b3d-3d7e-4763-bb60-18f5ee0127fd.png/v1/fill/w_1024,h_652,q_80,strp/background_prairie_pokemon_screencapture_by_nemotrex_de8nlib-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUyIiwicGF0aCI6IlwvZlwvNWJiZjU4YTYtMWU4NS00Y2ZlLTgzZmQtMDJkZjZmNDgyYjQ1XC9kZThubGliLTZiZWQ3YjNkLTNkN2UtNDc2My1iYjYwLTE4ZjVlZTAxMjdmZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZVgNGi61AOkC068E-wphWmAUW8amj0MiJySqDcMCVh8') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        dispatch(getAllPokemons());
        dispatch(getTypes());
    },[dispatch]);

    return(
        <div className={styles.divGlobal}>
            <SearchBar />                       
            <Filtros goToPage1={goToPage1}/>                
            {
            pokemonsInPage.length 
            ? (
                <div>
                    <section  className={styles.sectionCards}>
                        {pokemonsInPage.map((pokemon, index) => (
                            <HomeCards
                            key={index}
                            ID={pokemon.ID}
                            Nombre={pokemon.Nombre}
                            Imagen={pokemon.Imagen}
                            Tipo={pokemon.Tipo}
                            />
                        ))}
                    </section>
                    <section className={styles.paginado}>
                        <Paginado cantDePaginas={cantDePaginas} goToPage={goToPage} currentPage={currentPage} />
                    </section>                  
                </div>
            )                
            : (
                <div className={styles.gifs}>
                    <img className={styles.charizard} src={loadingGif} alt="gif_carga_charizard" /> 
                    <img className={styles.loading} src={cargando} alt="gif_carga_bar" />
                </div>
            )
            }    
        </div>
    )
}