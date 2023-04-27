import { Router } from "express";
import productoController from "../controller/ProductoController";

class ProductoRoute{
    public rutaApi:Router
    constructor(){
        this.rutaApi= Router()
        this.configRouter()       
    }

    public configRouter():void{
        this.rutaApi.get('/consultar',productoController.consultar)
    }
}

const productoRouter= new ProductoRoute()
export default productoRouter.rutaApi