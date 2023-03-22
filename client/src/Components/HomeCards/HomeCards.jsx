import React from "react";
import { Link } from "react-router-dom";



export default function HomeCards({ID, Nombre, Imagen, Tipo}) {
    return (
        <div>
            <Link to={`/detailPage/${ID}`}>
                <h2>{Nombre}</h2>
                <img src={Imagen} alt={Nombre} />
                <h2>Tipo: {Tipo ? Tipo.join(', ') : null}</h2>
            </Link>
        </div>
    )
}