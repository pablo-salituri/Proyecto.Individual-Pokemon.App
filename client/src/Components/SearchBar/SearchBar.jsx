import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function SearchBar() {
    const [busqueda, setBusqueda] = useState('');

    function handleInput(event) {
        setBusqueda(event.target.value)
    }

    return (
        <div>
            <input type="search" value={busqueda} onChange={handleInput}/>
            <Link to={`/DetailPage/search?name=${busqueda}`}>
                <button>Buscar</button>
            </Link>
        </div>
    )
}