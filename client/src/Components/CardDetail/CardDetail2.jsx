import React from "react";
import styles from './CardDetail.module.css'

    
export default function CardDetail2({Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo}) {
    return(        
        <div className={styles.detailTwoDiv}>
            <div className={styles.detailTwoDivDatos}>
                <section>
                    <h2 className={styles.detailTwoH2}>Vida: {Vida}</h2>
                    <h2 className={styles.detailTwoH2}>Ataque: {Ataque}</h2>
                    <h2 className={styles.detailTwoH2}>Defensa: {Defensa}</h2>
                </section>
                <section>
                    {Velocidad ? <h2 className={styles.detailTwoH2}>Velocidad: {Velocidad}</h2> : null}
                    {Altura ? <h2 className={styles.detailTwoH2}>Altura: {Altura}</h2> : null}
                    {Peso ? <h2 className={styles.detailTwoH2}>Peso: {Peso}</h2> : null}
                </section>
            </div>
            <h2>Tipo: {Tipo ? Tipo.join(', ') : null}</h2>
        </div>
    )
}