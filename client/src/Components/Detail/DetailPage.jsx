import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPokemonDetail, getPokemonByName, clearDetail} from '../../Redux/actions';
import { useParams, useNavigate, useLocation } from "react-router-dom";


export default function DetailPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {detailId} = useParams();
    const location = useLocation();
    const nombreQuery = location.search.split('=')[1];

    //console.log('location ', location);
    //console.log('params ', useParams());

    //* Traigo los datos del componente global, independientemente de si la solicitud se hizo por query o params
    const {ID, Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo} = useSelector(state => state.pokemon)

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
    },[nombreQuery, location.search, detailId, dispatch])                                 //ToDo: Solucionar el Parpadeo de paginados
                                                            
    return (                                                //Todo: Ver que al volver del detalle se renderice la ultima pagina visitada
        <div>
            <h1>Este es el Detail Page</h1>
            <h2>Id: {ID}</h2>
            <h2>Nombre: {Nombre}</h2>
            <img src={Imagen} alt={Nombre} />
            <h2>Vida: {Vida}</h2>
            <h2>Ataque: {Ataque}</h2>
            <h2>Defensa: {Defensa}</h2>
            {Velocidad ? <h2>Velocidad: {Velocidad}</h2> : null}
            {Altura ? <h2>Altura: {Altura}</h2> : null}
            {Peso ? <h2>Peso: {Peso}</h2> : null}
            <h2>Tipo: {Tipo ? Tipo.join(', ') : null}</h2>

            <button onClick={back}>Volver</button>
        </div>
    )
}