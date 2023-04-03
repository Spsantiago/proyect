//maneja el ruteo
import { Router } from 'express';
import usuarioController from '../controller/UsuarioController';

class UsuarioRouter {
    //variable tipo Router
    public rutaApi: Router;
    constructor() {
        //se inicia la variable
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter() {
        this.rutaApi.get('/listado', usuarioController.consulta);
        this.rutaApi.post('/crear', usuarioController.crear);
        this.rutaApi.delete('/eliminar/:codigo', usuarioController.eliminar);
        this.rutaApi.put('/actualizar/:codigo', usuarioController.actualizar);
    }
}
const usuarioRouter = new UsuarioRouter();
// se exporta la propiedad par que llame todos los endpoint
export default usuarioRouter.rutaApi;