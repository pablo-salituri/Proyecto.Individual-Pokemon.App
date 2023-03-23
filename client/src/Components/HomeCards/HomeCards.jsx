import React from "react";
import { Link } from "react-router-dom";
import styles from './HomeCards.module.css'



export default function HomeCards({ID, Nombre, Imagen, Tipo}) {     //!BREAKPOINT
    return (
        <div className={styles.cards}>
            <Link to={`/detailPage/${ID}`} className={styles.cardLink}>
                <h2 className={styles.cardName}>{Nombre}</h2>
                <img className={styles.cardImg} src={Imagen} alt={Nombre} />
                <div>
                    <section>
                        <h4>Tipos</h4>
                    </section>
                    <h5>{Tipo[0] ? Tipo[0] : null}</h5>
                    <h5>{Tipo[1] ? Tipo[1] : null}</h5>
                    <h5>{Tipo[2] ? Tipo[2] : null}</h5>
                </div>
            </Link>
        </div>
    )
}