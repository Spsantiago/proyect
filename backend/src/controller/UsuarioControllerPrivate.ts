import { Request, Response } from 'express';
import UsuarioPrivateDao from '../dao/UsuarioPrivateDao';

class UsuarioPrivateController extends UsuarioPrivateDao {
    public crear(req: Request, res: Response) {
        const correo={correoUsuario:req.body.correoUsuario}
        UsuarioPrivateController.crearUsuario(correo,req.body,res);
    }
    //controlador cantidad en Perfil
    public eliminar(req: Request, res: Response) {
        UsuarioPrivateController.eliminarUsuario(req.params.codigo,res);
    }   
    //controlador de actualizar 
    public actualizar(req: Request, res: Response) {
        UsuarioPrivateController.actualizarUsuario(req.params.codigo,req.body,res);
    }    //controlador de consulta 
    public consulta(req: Request, res: Response) {
        UsuarioPrivateController.obtenerUsuarios(res);
    }    
    public cantidadEnPerfil(req:Request, res: Response):void{
        UsuarioPrivateController.cantidadUsuarioEnPerfil(req.params.codPerfil,res)
    }

    public consultaUsuario(req:Request, res: Response):void{
        UsuarioPrivateController.obtenerUsuario(req.params.codigo, res)
    }
}

const usuarioPrivateController = new UsuarioPrivateController();

export default usuarioPrivateController;
    //controlador de eliminar 

