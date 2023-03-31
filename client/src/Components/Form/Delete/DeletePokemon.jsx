import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { filterByOrigin, deletePokemon, getPokemonByName} from "../../../Redux/actions";
import Preview from '../../Preview/Preview';
import fondoNegro2 from '../Create/fondoNegro2.jpg'
import styles from './DeletePokemon.module.css';


export default function DeletePokemon() {
    const dispatch = useDispatch()
    const pokemonsInDB = useSelector(state => state.origen)        
    const {Nombre, Imagen, Tipo} = useSelector(state => state.pokemon)         

    const [pokemonToDelete, setPokemonToDelete] = useState({})      //!BREAKPOINT


    function handleChange(event) {
        setPokemonToDelete(event.target.value);
        dispatch(getPokemonByName(event.target.value))
    }

    async function submit() {
        const message = await dispatch(deletePokemon(pokemonToDelete));
        console.log(message);
    }


    useEffect(() => {
        document.body.style.background = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bbf58a6-1e85-4cfe-83fd-02df6f482b45/de8nlib-6bed7b3d-3d7e-4763-bb60-18f5ee0127fd.png/v1/fill/w_1024,h_652,q_80,strp/background_prairie_pokemon_screencapture_by_nemotrex_de8nlib-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUyIiwicGF0aCI6IlwvZlwvNWJiZjU4YTYtMWU4NS00Y2ZlLTgzZmQtMDJkZjZmNDgyYjQ1XC9kZThubGliLTZiZWQ3YjNkLTNkN2UtNDc2My1iYjYwLTE4ZjVlZTAxMjdmZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZVgNGi61AOkC068E-wphWmAUW8amj0MiJySqDcMCVh8') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        dispatch(filterByOrigin('DataBase'));
    },[dispatch])

    return(
        <div className = {styles.container}>
            {console.log(Tipo)}
            <img className={styles.fondoNegro} src={fondoNegro2} alt="fondoNegro2" />
            <section className={styles.form}>
                <div className={styles.seleccion}>
                    <select /* className = {styles.porTipo} */ defaultValue="Elige un Pokemon" name="DB_Pokemons" id="DB_Pokemons" onChange={handleChange}>
                        <option disabled={true}/* value={pokemon.Nombre} */>Elige un Pokemon</option>
                        {
                        pokemonsInDB.map(pokemon => 
                            <option key={pokemon.Nombre} value={pokemon.Nombre}>{pokemon.Nombre[0].toUpperCase() + pokemon.Nombre.slice(1)}</option>
                        )
                        }
                    </select>
                    <button onClick={submit}>BORRAR</button>
                </div>
                {
                Tipo && Tipo.length ?
                    (<div className={styles.preview}>
                        <Preview Nombre={Nombre} Imagen={Imagen} Tipo={Tipo}/>
                    </div>)
                : (
                    <p>Loading...</p>
                  )
                }                
            </section>    
        </div>
    )
}