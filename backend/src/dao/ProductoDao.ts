import ProductoSchema from "../schema/ProductoSchema";
import { Response } from 'express';

class ProductoDao{
    protected static async consultarProductos(res: Response): Promise<any> {
        ProductoSchema.find()
            .sort({ _id: 1 })
            .exec()
            .then((objeto) => {
                res.status(200).json(objeto);
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: 'Error en la consulta' });
            });
    }
}

export default ProductoDao;