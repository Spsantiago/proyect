import { Response } from 'express';
import PerfilSechema from '../schema/PerfilSchema';

class PerfilDao {
    // sacar los perfiles de la base y pasarselos al cliente
    protected static async consultarPerfil(res: Response): Promise<any> {
        //se hace la consulta
        const datos = await PerfilSechema.find().sort({ _id: -1 });
        //entrega la consulta
        res.status(200).json(datos);
    }

    protected static async crearPerfil(
        parametros: any,
        res: Response
    ): Promise<any> {
        //verificaion si el perfil existe
        const existe = await PerfilSechema.findOne(parametros);
        if (existe) {
            res.status(400).json({ respuesta: 'El perfil ya existe...' });
        } else {
            //se crea el perfil si no existe
            const objPerfil = new PerfilSechema(parametros);
            objPerfil
                .save()
                .then((miObjeto) => {
                    res.status(400).json({
                        respuesta: 'Perfil Creado',
                        codigo: miObjeto._id,
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'NO se puede crear el perfil',
                    });
                });
        }
    }

    protected static async eliminarPerfil(
        identifiacador: any,
        res: Response
    ): Promise<any> {
        //verificaion si el perfil existe
        // const existe = await PerfilSechema.findById(identifiacador);
        const existe = await PerfilSechema.findById(identifiacador).exec();
        if (existe) {
            //se elimina el perfil
            PerfilSechema.findByIdAndDelete(identifiacador)
                .then((miObjeto:any) => {
                    res.status(200).json({
                        respuesta: 'Perfil eliminado',
                        eliminado: miObjeto,
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'NO se puede eliminar el perfil',
                    });
                });
        } else {
            res.status(200).json({ respuesta: 'el perfil no existe' });
        }
    }

    protected static async actualizarPerfil(
        identifiacador: any,
        parametro:any,

        res: Response
    ): Promise<any> {
        //verificaion si el perfil existe
        // const existe = await PerfilSechema.findById(identifiacador);
        const existe = await PerfilSechema.findById(identifiacador).exec();
        if (existe) {
            //se elimina el perfil
            PerfilSechema.findByIdAndUpdate({_id:identifiacador},{$set:parametro})
                .then((miObjeto:any) => {
                    res.status(200).json({
                        respuesta: 'Perfil actualizado',
                        antes: miObjeto,despues:parametro
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
}
export default PerfilDao;
