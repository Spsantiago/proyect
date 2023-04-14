import { Response } from 'express';
import UsuarioSechema from '../schema/UsuarioSchema';
import cifrado from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import PerfilSchema from '../schema/PerfilSchema';

class UsuarioDao {
    //metodo para iniciar Sesion
    protected static async iniciarSesion(
        parametros: any,
        res: Response
    ): Promise<any> {
        const miCorreo = parametros.correoUsuario;
        const miClave = parametros.passwordUsuario;
        UsuarioSechema.findOne({ correoUsuario: miCorreo })
            //trae el codigo del perfil
            .populate({ path: 'codPerfil', select: 'nombrePerfil' })
            .exec()
            .then((objeto) => {
                if (objeto) {
                    //compara la contraseña que viene del front con la que esta en el back
                    const passwordCorrecta = cifrado.compareSync(
                        miClave,
                        objeto.passwordUsuario
                    );
                    //devuelve un jsonWebtokwen
                    if (passwordCorrecta) {
                        const datosVisibles = {
                            codUsuario: objeto._id,
                            correo: miCorreo,
                            perfil: objeto.codPerfil.nombrePerfil,
                        };
                        const llavePrivada = String(process.env.CLAVE);
                        const miToken = jwt.sign(datosVisibles, llavePrivada, {
                            expiresIn: 86400,
                        });
                        res.status(200).json({ token: miToken });
                    } else {
                        res.status(400).json({
                            respuesta: 'Credenciales Incorrectas',
                        });
                    }
                } else {
                    res.status(400).json({
                        respuesta: 'Credenciales Incorrectas',
                    });
                }
            });
    }

    //cantidad de usurios en un perfil
    protected static async cantidadUsuarioEnPerfil(
        identificadorPerfil: any,
        res: Response
    ): Promise<any> {
        if (Types.ObjectId.isValid(identificadorPerfil)) {
            const llave = { _id: identificadorPerfil };
            const cantidad = await UsuarioSechema.countDocuments({
                codPerfil: llave,
            });
            res.status(200).json({ respuesta: cantidad });
        } else {
            res.status(400).json({ respuesta: 'Identificador Incorrecto ' });
        }
    }

    protected static async obtenerUsuarios(res: Response): Promise<any> {
        UsuarioSechema.find()
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
            UsuarioSechema.find({ codPerfil: llave })
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
        const datos = await UsuarioSechema.find().sort({ _id: -1 });
        //entrega la consulta
        res.status(200).json(datos);
    }

    protected static async crearUsuario(
        correo: any,
        parametros: any,
        res: Response
    ): Promise<any> {
        //validar si el Perfil existe
        const nombrPerfilPorDefecto= String(process.env.USUARIO_EXTERNO)
        const jsonPerfil ={nombrePerfil:nombrPerfilPorDefecto}
        const existePerfil = await PerfilSchema.findOne(jsonPerfil).exec()
        if (existePerfil) {
            parametros.codPerfil= existePerfil._id           
        } else {
            const objPerfil = new PerfilSchema(jsonPerfil)
            objPerfil.save()
            parametros.codPerfil = objPerfil._id
        }
        
        //verificaion si el usuario existe
        const existe = await UsuarioSechema.findOne(correo).exec();
        if (existe) {
            res.status(400).json({ respuesta: 'El Correo ya existe...' });
        } else {
            //cifrado de la contraseña
            parametros.passwordUsuario = cifrado.hashSync(
                parametros.passwordUsuario,
                10
            );
            //se crea el usuario si no existe
            const objUsuario = new UsuarioSechema(parametros);
            objUsuario
                .save()
                .then((miObjeto) => {
                    const misDatos = {
                        codUsuario: miObjeto._id,
                        correo: parametros.correoUsuario,
                        perfil:nombrPerfilPorDefecto
                    };
                    const llave = String(process.env.CLAVE);
                    const Token = jwt.sign(misDatos, llave, {
                        expiresIn: 500000,
                    });
                    res.status(400).json({
                        token: Token,
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
        const existe = await UsuarioSechema.findById(identifiacador).exec();
        if (existe) {
            //se elimina el usuario
            UsuarioSechema.findByIdAndUpdate(
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
export default UsuarioDao;
