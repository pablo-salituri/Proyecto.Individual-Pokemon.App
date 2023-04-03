import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filterByOrigin, deletePokemon, getPokemonByName, clearDetail, getAllPokemons, clearErrors} from "../../../Redux/actions";
import Preview from '../../Preview/Preview';
import fondoNegro2 from '../Create/fondoNegro2.jpg'
import styles from './DeletePokemon.module.css';


export default function DeletePokemon() {               
    const dispatch = useDispatch()
    const navigate = useNavigate();


    const erroresReducer = useSelector(state => state.erroresBack);
    const todosLosPokemones = useSelector(state => state.allPokemons)        
    const pokemonsInDB = useSelector(state => state.origen)        
    const {Nombre, Imagen, Tipo} = useSelector(state => state.pokemon)         

    const [pokemonToDelete, setPokemonToDelete] = useState({})


    function handleChange(event) {                                  // Cuando elijo un pokemon, lo guardo en un estado local
        setPokemonToDelete(event.target.value);                     // y traigo su información para el Preview
        dispatch(getPokemonByName(event.target.value))
    }


    async function handleDelete() {
        const response = window.confirm(`¿Eliminar a ${pokemonToDelete}?`)
        if (response) {
            await dispatch(deletePokemon(pokemonToDelete));
        }
    }                                       


    function handleClick() {
        navigate(-1)
    }


    useEffect(() => {
        document.body.style.background = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bbf58a6-1e85-4cfe-83fd-02df6f482b45/de8nlib-6bed7b3d-3d7e-4763-bb60-18f5ee0127fd.png/v1/fill/w_1024,h_652,q_80,strp/background_prairie_pokemon_screencapture_by_nemotrex_de8nlib-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUyIiwicGF0aCI6IlwvZlwvNWJiZjU4YTYtMWU4NS00Y2ZlLTgzZmQtMDJkZjZmNDgyYjQ1XC9kZThubGliLTZiZWQ3YjNkLTNkN2UtNDc2My1iYjYwLTE4ZjVlZTAxMjdmZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZVgNGi61AOkC068E-wphWmAUW8amj0MiJySqDcMCVh8') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        dispatch(getAllPokemons())
        .then(() => {
            dispatch(filterByOrigin('DataBase'))
        });
    }, [dispatch]);
    

    useEffect(() => {
        if (erroresReducer.length) {
            window.alert(erroresReducer);           // Por ej: "Pokemon eliminado con éxito"
            dispatch(clearErrors);                  // Limpio los mensajes del Back
            dispatch(clearDetail());                // Vacío el estado global "Pokemon"
            window.location.reload();
        }

        return () => {                                      // Cuando salgo de esta página, necesito restablecer los filtros,
            dispatch(filterByOrigin("Mostrar Todos"))       // para poder mostrar todo en "Home" y no sólo los creados
            console.log('Componente Desmontado. Filtros Restaurados')         
        }
    }, [dispatch, erroresReducer]);


    return(
        <div className = {styles.container}>
            {console.log(pokemonsInDB)}
            <img className={styles.fondoNegro} src={fondoNegro2} alt="fondoNegro2" />
            <section className={styles.form}>
                {pokemonsInDB.length !== todosLosPokemones.length ?
                    (
                    <>
                        <section className={styles.innerForm}>
                            <div className={styles.seleccion}>
                                <select defaultValue="Elige un Pokemon" name="DB_Pokemons" id="DB_Pokemons" onChange={handleChange}>
                                    <option disabled={true}>Elige un Pokemon</option>
                                        {
                                        pokemonsInDB.map(pokemon => 
                                            <option key={pokemon.Nombre} value={pokemon.Nombre}>{pokemon.Nombre[0].toUpperCase() + pokemon.Nombre.slice(1)}</option>
                                        )
                                        }
                                </select>
                                <section className={styles.boton}>
                                    <button onClick={handleDelete}>BORRAR</button>
                                    <p>a</p>                                {/* // Es sólo para el difuminado del botón */}
                                </section>
                            </div>
                            {
                            Tipo && Tipo.length ?
                                (<div className={styles.preview}>
                                    <Preview Nombre={Nombre} Imagen={Imagen} Tipo={Tipo}/>
                                </div>) :
                                (<div className={styles.preview}>
                                    <Preview Nombre='' Imagen='' Tipo={['']}/>
                                </div>)
                            }
                        </section>

                        <section className={styles.volver}>
                            <button onClick={handleClick}>VOLVER</button>      
                        </section>
                    </> ) :
                    (
                    <div className={styles.cargando}>CARGANDO...</div>
                    )  
                }
            </section>    
        </div>        
    )
}