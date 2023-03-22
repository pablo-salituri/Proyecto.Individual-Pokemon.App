import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './LandingPage.module.css'


export default function LandingPage() {     

    useEffect(() => {
        document.body.style.background = "url('https://images4.alphacoders.com/115/1159692.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    },[])

    return(
        <div className={styles.div}>
            <Link to='/Home'>
                <button  className={styles.button}></button>
            </Link>
        </div>
    )
}