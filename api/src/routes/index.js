const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAndSavePokemons} = require('../controllers/Pokemon/pokemon.getPokemons.js');
const {getPokemonById} = require('../controllers/Pokemon/pokemon.getById.js');
const {getPokemonByName} = require('../controllers/Pokemon/pokemon.getPokemonByName.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// * Todas las rutas llegan con 'http://localhost:3001'

router.get('/pokemon', async (req, res) => {
        const respuesta = await getAndSavePokemons();
        if (!respuesta.error)
        return res.status(200).json(respuesta)    
        return res.status(503).json(respuesta)    
})

router.get('/pokemons/:idPokemon', async (req, res) => {
        const {idPokemon} = req.params;
        if (!idPokemon)
                return res.status(400).json({message: "No se ingresó un Id válido"});
        const respuesta = await getPokemonById(idPokemon);
        if (!respuesta.error)
        return res.status(200).json(respuesta)
        return res.status(503).json(respuesta)
})

router.get(`/pokemons`, async(req, res) => {
        const name = req.query.name.toLowerCase();
        //console.log(name);
        if (!name)
                return res.status(400).json({message: "No se ingresó un nombre válido"}); 
        const respuesta = await getPokemonByName(name);
        if (!respuesta.error)
        return res.status(200).json(respuesta)
        return res.status(503).json(respuesta)
})

module.exports = router;
