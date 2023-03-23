import React from "react";
import styles from './NavBar.module.css';
import crea from './crea.png';
import nosotros from './nosotros.png'
import { Link } from "react-router-dom";


export default function NavBar() {
    return(
        <div className = {styles.div}>
            <Link to='/FormPage' className={styles.link}>
                <img className={styles.imglinks} src={crea} alt="Crear_Pokemon" />
            </Link>
            <img className={styles.imglinks} src={nosotros} alt="Sobre_Nosotros" />
        </div>
    )
}