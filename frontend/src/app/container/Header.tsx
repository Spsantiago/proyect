import { MouseEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContextoUsuario } from '../security/ContextoUsuario';
import { OcultarMenu } from '../utils/function/OcultarMenu';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';

export const Header = () => {
    const navegacion = useNavigate();
    const miUsuario = useContext(ContextoUsuario);
    const correoUsuario = miUsuario?.autenticado.correo;

    const cerrarSesion = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        localStorage.removeItem('token');
        navegacion('/inicioSesion');
    };

    return (
        <header
            id="header"
            className="header fixed-top d-flex align-items-center "
        >
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center">
                    {' '}
                    <img src={logo} alt="RogerBernal" className="logoimg" />
                    <h1 className="d-none d-lg-block">Roger Shop</h1>
                </Link>
                <i
                    className="bi bi-list toggle-sidebar-btn"
                    onClick={OcultarMenu}
                ></i>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <a
                                className="nav-link nav-icon search-bar-toggle"
                                href="/"
                            >
                                <i className="bi bi-search"></i>
                            </a>{' '}
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link nav-icon"
                                href="/#"
                                data-bs-toggle="dropdown"
                            >
                                <i className="bi bi-bell"></i>

                                <span className="badge bg-primary badge-number">
                                    4
                                </span>
                            </a>

                            <li className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    {' '}
                                    You have 4 new notifications
                                    <a href="/#">
                                        <span className="badge rounded pill bg primary p-2 ms-2">
                                            View all{' '}
                                        </span>
                                    </a>
                                </li>
                            </li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="notification-item">
                            <i className="bi bi-exclamation-circle text-warning"></i>

                            <div>
                                <h4>Lorem Ipsum</h4>
                                <p>
                                    Quae dolorem earum veritatis oditseno
                                </p>{' '}
                                <p>30 min. ago</p>
                            </div>
                        </li>

                        <li>
                            <hr className="dropdown-divider" />{' '}
                        </li>

                        <li className="notification-item">
                            {' '}
                            <i className="bi bi-x-circle text-danger"></i>
                            <div>
                                <h4>Atque rerum nesciunt</h4>{' '}
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>1 hr. ago</p>{' '}
                            </div>
                        </li>

                        <hr className="dropdown-divider" />
                        <li className="notification-item">
                            {' '}
                            <i className="bi bi-check-circle text-success"></i>
                            <div>
                                <h4>Sit rerum fuga</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>2 hrs. ago</p>{' '}
                            </div>
                        </li>

                        <li>
                            <hr className="dropdown-divider" />{' '}
                        </li>

                        <li className="notification-item">
                            {' '}
                            <i className="bi bi-info-circle text-primary"></i>
                            <div>
                                <h4>Dicta reprehenderit</h4>{' '}
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>4 hrs. ago</p>
                            </div>
                        </li>

                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="dropdown-footer">
                            {' '}
                            <a href="/#">Show all notifications</a>
                        </li>
                    </ul>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link nav-icon"
                            href="/"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bi bi-chat-left-text"></i>

                            <span className="badge bg-success badge-number">
                                3
                            </span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                            <li className="dropdown-header">
                                You have 3 new messages{' '}
                                <a href="/#">
                                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                                        View all{' '}
                                    </span>
                                </a>
                            </li>{' '}
                            <li>
                                <hr className="dropdown-divider" />{' '}
                            </li>
                            I
                            <li className="message-item">
                                <a href="/#">
                                    {' '}
                                    <img
                                        src="assets/img/messages-1.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>Maria Hudson</h4>

                                        <p>
                                            Velit asperiores et ducimus soluta
                                            repudiandae labore officia est ut...
                                        </p>

                                        <p>4 hrs. ago</p>
                                    </div>
                                </a>
                            </li>{' '}
                            <li>
                                <hr className="dropdown-divider" />{' '}
                            </li>
                            <li className="message-item">
                                {' '}
                                I
                                <a href="/#">
                                    <img
                                        src="assets/img/messages-2.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />

                                    <div>
                                        <h4>Anna Nelson</h4>

                                        <p>
                                            Velit asperiores et ducimus soluta
                                            repudiandae labore officia est ut...
                                        </p>

                                        <p>6 hrs. ago</p>
                                    </div>
                                </a>{' '}
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="message-item">
                                <a href="/#">
                                    <img
                                        src="assets/img/messages-3.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />

                                    <div>
                                        <h4>David Muldon</h4>
                                        <p>
                                            {' '}
                                            Velit asperiores et ducimus soluta
                                            repudiandae labore officia est ut...
                                        </p>{' '}
                                        <p>8 hrs. ago</p>
                                    </div>
                                </a>{' '}
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="dropdown-footer">
                                <a href="/#">Show all messages</a>
                            </li>{' '}
                        </ul>
                        I
                    </li>

                    <li className="nav-item dropdown pe-3">
                        <a
                            className="nav-link nav-profile d-flex align-items-center pe-8"
                            href="/#"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src=""
                                alt="Profile"
                                className="rounded-circle"
                            />{' '}
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                {correoUsuario}
                            </span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>Tripulante Misión TIC</h6>

                                <span>Fullstack</span>
                            </li>{' '}
                            <li>
                                I
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="users-profile.html"
                                >
                                    <i className="bi bi-person"></i>{' '}
                                    <span>Mi perfil</span>
                                </a>{' '}
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="users-profile.html"
                                >
                                    <i className="bi bi-gear"></i>

                                    <span>Configuración</span>
                                </a>
                            </li>
                            <li>
                                {' '}
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="dropdown-item d-flex align-items-center"
                                    onClick={cerrarSesion}
                                >
                                    <i className="bi bi-box-arrow-right"></i>
                                    Cerrar sesión
                                </a>{' '}
                            </li>
                        </ul>
                    </li>
                </nav>
            </div>
        </header>
    );
};

<script src="../../assets/js/main.js"></script>;
