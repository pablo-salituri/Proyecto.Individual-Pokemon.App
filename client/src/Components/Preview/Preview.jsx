import React from "react";
import styles from '../HomeCards/HomeCards.module.css'


export default function Preview({Nombre, Imagen, Tipo}) {
    return (
        <div className={styles.borders}>
            <div className={styles.cards}>
                <h2 className={styles.cardName}>{Nombre}</h2>
                <img className={styles.cardImg} src={Imagen} alt='' />
                <div className={styles.cardTipos}>
                    <section>
                        <h3 className={styles.cardType}>Tipos</h3>
                    </section>
                    <section className={styles.types} style={{'--num-elements': Tipo.filter(tipo => tipo).length}}>
                        {Tipo.map((tipo, index) => {
                            return tipo ? <h4 className={styles.cardType} key={index}>{tipo}</h4> : null;
                        })}
                    </section>
                </div>
            </div>
        </div>
    )
}