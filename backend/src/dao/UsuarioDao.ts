import { Response } from 'express';
import UsuarioSchema from '../schema/UsuarioSchema';
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
        UsuarioSchema.findOne({ correoUsuario: miCorreo })
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
                        res.status(200).json({ token: miToken, avatar:objeto.avatarUsuario  });
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
                    const misDatos = {
                        codUsuario: miObjeto._id,
                        correo: parametros.correoUsuario,
                        perfil:nombrPerfilPorDefecto
                    };
                    const llave = String(process.env.CLAVE);
                    const Token = jwt.sign(misDatos, llave, {
                        expiresIn: 500000,
                    });
                    res.status(200).json({
                        token: Token, avatar:miObjeto.avatarUsuario
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'NO se puede crear el Usuario',
                    });
                });
        }
    }
  
}
export default UsuarioDao;
 