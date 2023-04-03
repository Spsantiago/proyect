import { Response } from 'express';
import UsuarioSechema from '../schema/UsuarioSchema';

class UsuarioDao {
    // sacar los usuarios de la base y pasarselos al cliente
    protected static async consultarUsuario(res: Response): Promise<any> {
        //se hace la consulta
        const datos = await UsuarioSechema.find().sort({ _id: -1 });
        //entrega la consulta
        res.status(200).json(datos);
    }

    protected static async crearUsuario(
        correo:any,
        parametros: any,
        res: Response
    ): Promise<any> {
        //verificaion si el usuario existe
        const existe = await UsuarioSechema.findOne( correo ).exec();
        if (existe) {
            res.status(400).json({ respuesta: 'El Correo ya existe...' });
        } else {
            //se crea el usuario si no existe
            const objUsuario = new UsuarioSechema(parametros);
            objUsuario
                .save()
                .then((miObjeto) => {
                    res.status(400).json({
                        respuesta: 'Usuario Creado',
                        codigo: miObjeto._id,
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'NO se puede crear el Usuario',
                    });
                });
        }
    }

    protected static async eliminarUsuario(
        identifiacador: any,
        res: Response
    ): Promise<any> {
        //verificaion si el usuario existe
        // const existe = await PerfilSechema.findById(identifiacador);
        const existe = await UsuarioSechema.findById(identifiacador).exec();
        if (existe) {
            //se elimina el usuario
            UsuarioSechema.findByIdAndDelete(identifiacador)
                .then((miObjeto:any) => {
                    res.status(200).json({
                        respuesta: 'Usuario eliminado',
                        eliminado: miObjeto,
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'NO se puede eliminar el Usuario',
                    });
                });
        } else {
            res.status(200).json({ respuesta: 'el Usuario no existe' });
        }
    }

    protected static async actualizarUsuario(
        identifiacador: any,
        parametro:any,
        res: Response
    ): Promise<any> {
        //verificaion si el usuario existe
        // const existe = await PerfilSechema.findById(identifiacador);
        const existe = await UsuarioSechema.findById(identifiacador).exec();
        if (existe) {
            //se elimina el usuario 
            UsuarioSechema.findByIdAndUpdate({_id:identifiacador},{$set:parametro})
                .then((miObjeto:any) => {
                    res.status(200).json({
                        respuesta: 'Usuario actualizado',
                        antes: miObjeto,despues:parametro
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'NO se puede actualizar el Usuario',
                    });
                });
        } else {
            res.status(200).json({ respuesta: 'el Usuario no existe' });
        }
    }
}
export default UsuarioDao;
