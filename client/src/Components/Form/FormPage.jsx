import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTypes, createPokemon ,getAllPokemons} from "../../Redux/actions";
import Preview from "../Preview/Preview";
import styles from './FormPage.module.css';
import validate from './Validate.js';          
import fondoNegro2 from './fondoNegro2.jpg'


export default function FormPage() {

    const dispatch = useDispatch();
    //const erroresReducer = useSelector(state => state.erroresBack);
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
        document.body.style.background = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bbf58a6-1e85-4cfe-83fd-02df6f482b45/de8nlib-6bed7b3d-3d7e-4763-bb60-18f5ee0127fd.png/v1/fill/w_1024,h_652,q_80,strp/background_prairie_pokemon_screencapture_by_nemotrex_de8nlib-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUyIiwicGF0aCI6IlwvZlwvNWJiZjU4YTYtMWU4NS00Y2ZlLTgzZmQtMDJkZjZmNDgyYjQ1XC9kZThubGliLTZiZWQ3YjNkLTNkN2UtNDc2My1iYjYwLTE4ZjVlZTAxMjdmZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZVgNGi61AOkC068E-wphWmAUW8amj0MiJySqDcMCVh8') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        dispatch(getTypes());
    },[dispatch])

    /* useEffect(() => {
        if (erroresReducer.length)
            window.alert(erroresReducer);
        if (erroresReducer === `FELICITACIONES!\nPokemon creado con éxito`)
            clearFields()
    }, [erroresReducer]); */


    function clearFields() {       
        setInput({
            Nombre: '',
            Imagen: '',
            Vida: '',
            Ataque: '',
            Defensa: '',
            Velocidad: '',
            Altura: '',
            Peso: '',
            Tipo: []
        });
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (const caja of checkboxes) 
            caja.checked = false
    }


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
                window.alert(`No se pueden escoger más de ${maxTypes} tipos`);      
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

    async function handleSubmit(event) {
        event.preventDefault();
        if (!Nombre || !Imagen || !Vida || !Ataque || !Defensa || !Tipo.length)
            return window.alert(`Faltan completar campos`);
        if (Object.keys(errors).length !== 0) 
            return window.alert('Hay campos con errrores')
        else {
            console.log('Campos ok');           
            const message = await dispatch(createPokemon(input));
            window.alert(message);
            if (message === `FELICITACIONES!\nPokemon creado con éxito`) {
                clearFields();
                dispatch(getAllPokemons());
            }
        } 
    }                  

    return(       
        <div className={styles.divGlobal}>
            <img className={styles.fondoNegro} src={fondoNegro2} alt="fondoNegro2" />
            <div className={styles.divTypes}>
                <h3>Escoge al menos un tipo:</h3>
                <section className={styles.sectionTypes}>
                    {
                    types.map(tipo => (
                        <div key={tipo}>
                            <input type="checkbox" onClick={handleCheckBox} name={tipo}/> {tipo[0].toUpperCase()+tipo.slice(1)}
                        </div>
                    ))
                    }
                </section>                             
            </div>
            
            <div className={styles.divForm}>
                <form  className = {styles.Form} onSubmit={handleSubmit}>
                    <div className={styles.divInputs}>
                        <section className={styles.sectionInputs}>

                            <section className={styles.sectionInput}>
                                <label htmlFor="Nombre">Nombre*</label>
                                <input className={(errors.Nombre && styles.warning) || styles.inputs} placeholder='Ingrese un Nombre (3 a 10 letras)' 
                                    name='Nombre' 
                                    type="text" 
                                    value={input.Nombre} 
                                    autoComplete='off'
                                    onChange={handleInputChange}    
                                />
                                <p className={styles.danger}>{errors.Nombre}</p>
                            </section>
                            
                            <section className={styles.sectionInput}>
                                <label htmlFor="Imagen">Imagen*</label>
                                <input className={(errors.Imagen && styles.warning) || styles.inputs} placeholder='Ingrese una URL de imagen (.jpg ó .png)' 
                                    name = 'Imagen' 
                                    type="text"                     
                                    value={input.Imagen} 
                                    autoComplete='off'
                                    onChange={handleInputChange}   
                                />
                                <p className={styles.danger}>{errors.Imagen}</p>
                            </section>

                            <section className={styles.sectionInput}>
                                <label htmlFor="Vida">Vida*</label>
                                <input className={(errors.Vida && styles.warning) || styles.inputs} placeholder='Ingrese un número entre 1 y 120' 
                                    name = 'Vida' 
                                    type="Number" 
                                    value={input.Vida} 
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                                <p className={styles.danger}>{errors.Vida}</p>
                            </section>

                            <section className={styles.sectionInput}>
                                <label htmlFor="Ataque">Ataque*</label>
                                <input className={(errors.Ataque && styles.warning) || styles.inputs} placeholder='Ingrese un número entre 10 y 100' 
                                    name = 'Ataque' 
                                    type="Number" 
                                    value={input.Ataque} 
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                                <p className={styles.danger}>{errors.Ataque}</p>
                            </section>
                    
                        </section>
                        
                        <section className={styles.sectionInputs}>
                            <section className={styles.sectionInput}>
                                <label htmlFor="Defensa">Defensa*</label>
                                <input className={(errors.Defensa && styles.warning) || styles.inputs} placeholder='Ingrese un número entre 10 y 100' 
                                    name = 'Defensa' 
                                    type="Number" 
                                    value={input.Defensa} 
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                                <p className={styles.danger}>{errors.Defensa}</p>
                            </section>
                            
                            <section className={styles.sectionInput}>
                                <label htmlFor="Velocidad">Velocidad</label>
                                <input className={(errors.Velocidad && styles.warning) || styles.inputs} placeholder='Ingrese un número entre 0 y 100' 
                                    name = 'Velocidad' 
                                    type="Number" 
                                    value={input.Velocidad} 
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                                <p className={styles.danger}>{errors.Velocidad}</p>
                            </section>

                            <section className={styles.sectionInput}>
                                <label htmlFor="Altura">Altura</label>
                                <input className={(errors.Altura && styles.warning) || styles.inputs} placeholder='Ingrese un número entre 0 y 300' 
                                    name = 'Altura' 
                                    type="Number" 
                                    value={input.Altura} 
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                                <p className={styles.danger}>{errors.Altura}</p>
                            </section>
                            
                            <section className={styles.sectionInput}>
                                <label htmlFor="Peso">Peso</label>
                                <input className={(errors.Peso && styles.warning) || styles.inputs} placeholder='Ingrese un número entre 0 y 5000' 
                                    name = 'Peso' 
                                    type="Number" 
                                    value={input.Peso} 
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                                <p className={styles.danger}>{errors.Peso}</p>
                            </section>
                        </section>          
                    </div>
                    <section className={styles.footer}>
                        <button className={styles.button} type='submit'>CREAR POKEMON</button>
                        <h6 className={styles.h6}>* : Campos Obligatorios</h6>
                    </section>
                </form>
            </div>
            <div className={styles.divPreview}>
                <Preview Nombre={input.Nombre} Imagen={input.Imagen} Tipo={input.Tipo}/>
            </div>
        </div>
    )
}

