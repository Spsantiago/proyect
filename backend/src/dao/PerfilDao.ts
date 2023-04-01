import { Response } from 'express';
import PerfilSechema from '../schema/PerfilSchema';

class PerfilDao {
    // sacar los perfiles de la base y pasarselos al cliente
    protected static async consultarPerfiles(res: Response): Promise<any> {
        const datos = await PerfilSechema.find().sort({_id:-1});
        res.status(200).json(datos);
    }
}

export default PerfilDao;
