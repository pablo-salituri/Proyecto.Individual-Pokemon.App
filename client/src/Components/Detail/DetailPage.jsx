import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPokemonDetail, getPokemonByName, clearDetail} from '../../Redux/actions';
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

    //console.log('location ', location);
    //console.log('params ', useParams());

    //* Traigo los datos del componente global, independientemente de si la solicitud se hizo por query o params
    const {ID, Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo} = useSelector(state => state.pokemon);
    const erroresReducer = useSelector(state => state.erroresBack);

    function back() {
        navigate(-1)
    }
    
    //*Si el componente posee location.search al ejecutarse, significa que el pedido se hizo por query. Caso contrario por params
    useEffect(() => {
        if (!location.search)
            dispatch(getPokemonDetail(detailId))
        else
            dispatch(getPokemonByName(nombreQuery))

        return () => {
            dispatch(clearDetail())
            console.log('Componente Desmontado')         
        }
    },[nombreQuery, location.search, detailId, dispatch])             
                                                            
    return (                                                //Todo: Ver que al volver del detalle se renderice la ultima pagina visitada
        <div className={styles.contenedor}>                                                
            <img className={styles.pokedex} src={pokedex} alt="pokedex" />          
            {
                erroresReducer.length ?
                (
                    <div>
                    <section className={styles.visorIzq}>
                        {console.log(Nombre)}
                        <CardDetail
                            Id = '?'
                            Nombre = '?'
                            Imagen = {mewtwo}
                        />
                    </section>
                    <section className={styles.visorDer}>
                        <CardDetail2
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
                </div> 
            ) : (
                <div>
                    <section className={styles.visorIzq}>
                        {console.log(Nombre)}
                        <CardDetail
                            Id = {ID}
                            Nombre = {Nombre}
                            Imagen = {Imagen}
                        />
                    </section>
                    <section className={styles.visorDer}>
                        <CardDetail2
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
            )
            }
        </div>
    )
}