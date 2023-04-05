import { model, Schema, Types } from 'mongoose';
import UsuarioEntidad from '../entities/UsuarioEntidad';

const UsuarioSchema = new Schema<UsuarioEntidad>(
    {
        nombreUsuario: {
            type: String,
            required: true,
            trim: true,
        },
        estadoUsuario: {
            type: Number,
            enum: [1, 2, 3],
            default: 1,
        },
        correoUsuario: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
        },
        passwordUsuario: {
            type: String,
            required: true,
        },
        fechaCreacion: {
            type: Date,
            default: Date.now(),
        },
        codPerfil: {
            type: Types.ObjectId,
            ref: 'Perfil',
            required: true,
        },
    },
    { versionKey: false }
);

export default model('Usuario', UsuarioSchema, 'Usuario');
