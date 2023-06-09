import React from "react";
import { useEffect } from "react";
import styles from './SobreMi.module.css'
import yo from './yo.jpg'


export default function SobreMi() {

    useEffect(() => {       
        document.body.style.background = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bbf58a6-1e85-4cfe-83fd-02df6f482b45/de8nlib-6bed7b3d-3d7e-4763-bb60-18f5ee0127fd.png/v1/fill/w_1024,h_652,q_80,strp/background_prairie_pokemon_screencapture_by_nemotrex_de8nlib-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUyIiwicGF0aCI6IlwvZlwvNWJiZjU4YTYtMWU4NS00Y2ZlLTgzZmQtMDJkZjZmNDgyYjQ1XC9kZThubGliLTZiZWQ3YjNkLTNkN2UtNDc2My1iYjYwLTE4ZjVlZTAxMjdmZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZVgNGi61AOkC068E-wphWmAUW8amj0MiJySqDcMCVh8') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    },[]);

    return(
        <div className={styles.container}>
            <div className={styles.div}>
                <img className={styles.imagen} src={yo} alt="yo" />
                <p className={styles.texto}>Mi nombre es Pablo Salitui, tengo 33 años, y soy de Tandil, Argentina.</p>
                <p className={styles.texto}>Soy Técnico en Informática e Ingeniero Civil, y futuro Full Stack Developer; lo que da cuenta de mi atracción hacia la lógica y la búsqueda permanente de soluciones a problemas complejos. </p>
                <p className={styles.texto}>Descubrí Henry a partir de publicidad en las redes; y de un amigo, quien también me recomendó la academia, anticipándome que lo único que lamentaría sería de no haberlo hecho antes.</p>
                <p className={styles.texto}>Disfruto mucho programar, y sobre todo la libertad que brinda poder hacer mi trabajo desde cualquier sitio; lo que resulta ideal para alguien que ama viajar y conocer lugares nuevos todo el tiempo.</p>
            </div>
        </div>
    )
}