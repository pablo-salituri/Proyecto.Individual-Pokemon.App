const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getPokemons} = require('../controllers/pokemon.getPokemons.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// * Todas las rutas llegan con 'http://localhost:3001'

router.get('/pokemon', async (req, res) => {
        const respuesta = await getPokemons();
        if (!respuesta.error)
        return res.status(200).json(respuesta)    
        return res.status(503).json(respuesta)    
})

module.exports = router;
