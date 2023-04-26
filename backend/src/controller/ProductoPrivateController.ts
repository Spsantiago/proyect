import { Request, Response } from "express";
import ProductoPrivateDao from '../dao/ProductoPrivateDao';

class ProductoPrivateController extends ProductoPrivateDao{
    public crear(req: Request, res:Response){
        const codProd ={codProd:req.body.codProd}
        ProductoPrivateController.crearProducto(codProd,req.params.body,res)
    }
}
const productoPrivateController= new ProductoPrivateController
export default productoPrivateController