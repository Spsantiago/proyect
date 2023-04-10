import { FC, useState } from 'react';

import jwtDecode from 'jwt-decode';
import MiSesion from '../models/MiSesion';
import { propSesion } from '../models/MisInterfases';
import { ContextoUsuario } from './ContextoUsuario';

const UsuarioSesion: FC<propSesion> = ({ children }) => {
    let UsuarioCargado = new MiSesion('', '', '');
    const actualizar = (objUsuario: MiSesion) => {
        setAutenticado(objUsuario);
    };
    if (localStorage.getItem('token')) {
        const elToken = String(localStorage.getItem('token'));
        try {
            const objJWTRecibido: any = jwtDecode(elToken);
            UsuarioCargado = new MiSesion(
                objJWTRecibido.codUsuario,
                objJWTRecibido.correo,
                objJWTRecibido.perfil
            );
        } catch {
            console.log('Error');
        }
    }
    const [autenticado, setAutenticado] = useState<MiSesion>(UsuarioCargado);
    return (
        <ContextoUsuario.Provider value={{ autenticado, actualizar }}>
            {children}
        </ContextoUsuario.Provider>
    );
};
export default UsuarioSesion;
