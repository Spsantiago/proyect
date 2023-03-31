import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-body-tertiary bg-dark navbar-dark">
                <div className="container-fluid">
                    <img
                        src={logo}
                        alt="Roger Bernal"
                        style={{
                            height: '4rem',
                            marginRight: '5px',
                        }}
                    />

                    <Link className="navbar-brand" to="/">
                        ROGER SHOP
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="/navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/anillos"
                                >
                                    ANILLOS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reserva">
                                    CADENAS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/producto">
                                    ARETES
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown link
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/#">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/#">
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/#">
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Navbar text with an inline element
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};
