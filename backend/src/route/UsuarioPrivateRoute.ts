//maneja el ruteo
import { Router } from 'express';
import usuarioPrivateController from '../controller/UsuarioControllerPrivate';
class UsuarioPrivateRoute {
    //variable tipo Router
    public rutaApi: Router;
    constructor() {
        //se inicia la variable
        this.rutaApi = Router();
        this.configRouter();
    }
    public configRouter(): void {
        this.rutaApi.get('/todos', usuarioPrivateController.consulta);

        this.rutaApi.get( '/contxperfil/:codPerfil', usuarioPrivateController.cantidadEnPerfil );

        this.rutaApi.delete( '/eliminar/:codigo', usuarioPrivateController.eliminar );

        this.rutaApi.put( '/actualizar/:codigo', usuarioPrivateController.actualizar );

        this.rutaApi.get('/uno/:codigo', usuarioPrivateController.consultaUsuario );
        
        this.rutaApi.post('/crear', usuarioPrivateController.crear);
    }
}
const usuarioPrivateRoute = new UsuarioPrivateRoute();
// se exporta la propiedad par que llame todos los endpoint
export default usuarioPrivateRoute.rutaApi;
