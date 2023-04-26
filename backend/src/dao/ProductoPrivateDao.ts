import { Response } from 'express';
import ProductoSchema from '../schema/ProductoSchema';

class ProductoPrivateDao {
    protected static async crearProducto(
        codProd: any,
        parametros: any,
        res: Response
    ): Promise<any> {
        const nom = parametros.nombreImagenProducto;
        delete parametros._id;
        delete parametros.datosProducto;
        parametros.nomnbreImgenProducto = nom.substring(
            nom.lastIndexOf('\\') + 1
        );
        //validar si el producto existe
        const exite = await ProductoSchema.findOne(codProd).exec();
        if (exite) {
            res.status(400).json({
                respuesta: 'el codigo de producto ya existe',
            });
        } else {
            // se crea el producto si no exite
            const objProducto = new ProductoSchema(parametros);
            objProducto
                .save()
                .then((miObjeto) => {
                    res.status(200).json({ id: miObjeto._id });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'NO se puede crear el Producto',
                    });
                });
        }
    }
}

export default ProductoPrivateDao;
