const { Router} = require('express');
const { usuariosGet,    
    usuariosPut,
    usuariosPost,
    usuariosDelete } = require('../controllers/usuarios');

const router = Router();

 // Como no se tiene acceso a router, se debe usar router
router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;