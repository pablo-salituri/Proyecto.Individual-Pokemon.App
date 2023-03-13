const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAndSavePokemons} = require('../controllers/pokemon.getPokemons.js');
const {getPokemonById} = require('../controllers/pokemon.getById.js')

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

/* router.get('/pokemons/:idPokemon', async (req, res) => {
        const {idPokemon} = req.params; */
        /* if (!id)
                return res.status(400).json({message: "El Id solicitado no existe"}); */
        //const respuesta = await getPokemonById(id);     //! ver problema await
        /* if (!respuesta.error)
        return res.status(200).json(respuesta)
        return res.status(503).json(respuesta) */
//})

module.exports = router;
