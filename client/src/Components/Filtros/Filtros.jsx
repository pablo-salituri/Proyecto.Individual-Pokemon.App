import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { filter, filterByOrigin, orderByAsc, orderByDesc } from '../../Redux/actions'


export default function Filtros(){
    const dispatch = useDispatch();

    const [orden, setOrden] = useState('Ascendente');       // Guardo los dos criterios en estados locales, para que al ejecutar
    const [ordenPor, SetOrdenPor] = useState('Id')          // uno, utilice el otro para saber cuál fue el ultimo onChage


    const handleFilter = (event) => {
        dispatch(filter(event.target.value))
    }
    
    const handleOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
    }
    
    function handleOrder(event) {
        setOrden(event.target.value)                // Actualizo el metodo de ordenamiento en el estado (Asc/Desc)
        /* orden === 'Ascendente'                   // Tuve que pasar esta poción de código a useEffect, porque evaluaba
        ?* dispatch(orderByAsc(ordenPor))           // el ternario antes de actualizar el estado
        : dispatch(orderByDesc(ordenPor)) */
    }
    
    function handleOrderBy(event) {
        SetOrdenPor(event.target.value)              // Actualizo el criterio de ordenamiento en el estado (Id, Nombre, Ataque)
        /* orden === 'Ascendente'                       
        ?* dispatch(orderByAsc(event.target.value))
        : dispatch(orderByDesc(event.target.value)) */
    }

    useEffect(() => {
        orden === 'Ascendente'                      // Cuando se detecten cambios en alguno de los estados, vuelve a 
        ? dispatch(orderByAsc(ordenPor))            // ejecutar los dispatch con la últimza actualización de ambos estados
        : dispatch(orderByDesc(ordenPor)) 
    },[orden, ordenPor, dispatch])

    return(
        <div>
            {/* {console.log('1',orden)} */}
            <select name="Filtrar_tipo" id="Filtrar_tipo" onChange={handleFilter}>
                <option value="Todos">Mostrar Todos</option>
                <option value="bug">Bug</option>
                <option value="dark">Dark</option>
                <option value="dragon">Dragon</option>
                <option value="electric">Electric</option>
                <option value="fairy">Fairy</option>
                <option value="fighting">Fighting</option>
                <option value="fire">Fire</option>
                <option value="flying">Flying</option>
                <option value="ghost">Ghost</option>
                <option value="grass">Grass</option>
                <option value="ground">Ground</option>
                <option value="ice">Ice</option>
                <option value="normal">Normal</option>
                <option value="phychic">Phychic</option>
                <option value="poison">Poison</option>
                <option value="rock">Rock</option>
                <option value="shadow">Shadow</option>
                <option value="steel">Steel</option>
                <option value="unknown">Unknown</option>
                <option value="water">Water</option>
            </select>

            <select name="Filtrar_origen" id="Filtrar_origen" onChange={handleOrigin}>
                <option value="Mostrar Todos">Mostrar Todos</option>
                <option value="API">API</option>
                <option value="Base de Datos">Base de Datos</option>
            </select>

            <select name="Ordenar_por" id="Ordenar_por" onChange={handleOrderBy}>
                <option value="Id">Id</option>
                <option value="Nombre">Nombre</option>
                <option value="Ataque">Ataque</option>
            </select> 

            <select name="Ordenar" id="Ordenar" onChange={handleOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>  
        </div>
    )
}