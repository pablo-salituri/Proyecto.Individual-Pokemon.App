import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTypes } from "../../Redux/actions";
import styles from './FormPage.module.css'


export default function FormPage() {

    const dispatch = useDispatch();
    const types = useSelector(state => state.tipos);
    const maxTypes = 3;
    const [input, setInput] = useState({
        Nombre: '',
        Imagen: '',
        Vida: '',
        Ataque: '',
        Defensa: '',
        Velocidad: '',
        Altura: '',
        Peso: '',
        Tipo: []
    })

    useEffect(() => {
        dispatch(getTypes());
    },[dispatch])

    function handleInputChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    function handleCheckBox(event) {        //!BREAKPOINT NUM 3
        if (event.target.checked === true) {                        
            if (input.Tipo.length < maxTypes){
                setInput({
                    ...input,
                    Tipo: input.Tipo.concat([event.target.name])
                })
            }
            else {
                console.log(`No se pueden escoger más de ${maxTypes} tipos`);       //Todo: Avisar cuando hay mas de 3 tipos
                event.target.checked = false
            }
        }
        else {
            setInput({
                ...input,
                Tipo: input.Tipo.filter(tipo => tipo !== event.target.name)
            })
        }
    }

    return(
        <div>
            <h1>Este es el Form Page</h1>
            <form  className = {styles.Form}/* onSubmit={handleSubmit} */>
                <label htmlFor="Nombre">Nombre</label>
                <input placeholder='Nombre' 
                    name='Nombre' 
                    type="text" 
                    value={input.Nombre} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.username && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.username}</p> */}
                

                <label htmlFor="Imagen">Imagen</label>
                <input placeholder='Imagen' 
                    name = 'Imagen' 
                    type="url"                     
                    value={input.Imagen} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}


                <label htmlFor="Vida">Vida</label>
                <input placeholder='Vida' 
                    name = 'Vida' 
                    type="Number" 
                    min='1'
                    max='99'
                    value={input.Vida} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}


                <label htmlFor="Ataque">Ataque</label>
                <input placeholder='Ataque' 
                    name = 'Ataque' 
                    type="Number" 
                    min='1'
                    max='99'
                    value={input.Ataque} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}


                <label htmlFor="Defensa">Defensa</label>
                <input placeholder='Defensa' 
                    name = 'Defensa' 
                    type="Number" 
                    min='1'
                    max='99'
                    value={input.Defensa} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}


                <label htmlFor="Velocidad">Velocidad</label>
                <input placeholder='Velocidad' 
                    name = 'Velocidad' 
                    type="Number" 
                    min='1'
                    max='99'
                    value={input.Velocidad} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}


                <label htmlFor="Altura">Altura</label>
                <input placeholder='Altura' 
                    name = 'Altura' 
                    type="Number" 
                    min='5'
                    value={input.Altura} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}


                <label htmlFor="Peso">Peso</label>
                <input placeholder='Peso' 
                    name = 'Peso' 
                    type="Number" 
                    min='50'
                    value={input.Peso} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}

                <section>
                    {
                    types.map(tipo => (
                        <div key={tipo}>
                            <input type="checkbox" onClick={handleCheckBox} name={tipo}/> {tipo[0].toUpperCase()+tipo.slice(1)}
                        </div>
                    ))
                    }
                </section>
                <button /* className={styles.button} */ type='submit'>CREAR POKEMON</button>
            </form>
        </div>
    )
}


/* Nombre.
Imagen.
Vida.
Ataque.
Defensa.
Velocidad (si tiene).
Altura (si tiene).
Peso (si tiene).
Posibilidad de seleccionar/agregar varios tipos en simultáneo.
Botón para crear el nuevo pokemon. */