const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getAllPokemons} = require('../controllers/Pokemon/getAllPokemons.js');
const {getPokemonById} = require('../controllers/Pokemon/getPokemonById.js');
const {getPokemonByName} = require('../controllers/Pokemon/getPokemonByName.js');
const {postPokemons} = require('../controllers/Pokemon/postPokemons.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// * Todas las rutas llegan con 'http://localhost:3001/pokemons'                

router.get('/', async (req, res) => {
        const respuesta = await getAllPokemons();
        if (!respuesta.error)
        return res.status(200).json(respuesta)    
        return res.status(503).json(respuesta)    
})


router.get(`/name`, async(req, res) => {
        const name = req.query.name.toLowerCase();
        //console.log(name);
        if (!name)
                return res.status(400).json({message: "No se ingresó un nombre válido"}); 
        const respuesta = await getPokemonByName(name);
        if (!respuesta.error)
        return res.status(200).json(respuesta)
        return res.status(503).json(respuesta)
})


router.get('/:idPokemon', async (req, res) => {
        const {idPokemon} = req.params;
        if (!idPokemon)
                return res.status(400).json({message: "No se ingresó un Id válido"});
        const respuesta = await getPokemonById(idPokemon);
        if (!respuesta.error)
        return res.status(200).json(respuesta)
        return res.status(503).json(respuesta)
})


router.post('/', async(req, res) => {
        const {Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo} = req.body;         
        if (!Nombre || !Imagen || !Vida || !Ataque || !Defensa)
                return res.status(400).json({message: "Faltan ingresar datos"})
        //else return res.status(200).json({message: "todo bien"})
        const respuesta = await postPokemons(Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo)  
        if (!respuesta.error)
        return res.status(200).json(respuesta)  
        return res.status(503).json(respuesta)
})


module.exports = router;
