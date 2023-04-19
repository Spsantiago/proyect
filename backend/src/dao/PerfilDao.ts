import { Response } from 'express';
import PerfilSchema from '../schema/PerfilSchema';
import UsuarioSchema from '../schema/UsuarioSchema';

class PerfilDao {

    /*obtener perfiles con orden y contando la cantidad de usuarios que tiene el perfil  */
    protected static async obtenerPerfiles(res:Response):Promise<any>{
        const datos= await PerfilSchema.aggregate([
            {$lookup:{from :'Usuario',localField:'_id',foreignField:'codPerfil',as :'cantUsuarios'}},
            {$addFields:{cantUsuarios:{$size:'$cantUsuarios'}}}
        ]).sort({_id:1})
        res.status(200).json(datos)
    }
    //se crea un perfil
    protected static async crearPerfil(
        parametros: any,
        res: Response
    ): Promise<any> {
        //limpia todo lo que pueda enviar de mas el frontend
        delete parametros._id;
        delete parametros.datosUsuario;
        //verificaion si el perfil existe
        const existe = await PerfilSchema.findOne(parametros);
        if (existe) {
            res.status(400).json({ respuesta: 'El perfil ya existe...' });
        } else {
            //se crea el perfil si no existe
            const objPerfil = new PerfilSchema(parametros);
            objPerfil
                .save()
                .then((miObjeto) => {
                    res.status(400).json({
                        respuesta: 'Perfil Creado',
                        id: miObjeto._id,
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'NO se puede crear el perfil',
                    });
                });
        }
    }

    //se elimina un perfil por codigo especifico
    protected static async eliminarPerfil(
        identifiacador: any,
        res: Response
    ): Promise<any> {
        const llave = { _id: identifiacador };
        //verificaion cuantos usuarios tiene el perfil
        const cantidad = await UsuarioSchema.countDocuments({
            codPerfil: llave,
        });
        // si el perfil tiene usuarios no se elimina
        if (cantidad > 0) {
            res.status(400).json({
                respuesta: 'Error, El perfil tiene usuarios relacionados',
            });
        } else {
            //si el perfil no tiene usuarios si se puede eliminar
            const existe = await PerfilSchema.findById(identifiacador).exec();
            if (existe) {
                //se pasan respuestas al frontend
                PerfilSchema.deleteOne({ _id: identifiacador })
                    .then((objeto) => {
                        res.status(200).json({ eliminado: objeto });
                    })
                    .catch(() => {
                        res.status(400).json({
                            respuesta: 'Error al einimar el Perfil',
                        });
                    });
            } else {
                res.status(400).json({ respuesta: 'El perfil NO existe' });
            }
        }
    }
    //se actualiza un perfil por codigo especifico
    protected static async actualizarPerfil(
        identifiacador: any,
        parametro: any,

        res: Response
    ): Promise<any> {
        //verificaion si el perfil existe
        // const existe = await PerfilSechema.findById(identifiacador);
        const existe = await PerfilSchema.findById(identifiacador).exec();
        if (existe) {
            //se elimina el perfil
            PerfilSchema.findByIdAndUpdate(
                { _id: identifiacador },
                { $set: parametro }
            )
                .then((miObjeto: any) => {
                    res.status(200).json({
                        respuesta: 'Perfil actualizado',
                        antes: miObjeto,
                        despues: parametro,
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'NO se puede actualizar el perfil',
                    });
                });
        } else {
            res.status(200).json({ respuesta: 'el perfil no existe' });
        }
    }

    //se busca un perofil por codigo especifico
    protected static async consultarPerfil(
        identificador: any,
        res: Response
    ): Promise<any> {
        //se hace la consulta
        const jsonPerfil = { _id: identificador };
        const existePerfil = await PerfilSchema.findOne(jsonPerfil).exec();
        //entrega la consulta
        if (existePerfil) {
            res.status(200).json(existePerfil);
        } else {
            res.status(400).json({
                respuesta: 'No hay un perfil con ese identifiicador',
            });
        }
    }
}
export default PerfilDao;
//se elimina el perfil
