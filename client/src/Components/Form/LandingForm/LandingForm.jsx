import React from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import styles from './LandingForm.module.css';
import fondoNegro2 from '../Create/fondoNegro2.jpg'
import upload from './upload.png';
import Delete from './delete.png';
import edit from './edit.png'
//import { useDispatch } from "react-redux";


export default function LandingForm() {

    //const dispatch = useDispatch()

    useEffect(() => {
        document.body.style.background = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bbf58a6-1e85-4cfe-83fd-02df6f482b45/de8nlib-6bed7b3d-3d7e-4763-bb60-18f5ee0127fd.png/v1/fill/w_1024,h_652,q_80,strp/background_prairie_pokemon_screencapture_by_nemotrex_de8nlib-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUyIiwicGF0aCI6IlwvZlwvNWJiZjU4YTYtMWU4NS00Y2ZlLTgzZmQtMDJkZjZmNDgyYjQ1XC9kZThubGliLTZiZWQ3YjNkLTNkN2UtNDc2My1iYjYwLTE4ZjVlZTAxMjdmZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZVgNGi61AOkC068E-wphWmAUW8amj0MiJySqDcMCVh8') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    },[])


    return(
        <div className={styles.divGlobal}>
            <img className={styles.fondoNegro} src={fondoNegro2} alt="fondoNegro2" />
            <div className={styles.form}>
                <section className={styles.titulo}>
                    <h2>ESCOGE TU AVENTURA</h2>
                </section>
                
                <section className={styles.cards}>
                    <Link to='/FormPage'>
                        <section className={styles.uploadCard}>
                            <p>CREAR UN POKEMON</p>
                            <div className={styles.icono}> 
                                <img src={upload} alt="upload" />
                            </div>
                            <div className={styles.sombra}></div>
                        </section>
                    </Link>

                    <Link to='/Delete'>
                        <section className={styles.deleteCard}>
                            <p>ELIMINAR UN POKEMON</p>
                            <div className={styles.icono}> 
                                <img src={Delete} alt="delete" />
                            </div>
                            <div className={styles.sombra}></div>           
                        </section>
                    </Link>
                    
                    <Link>
                        <section className={styles.updateCard}>
                            <p>EDITAR UN POKEMON</p>
                            <div className={styles.icono}> 
                                <img src={edit} alt="edit" />
                            </div>
                            <div className={styles.sombra}></div>           
                        </section>
                    </Link>
                </section>
            </div>
        </div>
    )
}