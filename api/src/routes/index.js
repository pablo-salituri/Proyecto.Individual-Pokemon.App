const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getPokemons} = require('../controllers/pokemon.controller.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// * Todas las rutas llegan con 'http://localhost:3001'

router.get('/pokemon', getPokemons)

module.exports = router;
