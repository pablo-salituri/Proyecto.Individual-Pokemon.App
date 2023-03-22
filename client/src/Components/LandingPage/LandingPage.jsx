import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
//import styles from './LandingPage.module.css'


export default function LandingPage() {

    useEffect(() => {
        document.body.style.background = "url('https://images4.alphacoders.com/115/1159692.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    },[])

    return(
        <div/*  className = {styles.fondoLanding} */>
            <h1>Esta es la Landing Page</h1>
            <Link to='/Home'>
                <button>INGRESAR</button>
            </Link>
        </div>
    )
}