import { model, Schema } from 'mongoose';
import PerfilEntidad from '../entities/PerfilEntidad';

const PerfilSchema = new Schema<PerfilEntidad>(
    {
        nombrePerfil: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
    { versionKey: false }
);

export default model('Perfil', PerfilSchema, 'Perfil');
