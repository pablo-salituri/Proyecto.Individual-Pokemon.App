const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getTypes} = require('../controllers/Type/getTypes.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// * Todas las rutas llegan con 'http://localhost:3001/types'                


router.get('/', async(req, res) => {
        const respuesta = await getTypes();
        if (!respuesta.error)
        return res.status(200).json(respuesta)
        return res.status(404).json(respuesta)
})

module.exports = router;
