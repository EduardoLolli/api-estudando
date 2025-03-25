const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const usuarioController = new UsuarioController;

const router = Router();

router.get('/usuarios', (req, res) => usuarioController.getAll(req, res));
router.put('/usuarios/:id', (req, res) => usuarioController.updateValue(req, res));
// router.post('/usuarios', (req, res) => usuarioController.getAll(req, res));
// router.path('/usuarios', (req, res) => usuarioController.getAll(req, res));
// router.delete('/usuarios', (req, res) => usuarioController.getAll(req, res));

module.exports = router;
