import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getAllPokemons, getTypes} from '../../Redux/actions';
import styles from './LandingPage.module.css'


export default function LandingPage() {                    

    const dispatch = useDispatch()

    useEffect(() => {
        document.body.style.background = "url('https://images4.alphacoders.com/115/1159692.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        dispatch(getAllPokemons());
        dispatch(getTypes());
    },[dispatch])

    return(
        <div className={styles.div}>
            <Link to='/Home'>
                <button  className={styles.button}></button>
            </Link>
        </div>
    )
}