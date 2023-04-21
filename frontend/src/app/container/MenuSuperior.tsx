import { MouseEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContextoUsuario } from '../security/ContextoUsuario';
import { OcultarMenu } from '../utils/function/OcultarMenu';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';
import about from "../../assets/img/about.jpg"
export const MenuSuperior = () => {
    const navegacion = useNavigate();
    const miUsuario = useContext(ContextoUsuario);
    const correoUsuario = miUsuario?.autenticado.correo;

    let avatarUsuario= String(localStorage.getItem('avatar'))

    const cerrarSesion = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        localStorage.removeItem('token');
        navegacion('/');
    };
    const imageOnLoadHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
      ) => {
        }
     
    
      // This function is triggered if an error occurs while loading an image
      const imageOnErrorHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
      ) => {
        event.currentTarget.src = about;
      }

    return (
        <div>
            <header
                id="header"
                className="header fixed-top d-flex align-items-center sticked"
            >
                <div className="d-flex align-items-center justify-content-between">
                    <Link
                        to="principal"
                        className="logo d-flex align-items-center"
                    >
                        <img src={logo} alt="Roger Bernal"  />
                        <span className="d-none d-md-block">RogerShop</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={OcultarMenu}></i>
                </div>

             {/*   <div className="search-bar">
                    <form
                        className="search-form d-flex align-items-center"
                        method="POST"
                        action="#"
                    >
                        <input
                            type="text"
                            name="query"
                            placeholder="Search"
                            title="Enter search keyword"
                        />
                        <button type="submit" title="Search">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
    <!-- End Search Bar -->*/}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">       
                        <Link
                                className="nav-link nav-icon"
                                to="/dashboard"
                                data-bs-toggle=""
                            >
                                <i className="bi bi-bell"></i>
                                <span className="badge bg-primary badge-number">
                                    4
                                </span>
                            </Link>
                            {/*<!-- End Notification Icon -->*/}


                            <Link
                                className="nav-link nav-icon"
                                to="/dashboard"
                                data-bs-toggle=""
                            >
                                <i className="bi bi-chat-left-text"></i>
                                <span className="badge bg-success badge-number">
                                    3
                                </span>
                            </Link>
                            {/*<!-- End Messages Icon -->*/}


                        <li className="nav-item dropdown pe-3">
                            <a
                                className="nav-link nav-profile d-flex align-items-center pe-0"
                                href="/#"
                                data-bs-toggle="dropdown"
                            >
                                <img onLoad={imageOnLoadHandler}
                                    onError={imageOnErrorHandler}
                                    src={avatarUsuario}
                                    alt="Profile"
                                    className="rounded-circle"
                                />
                                <span className="d-none d-md-block dropdown-toggle ps-2">
                                    {correoUsuario}
                                </span>
                            </a>
                            {/*<!-- End Profile Iamge Icon -->*/}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                  {correoUsuario}
                                    
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link
                                        className="dropdown-item d-flex align-items-center"
                                        to="/dashboard"
                                    >
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </Link>
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
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a
                                        
                                        className="dropdown-item d-flex align-items-center"
                                        href="pages-faq.html"
                                    >
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a
                                        className="dropdown-item d-flex align-items-center"
                                        href="/"
                                        onClick={cerrarSesion}
                                    >
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                            {/*<!-- End Profile Dropdown Items -->*/}
                        </li>
                        {/*<!-- End Profile Nav -->*/}
                    </ul>
                </nav>
                {/*<!-- End Icons Navigation -->*/}
            </header>
        </div>
    )
}