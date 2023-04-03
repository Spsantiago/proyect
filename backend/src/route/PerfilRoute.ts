//maneja el ruteo
import { Router } from 'express';
import perfilController from '../controller/PerfilController';

class PerfilRouter {
    //variable tipo Router
    public rutaApi: Router;
    constructor() {
        //se inicia la variable
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter() {
        this.rutaApi.get('/listado', perfilController.consulta);
        this.rutaApi.post('/crear', perfilController.crear);
        this.rutaApi.delete('/eliminar/:codigo', perfilController.eliminar);
        this.rutaApi.put('/actualizar/:codigo', perfilController.actualizar);
    }
}
const perfilRouter = new PerfilRouter();
// se exporta la propiedad par que llame todos los endpoint
export default perfilRouter.rutaApi;
