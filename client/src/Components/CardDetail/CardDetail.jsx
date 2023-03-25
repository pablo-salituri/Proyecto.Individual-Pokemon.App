import React from "react";
import styles from './CardDetail.module.css'

    
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