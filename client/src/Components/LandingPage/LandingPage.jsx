import React from 'react';
import { Link } from 'react-router-dom';
import pokemon from './pokemon.png';
import touch from './touch.png'
import styles from './LandingPage.module.css'


export default function LandingPage() {                    

    return(                                        
        <div className={styles.container}>        
            <img className={styles.touchicon} src={touch} alt="touchIcon" />
            <img className={styles.logo} src={pokemon} alt="pokemonLogo" />
            <Link to='/Home'>
                <button  className={styles.button}></button>
            </Link>
        </div>
    )
}