const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonsRoutes = require("./pokemonsRoutes")
const typesRouters = require("./typesRoutes") 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// * Todas las rutas llegan con 'http://localhost:3001'                

router.use("/pokemons" , pokemonsRoutes)
router.use("/types" , typesRouters )


module.exports = router;
