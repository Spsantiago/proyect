import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';
import { ContextoUsuario } from '../security/ContextoUsuario';
import {
    opcionesAdmin,
    opcionesInvitado,
} from '../utils/dominios/OpcionesSistema';

export const MenuLateral = () => {
    let opciones = [];
    const miUsuario = useContext(ContextoUsuario);
    const nombrePerfil = miUsuario?.autenticado.perfil;

    switch (nombrePerfil) {
        case 'administrador':
            opciones = opcionesAdmin;
            break;
        default:
            opciones = opcionesInvitado;
            break;
    }
    
    opciones = opcionesAdmin;

    return (
        <aside id="sidebar" className="sidebar">
            <Link
                to="/dashboard"
                className="d-flex align-items-center pb-3 mb-3  flex-column border-bottom"
            >
                <img src={logo} alt="noLogo" className="d-flex logoimg" />

                <span className="fs-5 fw-semibold">{nombrePerfil}</span>
            </Link>

            <ul className="sidebar-nav" id="sidebar-nav">
                {opciones.map((opcion, indice) =>
                    opcion.hijos.length ? (
                        <li className="nav-item" key={'li' + indice}>
                            <a
                                className="nav-link collapsed"
                                data-bs-target={'#menu' + indice}
                                data-bs-toggle="collapse"
                                href="/#"
                            >
                                <i className={opcion.icono}></i>
                                <span>{opcion.nombre}</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id={'menu' + indice}
                                className="nav-content collapse "
                                data-bs-parent="#sidebar-nav"
                            >
                                {opcion.hijos.map((subMenu, otroIndice) => (
                                    <li key={'sub' + otroIndice}>
                                        <Link to={subMenu.ruta}>
                                            <i className={subMenu.icono}></i>
                                            <span>{subMenu.nombre}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : (
                        <li className="nav-item" key={indice}>
                            <Link
                                to={opcion.ruta}
                                className="nav-link collapsed"
                            >
                                <i className={opcion.icono}></i>
                                <span>{opcion.nombre}</span>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </aside>
    );
};
