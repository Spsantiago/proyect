import { Request, Response } from 'express';
import UsuarioDao from '../dao/UsuarioDao';

class UsuarioController extends UsuarioDao {

    //controlador de Inicio Sesion
    public iniciar(req:Request, res: Response):void{
        UsuarioController.iniciarSesion(req.body,res)
    }

    //controlador de crear 
    public crear(req: Request, res: Response) {
        const correo={correoUsuario:req.body.correoUsuario}
        UsuarioController.crearUsuario(correo,req.body,res);
    }

}

const usuarioController = new UsuarioController();

export default usuarioController;
