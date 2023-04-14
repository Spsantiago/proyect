import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';

export const Header = () => {
    return (
        <div>
            {' '}
            <header
                id="header"
                className="header fixed-top d-flex align-items-center "
            >
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <img
                            src={logo}
                            alt="Roger Bernal"
                            className="logo d-flex align-items-center"
                        />
                        <span className="d-none d-md-block">RogerShop</span>
                    </Link>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <Link
                            className="nav-link nav-icon"
                            to="/team"
                            data-bs-toggle=""
                        >
                            <span className="footer">Team</span>
                        </Link>    <Link
                            className="nav-link nav-icon"
                            to="/dashboard"
                            data-bs-toggle=""
                        >
                            <span className="footer">Dashboard</span>
                        </Link>
                        <Link
                            className="nav-link nav-icon"
                            to="/inicioSesion"
                            data-bs-toggle=""
                        >
                            <span className="footer">Empezar</span>
                        </Link>
                        {/*<!-- End Notification Icon -->*/}
<a href='mailto:foo@bar.com'>mailto</a>
                        <Link
                            className="nav-link nav-icon"
                            to="/Registro"
                            data-bs-toggle=""
                        >
                            <span className="footer">Registrarse</span>
                        </Link>
                        {/*<!-- End Messages Icon -->*/}
                    </ul>
                </nav>
                {/*<!-- End Icons Navigation -->*/}
            </header>
        </div>
    );
};
