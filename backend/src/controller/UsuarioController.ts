import { Request, Response } from 'express';
import UsuarioDao from '../dao/UsuarioDao';

class UsuarioController extends UsuarioDao {
    //controlador cantidad en Perfil
    public cantidadEnPerfil(req:Request, res: Response):void{
        UsuarioController.cantidadUsuarioEnPerfil(req.params.codPerfil,res)
    }

    //controlador de todos los perfiles 
    public consultaPerfil(req:Request, res: Response):void{
        UsuarioController.obtenerUsuariosPerfil(req.params.codPerfil,res)
    }

    //controlador de Inicio Sesion
    public iniciar(req:Request, res: Response):void{
        UsuarioController.iniciarSesion(req.body,res)
    }

    //controlador de consulta 
    public consulta(req: Request, res: Response) {
        UsuarioController.consultarUsuario(res);
    }
    //controlador de crear 
    public crear(req: Request, res: Response) {
        const correo={correoUsuario:req.body.correoUsuario}
        UsuarioController.crearUsuario(correo,req.body,res);
    }
    //controlador de eliminar 
    public eliminar(req: Request, res: Response) {
        UsuarioController.eliminarUsuario(req.params.codigo,res);
    }   
    //controlador de actualizar 
    public actualizar(req: Request, res: Response) {
        UsuarioController.actualizarUsuario(req.params.codigo,req.body,res);
    }
}

const usuarioController = new UsuarioController();

export default usuarioController;
