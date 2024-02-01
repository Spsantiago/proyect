import { Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

type propsVigilante = { children?: any };

export const Vigilante = ({ children }: propsVigilante) => {
    if (localStorage.getItem('token')) {
        const elToken = String(localStorage.getItem('token'));
        try {
            jwtDecode(elToken);
        } catch {
            console.log('Error');
            return <Navigate to="/inicioSesion" />;
        }
    } else {
        return <Navigate to="/inicioSesion" />;
    }
    return children ? children : <Outlet />;
};
