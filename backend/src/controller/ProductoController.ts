import { Request, Response } from "express";
import ProductoDao from '../dao/ProductoDao';


class ProductoController extends ProductoDao{
    public consultar(req:Request,res:Response){
        ProductoController.consultarProductos(res)
    }
}

const productoController= new ProductoController
export default productoController