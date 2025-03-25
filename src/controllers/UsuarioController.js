const Controller = require('./Controller.js');
const UsuarioServices = require('../services/UsuarioServices.js');


const usuarioService = new UsuarioServices();

class UsuarioController extends Controller {
  constructor() {
    super(usuarioService);
  }
}

module.exports = UsuarioController;