import { Request, Response } from 'express';
import PerfilDao from '../dao/PerfilDao';

class PerfilController extends PerfilDao {
    //controlador de consulta 
    public consulta(req: Request, res: Response) {
        PerfilController.consultarPerfil(res);
    }
    //controlador de crear 
    public crear(req: Request, res: Response) {
        PerfilController.crearPerfil(req.body,res);
    }
    //controlador de eliminar 
    public eliminar(req: Request, res: Response) {
        PerfilController.eliminarPerfil(req.params.codigo,res);
    }   
    //controlador de actualizar 
    public actualizar(req: Request, res: Response) {
        PerfilController.actualizarPerfil(req.params.codigo,req.body,res);
    }
}

const perfilController = new PerfilController();

export default perfilController;
