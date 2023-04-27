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
        this.rutaApi.delete('/eliminar/:codigo',productoPrivateController.Eliminar)
        this.rutaApi.get('/consultar',productoPrivateController.consultar)
        this.rutaApi.put('/actualizar/:codigo', productoPrivateController.actualizar)
    }
}

const productoPrivateRouter= new ProductoPrivateRoute()
export default productoPrivateRouter.rutaApi