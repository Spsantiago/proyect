import { Request, Response } from "express";
import ProductoPrivateDao from '../dao/ProductoPrivateDao';

class ProductoPrivateController extends ProductoPrivateDao{
    public crear(req: Request, res:Response){
        const codigoP ={codigoProducto:req.body.codigoProducto}
        ProductoPrivateController.crearProducto(codigoP,req.body,res)
    }
    public Eliminar (req:Request, res:Response){
        ProductoPrivateController.eliminarProducto(req.params.codigo,res)
    }
    public consultar(req:Request,res:Response){
        ProductoPrivateController.consultarProductos(res)
    }
    public actualizar(req: Request, res:Response){  
        ProductoPrivateController.actualizarProducto(req.params.codigo,req.body,res)

    }
   
}
const productoPrivateController= new ProductoPrivateController
export default productoPrivateController