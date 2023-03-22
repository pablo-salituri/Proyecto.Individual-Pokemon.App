import React from 'react';
import { Link } from 'react-router-dom';
//import styles from './LandingPage.module.css'


export default function landingPage() {
    return(
        <div/*  className = {styles.fondoLanding} */>
            <h1>Esta es la Landing Page</h1>
            <Link to='/Home'>
                <button>INGRESAR</button>
            </Link>
        </div>
    )
}