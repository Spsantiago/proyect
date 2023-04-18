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
        parametros.nombreImagenUsuario = nom.substring( nom.lastIndexOf('\\') + 1 );
        //verificaion si el usuario existe
        const existe = await UsuarioSchema.findOne(correo).exec();
        if (existe) {
            res.status(400).json({ respuesta: 'El Correo ya existe...' });
        } else {
            //cifrado de la contraseña
            parametros.passwordUsuario = cifrado.hashSync( parametros.passwordUsuario, 10 );
            //se crea el usuario si no existe
            const objUsuario = new UsuarioSchema(parametros);
            objUsuario
                .save()
                .then((miObjeto) => { res.status(400).json({ codUsuario: miObjeto._id, }); })
                .catch(() => { res.status(200).json({ respuesta: 'NO se puede crear el Usuario', }); });
        }
    }

     //cantidad de usurios en un perfil
     protected static async cantidadUsuarioEnPerfil(
        identificadorPerfil: any,
        res: Response
    ): Promise<any> {
        if (Types.ObjectId.isValid(identificadorPerfil)) {
            const llave = { _id: identificadorPerfil };
            const cantidad = await UsuarioSchema.countDocuments({
                codPerfil: llave,
            });
            res.status(200).json({ respuesta: cantidad });
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

    protected static async obtenerUsuariosPerfil(
        identificador: any,
        res: Response
    ): Promise<any> {
        if (Types.ObjectId.isValid(identificador)) {
            const llave = { _id: identificador };
            UsuarioSchema.find({ codPerfil: llave })
                .sort({ _id: -1 })
                .populate({ path: 'codPerfil', select: 'nombrePerfil' })
                .exec()
                .then((objeto) => {
                    res.status(200).json(objeto);
                })
                .catch((miError) => {
                    console.log(miError);
                    res.status(400).json({ respuesta: 'Error en la consulta' });
                });
        } else {
            res.status(400).json({ respuesta: 'Identificador  incorrecto ' });
        }
    }

    // sacar los usuarios de la base y pasarselos al cliente
    protected static async consultarUsuario(res: Response): Promise<any> {
        //se hace la consulta
        const datos = await UsuarioSchema.find().sort({ _id: -1 });
        //entrega la consulta
        res.status(200).json(datos);
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
            //se elimina el usuario
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
}
export default UsuarioPrivateDao