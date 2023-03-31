import React from "react";
import styles from './NavBar.module.css';
import crea from './crea.png';
import inicio from './inicio.png'
import nosotros from './nosotros.png';
import { Link } from "react-router-dom";           
import { useLocation } from "react-router-dom";


export default function NavBar() {              
    const location = useLocation();             

    return(
        <div className = {styles.container}>
            <section className = {styles.section}>
                {
                    (location.pathname.includes('Home'))
                    ? (
                        <Link to='/LandingForm' className={styles.link}>
                            <img className={styles.imglinks} src={crea} alt="Crear_Pokemon" />
                        </Link>
                    ) : (
                        <Link to='/Home' className={styles.link}>
                            <img className={styles.imglinks} src={inicio} alt="inicio" />
                        </Link>
                    )
                }
            </section>
            <section className = {styles.section}>
                {
                    (location.pathname.includes('SobreMi'))
                    ? (
                        <Link to='/LandingForm' className={styles.link}>
                            <img className={styles.imglinks} src={crea} alt="Crear_Pokemon" />
                        </Link>
                    ) : (
                        <Link to='/SobreMi' className={styles.link}>
                            <img className={styles.imglinks} src={nosotros} alt="Sobre_Nosotros" />
                        </Link>
                    )
                }
            </section>    
        </div>
    )
}