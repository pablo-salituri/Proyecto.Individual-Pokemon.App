import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPokemonDetail, getPokemonByName, clearDetail, clearErrors} from '../../Redux/actions';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";
import CardDetail2 from "../CardDetail/CardDetail2";
import pokedex from './pokedex.png';
import mewtwo from './mewtwo.png';
import styles from './DetailPage.module.css'


export default function DetailPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {detailId} = useParams();
    const location = useLocation();
    const nombreQuery = location.search.split('=')[1];


    // Traigo los datos del componente global, independientemente de si la solicitud se hizo por query o params
    const {ID, Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo} = useSelector(state => state.pokemon);
    const erroresReducer = useSelector(state => state.erroresBack);

    function back() {
        dispatch(clearErrors)
        navigate(-1)
    }
    
    // Si el componente posee location.search al ejecutarse, significa que el pedido se hizo por query. Caso contrario por params
    useEffect(() => {
        if (!location.search)
            dispatch(getPokemonDetail(detailId))
        else
            dispatch(getPokemonByName(nombreQuery))

        return () => {
            dispatch(clearDetail())                     // Limpia el estado global "Pokemon"
            console.log('Componente Desmontado')         
        }
    },[nombreQuery, location.search, detailId, dispatch])             
    
                                                            
    return (                                               
        <div className={styles.contenedor}>                                              
            <img className={styles.pokedex} src={pokedex} alt="pokedex" />          
            {
                erroresReducer.length ?                         // Si hay errores, significa que se intentó buscar un pokemon que no existe
                (                                               // Por lo tanto devuelvo un pokemon desconocido
                <div>
                    <section className={styles.visorIzq}>
                        <CardDetail                             // Visor izquierdo de la pokedex
                            ID = '?'
                            Nombre = 'Nombre: ?'
                            Imagen = {mewtwo}
                        />
                    </section>
                    <section className={styles.visorDer}>
                        <CardDetail2                            // Visor derecho de la pokedex
                            Vida = '?'
                            Ataque = '?'
                            Defensa = '?'
                            Velocidad = '?'
                            Altura = '?'
                            Peso = '?'
                            Tipo = {['?']}
                        />
                    </section>
                    <button className={styles.button} onClick={back}>Volver</button>
                    <span className={styles.span}>POKEMON DESCONOCIDO</span>
                </div> 
            ) : (                      
                ID ?                                                        // Si no hay errores, espero a tener ID para renderizar el pokemon
                    <div>
                        <section className={styles.visorIzq}>
                            <CardDetail                                     // Visor izquierdo de la pokedez
                                ID = {ID}
                                Nombre = {Nombre}
                                Imagen = {Imagen}
                            />
                        </section>
                        <section className={styles.visorDer}>
                            <CardDetail2                                    // Visor derechode la pokedex
                                Vida = {Vida}
                                Ataque = {Ataque}
                                Defensa = {Defensa}
                                Velocidad = {Velocidad}
                                Altura = {Altura}
                                Peso = {Peso}
                                Tipo = {Tipo}             
                            />
                        </section>
                        <button className={styles.button} onClick={back}>Volver</button>
                    </div>
                : (
                    <p className={styles.loading}>LOADING...</p>            // Mientras no estén todos los datos, aparecerá el mensaje de Loading...
                )
            )
            }
        </div>
    )
}