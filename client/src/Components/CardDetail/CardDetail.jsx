import React from "react";
import styles from './CardDetail.module.css'


// Es el detalle que va en el visor izquierdo de la Pokedex
export default function CardDetail({ID, Nombre, Imagen}) {
    return(           
        <div className={styles.detailOneDiv}>
            <section className={styles.detailOneSection}>
                <h2>{Nombre}</h2>
                <h2>Id: {ID}</h2>
            </section>
            <img className={styles.detailOneImg} src={Imagen} alt={Nombre} />
        </div>
    )
}