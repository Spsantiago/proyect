import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

class Seguridad {
    public analizarToken(req: Request, res: Response, next: NextFunction) {
        //te da elaccso a laa base de datos
        if (req.headers.authorization) {
            try {
                const llave = String(process.env.CLAVE);
                const tokenRecibido = req.headers.authorization ?.split(' ')[1] as string;
                const infoUsuario = jwt.verify(tokenRecibido, llave);
                req.body.datosUsuario = infoUsuario;
                next();
            } catch (error) {
                res.status(401).json({ respuesta: 'Token invalido' });
            }
        } else {
            //respuesta a no tener un Token de seguridad
            res.status(401).json({ respuesta: 'No tiene Token' });
        }
    }
}
const seguridad = new Seguridad();
export default seguridad;
