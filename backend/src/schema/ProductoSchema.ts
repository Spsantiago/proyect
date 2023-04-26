import { model,Schema } from "mongoose";
import ProductoEntidad from '../entities/ProductoEntidad'

const ProductoSchema= new Schema<ProductoEntidad>(
    {
        nombreProducto:{ type:String, required:true, uniqued: true, trim:true },
        valor:{ type:Number, required:true, default:0 },
        fechaCreacion:{ type:Date, default:Date.now() },
        avatarProducto:{ type:String, default:'noAvatar' },
        descripcion:{ type:String, required:true, trim:true },
        codigoProducto:{ type:String, required:true, trim:true, unique:true },
        estadoProducto:{ type: Number, enum: [1, 2, 3], default: 1 },
        nombreImagenProducto:{ type:String, default:'noAvatar' }

    }
)
export default model('Productos', ProductoSchema,'Productos')