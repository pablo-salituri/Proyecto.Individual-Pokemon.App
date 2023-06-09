import React from "react";
import { Link } from "react-router-dom";
import styles from './HomeCards.module.css'


export default function HomeCards({ID, Nombre, Imagen, Tipo}) {  
    return (
        <div className={styles.borders}>
            <div className={styles.cards}>
                <Link to={`/detailPage/${ID}`} className={styles.cardLink}>
                    <h2 className={styles.cardName}>{Nombre}</h2>
                    <img className={styles.cardImg} src={Imagen} alt={Nombre} />
                    <div className={styles.cardTipos}>
                        <section>
                            <h3 className={styles.cardType}>Tipos</h3>
                        </section>
                        <section className={styles.types} style={{'--num-elements': Tipo.filter(tipo => tipo).length}}>     {/* //Evalúa qué cantidad de tipos hay, para dividir el espacio en partes iguales */}
                            {Tipo.map((tipo, index) => {
                                return tipo ? <h4 className={styles.cardType} key={index}>{tipo}</h4> : null;
                            })}
                        </section>
                    </div>
                </Link>
            </div>
        </div>
    )
}