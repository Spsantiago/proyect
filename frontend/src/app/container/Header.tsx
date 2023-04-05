import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <div>
            <header
                id="header"
                className="header d-flex align-items-center fixed-top"
            >
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link
                        to="index.html"
                        className="logo d-flex align-items-center"
                    >
                        {/*<!-- Uncomment the line below if you also wish to use an image logo -->*/}

                        <h1 className="d-flex align-items-center">
                            ROGER
                            <br />
                            SHOP
                        </h1>
                    </Link>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link to="/" className="active">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/">Portfolio</Link>
                            </li>

                            <li>
                                <Link to="/productos">
                                Productos
                                </Link>
                            </li>
                            

                            <li>
                                <Link to="/inicioSesion" className="btn-get-started">
                               
                                   Iniciar Sesion
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Registro"
                                    className="glightbox btn-watch-video d-flex align-items-center"
                                >
                                    <span>Registrarse</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/*<-- .navbar -->*/}
                </div>
            </header>
        </div>
    );
};

<script src="../../assets/js/main.js"></script>
