export default function validate(currentInput) {
    const {Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso/* , Tipo */} = currentInput;
    const regexNombre = /^[a-zA-Z]+$/;
    const regexUrl = /^(http|https):\/\/[a-z0-9-\.]+\.[a-z]{2,}\/.+\.jpg(\?\d+)?$/i;

    var errors = {}      

    switch(true) {
        case (Nombre.length && (Nombre.length < 3 || Nombre.length > 10)):
            errors.Nombre = 'El nombre debe contener entre 3 y 10 letras';
            break;
        case (Nombre.length && !regexNombre.test(Nombre)):
            errors.Nombre = 'El nombre solo debe contener letras';
            break;
        default:
            break                       
    }    

    if (Imagen.length && (!regexUrl.test(Imagen)))
        errors.Imagen = 'La URL debe contener un archivo .jpg o .png';
        
    if (Vida.length && (Vida < 1 || Vida > 120))
        errors.Vida = 'Debe estar comprendido entre 1 y 120';
        
    if (Ataque.length && (Ataque < 10 || Ataque > 100))
        errors.Ataque = 'Debe estar comprendido entre 1 y 100';
        
    if (Defensa.length && (Defensa < 10 || Defensa > 100))
        errors.Defensa = 'Debe estar comprendido entre 1 y 100';
        
    if (Velocidad > 100)
        errors.Velocidad = 'No puede ser mayor a 100';
        
    if (Altura > 200)
        errors.Altura = 'No puede ser mayor a 200';
        
    if (Peso > 5000)
        errors.Peso = 'No puede ser mayor a 5000';
        
    /* case (!Tipo):
        errors.Tipo = 'El pokemon debe tener al menos 1 tipo';
        break; */
        
    
    return errors
}
