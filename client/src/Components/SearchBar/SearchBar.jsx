import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './SearchBar.module.css';
import pokedex from './pokedex.png'


export default function SearchBar() {
    const [busqueda, setBusqueda] = useState('');

    function handleInput(event) {
        setBusqueda(event.target.value)
    }

    return (                                   
        <div className={styles.div}>
            <input placeholder="Busca un Pokemon en tu pokedex..." className={styles.input} type="search" value={busqueda} onChange={handleInput}/>
            <Link to={`/DetailPage/search?name=${busqueda}`}>
                <img className={styles.pokedex} src={pokedex} alt='pokedex' />
            </Link>
        </div>
    )
}