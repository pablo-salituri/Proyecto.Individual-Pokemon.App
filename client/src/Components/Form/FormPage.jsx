import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTypes,createPokemon } from "../../Redux/actions";
import styles from './FormPage.module.css';
import validate from './Validate.js'


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

    const {Nombre, Imagen, Vida, Ataque, Defensa, Tipo} = input;

    const [errors, setErrors] = useState({
        Nombre: '',
        Imagen: '',
        Vida: '',
        Ataque: '',
        Defensa: '',
        Velocidad: '',
        Altura: '',
        Peso: '',
        Tipo: ''
    })

    useEffect(() => {
        dispatch(getTypes());
    },[dispatch])


    function handleInputChange(event) {
        setInput({...input, [event.target.name]: event.target.value})
        setErrors(validate({...input, [event.target.name]: event.target.value}))
    }


    function handleCheckBox(event) {       
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

    function handleSubmit(event) {
        event.preventDefault();
        if (!Nombre || !Imagen || !Vida || !Ataque || !Defensa || !Tipo.length)
            return window.alert('Faltan completar campos');
        if (Object.keys(errors).length !== 0) 
            console.log('Hay campos con errrores')
        else {
            console.log('Todo bien');
            dispatch(createPokemon(input))
        } 
    }


    return(
        <div>
            <h1>Este es el Form Page</h1>
            <h6>* : Campos Obligatorios</h6>
            <form  className = {styles.Form} onSubmit={handleSubmit}>
                <label htmlFor="Nombre">Nombre*</label>
                <input placeholder='Nombre' 
                    name='Nombre' 
                    type="text" 
                    value={input.Nombre} 
                    autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.username && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.username}</p> */}
                

                <label htmlFor="Imagen">Imagen*</label>
                <input placeholder='Imagen' 
                    name = 'Imagen' 
                    type="text"                     
                    value={input.Imagen} 
                    autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}


                <label htmlFor="Vida">Vida*</label>
                <input placeholder='Vida' 
                    name = 'Vida' 
                    type="Number" 
                    value={input.Vida} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}


                <label htmlFor="Ataque">Ataque*</label>
                <input placeholder='Ataque' 
                    name = 'Ataque' 
                    type="Number" 
                    value={input.Ataque} 
                    //autoComplete='off'
                    onChange={handleInputChange}
                    //className = {(errors.password && styles.warning) || styles.input}    
                />
                {/* <p className={styles.danger}>{errors.password}</p> */}


                <label htmlFor="Defensa">Defensa*</label>
                <input placeholder='Defensa' 
                    name = 'Defensa' 
                    type="Number" 
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