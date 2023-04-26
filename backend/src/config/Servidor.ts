import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import ConectionDB from './ConectionDB';


import apiPerfilRuta from '../route/PerfilRoute';
import apiUsuarioRuta from '../route/UsuarioRoute';
import seguridad from '../middleware/Seguidad';
import usuarioPrivateRoute from '../route/UsuarioPrivateRoute';

class Servidor {
    public app: express.Application;

    constructor() {
        //habilitar las variables de ambiente
        dotenv.config({ path: 'variables.env' });
        //conectar a la base de datos
        ConectionDB();
        this.app = express();
        this.iniciarConfig();
        this.iniciarRutas();
    }
    public iniciarConfig() {
        this.app.set('PORT', process.env.PORT);
        //bloquear o permitir acceso
        this.app.use(cors());
        //los mensajes salen en la consola en modo desarrollo
        this.app.use(morgan('dev'));
        // permite limite de subida de archivos
        this.app.use(express.json({ limit: '50MB' }));
        //permite recibir parametros o consultas
        this.app.use(express.urlencoded({ extended: true }));
    }

    public iniciarRutas() {
        //parte publica
        this.app.use('/api/public/usuario', apiUsuarioRuta);

        //parte Privada
        this.app.use('/api/private/perfil',seguridad.analizarToken,apiPerfilRuta);
        this.app.use('/api/private/usuario',seguridad.analizarToken,usuarioPrivateRoute)
        this.app.use('/api/private/')
    }

    public iniciarServidor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('backend listo en el puerto', this.app.get('PORT'));
        });
    }
}

export default Servidor;
