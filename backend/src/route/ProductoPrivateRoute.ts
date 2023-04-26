import { Router } from "express";
import productoPrivateController from "../controller/ProductoPrivateController";

class ProductoPrivateRoute{
    public rutaApi:Router
    constructor(){
        this.rutaApi= Router()
        this.configRouter()       
    }

    public configRouter():void{
        this.rutaApi.post('/crear',productoPrivateController.crear)
    }
}

const productoPrivateRouter= new ProductoPrivateRoute
export default productoPrivateRouter