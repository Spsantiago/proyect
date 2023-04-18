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

    public configRouter():void {
        this.rutaApi.post('/iniciar', usuarioController.iniciar);
        this.rutaApi.post('/crear', usuarioController.crear);
    }
}
const usuarioRouter = new UsuarioRouter();
// se exporta la propiedad par que llame todos los endpoint
export default usuarioRouter.rutaApi;  