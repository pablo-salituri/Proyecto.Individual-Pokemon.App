import React from "react";
import { Link } from "react-router-dom";
import styles from './HomeCards.module.css'



export default function HomeCards({ID, Nombre, Imagen, Tipo}) {
    return (
        <div className={styles.cards}>
            <Link to={`/detailPage/${ID}`}>
                <h2 className={styles.cardName}>{Nombre}</h2>
                <img className={styles.cardImg} src={Imagen} alt={Nombre} />
                <h5>{Tipo ? Tipo.join(', ') : null}</h5>
            </Link>
        </div>
    )
}