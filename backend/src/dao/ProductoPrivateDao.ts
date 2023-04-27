import { Response } from 'express';
import ProductoSchema from '../schema/ProductoSchema';

class ProductoPrivateDao {
    protected static async crearProducto(
        codigoP: any,
        parametros: any,
        res: Response
    ): Promise<any> {
        const nom = parametros.nombreImagenProducto;
        parametros.nomnbreImgenProducto = nom.substring(
            nom.lastIndexOf('\\') + 1
        );
        console.log(parametros);
        //validar si el producto existe
        const existe = await ProductoSchema.findOne(codigoP).exec();
        if (existe) {
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
    protected static async eliminarProducto(
        identificador: any,
        res: Response
    ): Promise<any> {
        // verifica si el producto existe
        const existe = await ProductoSchema.findById(identificador).exec();
        if (existe) {
            ProductoSchema.findByIdAndDelete(identificador)
                .then((objeto: any) => {
                    res.status(200).json({
                        respuesta: 'Producto Eliminado',
                        eliminado: objeto,
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: 'no se puede elimanr el producto',
                    });
                });
        } else {
            res.status(400).json({
                respuesta: 'el producto no existe',
            });
        }
    }
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
    protected static async actualizarProducto(
        identificador:any,
        parametros:any,
        res: Response
    ):Promise<any>{   
        //validar si el Producto Existe
        const existe =await ProductoSchema.findById(identificador).exec()
        if (existe) {
            //se actualiza el usuario
            ProductoSchema.findByIdAndUpdate(
                {_id:identificador},
                {$set:parametros}
            )
            .then((objeto:any)=>{
                res.status(200).json({
                    respuesta:'Producto Actualizado',
                    antes: objeto,
                    despues:parametros
                })
            })
            .catch(()=>{
                res.status(400).json({
                    respuesta:'no se puede actualizar el producto'
                })
            })
        } else {
            res.status(400).json({
                respuesta:'el Producto que quieres actualizar no existe'
            })
        }
    }
}

export default ProductoPrivateDao;
