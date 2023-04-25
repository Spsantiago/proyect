import { Types } from 'mongoose';
import { Response } from 'express';
import cifrado from 'bcryptjs';
import UsuarioSchema from '../schema/UsuarioSchema';

class UsuarioPrivateDao {
    protected static async crearUsuario(
        correo: any,
        parametros: any,
        res: Response
    ): Promise<any> {
        //validar si el Perfil existe
        const nom = parametros.nombreImagenUsuario;
        delete parametros._id;
        delete parametros.datosUsuario;
        parametros.nombreImagenUsuario = nom.substring(
            nom.lastIndexOf('\\') + 1
        );
        //verificaion si el usuario existe
        const existe = await UsuarioSchema.findOne(correo).exec();
        if (existe) {
            res.status(400).json({ respuesta: 'El Correo ya existe...' });
        } else {
            //cifrado de la contraseña
            parametros.passwordUsuario = cifrado.hashSync(
                parametros.passwordUsuario,
                10
            );
            //se crea el usuario si no existe
            const objUsuario = new UsuarioSchema(parametros);
            objUsuario
                .save()
                .then((miObjeto) => {
                    res.status(200).json({ id: miObjeto._id });
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
        const existe = await UsuarioSchema.findById(identifiacador).exec();
        if (existe) {
            //se elimina el usuario
            UsuarioSchema.findByIdAndDelete(identifiacador)
                .then((miObjeto: any) => {
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
        parametro: any,
        res: Response
    ): Promise<any> {
        //verificaion si el usuario existe
        // const existe = await PerfilSechema.findById(identifiacador);
        const existe = await UsuarioSchema.findById(identifiacador).exec();
        if (existe) {
            //se actualiza el usuario
            console.log(identifiacador)
            console.log(parametro)
            UsuarioSchema.findByIdAndUpdate(
                { _id: identifiacador },
                { $set: parametro }
            )
                .then((miObjeto: any) => {
                    res.status(200).json({
                        respuesta: 'Usuario actualizado',
                        antes: miObjeto,
                        despues: parametro,
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
    //cantidad de usurios en un perfil
    protected static async cantidadUsuarioEnPerfil(
        identificadorPerfil: any,
        res: Response
    ): Promise<any> {
        if (Types.ObjectId.isValid(identificadorPerfil)) {
            const llave = { _id: identificadorPerfil };
            const cantUsuarios = await UsuarioSchema.countDocuments({
                codPerfil: llave,
            });
            res.status(200).json({ respuesta: cantUsuarios });
        } else {
            res.status(400).json({ respuesta: 'Identificador Incorrecto ' });
        }
    }
    protected static async obtenerUsuarios(res: Response): Promise<any> {
        UsuarioSchema.find()
            .sort({ _id: 1 })
            .populate('codPerfil')
            .exec()
            .then((objeto) => {
                res.status(200).json(objeto);
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: 'Error en la consulta' });
            });
    }
    protected static async obtenerUsuario(
        identificador: any,
        res: Response
    ): Promise<any> {
        //se hace la consulta
        const jsonUsuario = { _id: identificador };
        const datos = await UsuarioSchema.findOne(jsonUsuario)
            .populate({ path: 'codPerfil' })
            .exec();
        //entrega la consulta
        if (datos) {
            res.status(200).json(datos);
        } else {
            res.status(400).json({
                respuesta: 'No hay un perfil con ese identifiicador',
            });
        }
    }
}
export default UsuarioPrivateDao;
