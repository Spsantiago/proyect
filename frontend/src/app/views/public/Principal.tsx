import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg'


export const Principal = () => {
    return (
        <div>
          <header
                id="header"
                className="header fixed-top d-flex align-items-center "
            >
                <div className="d-flex align-items-center justify-content-between">
                    <Link
                        to="/"
                        className="logo d-flex align-items-center"
                    >
                        <img src={logo} alt="Roger Bernal" className='logo d-flex align-items-center' />
                        <span className="d-none d-md-block">RogerShop</span>
                    </Link>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center"> 
                    <Link
                                className="nav-link nav-icon"
                                to="/dashboard"
                                data-bs-toggle=""
                            >
                                <span className='footer'>
                                    Dashboard
                                </span>
                             
                            </Link>      
                        <Link
                                className="nav-link nav-icon"
                                to="/inicioSesion"
                                data-bs-toggle=""
                            >
                                <span className='footer'>
                                    Iniciar Sesión
                                </span>
                             
                            </Link>
                            {/*<!-- End Notification Icon -->*/}


                            <Link
                                className="nav-link nav-icon"
                                to="/Registro"
                                data-bs-toggle=""
                            >
                                <span className='footer'>
                                    Registrarse
                                </span>
                            </Link>
                            {/*<!-- End Messages Icon -->*/}
                    </ul>
                </nav>
                {/*<!-- End Icons Navigation -->*/}
            </header>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <h2 data-aos="fade-up">Productos Para Caballeros</h2>
                            <blockquote data-aos="fade-up" data-aos-delay="100">
                                <p>
                                    Los mejores productos para mejorar tu estilo
                                    al mejor precio del mercado{' '}
                                </p>
                            </blockquote>
                            <div
                                className="d-flex"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <Link to="#about" className="btn-get-started">
                                   Productos
                                </Link>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer" className="footer">
                <div className="footer-content">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-5 col-md-12 footer-info">
                                <Link
                                    to="index.html"
                                    className=" d-flex align-items-center"
                                >
                                    <span>Nova</span>
                                </Link>
                                <p>
                                    Cras fermentum odio eu feugiat lide par naso
                                    tierra. Justo eget nada terra videa magna
                                    derita valies darta donna mare fermentum
                                    iaculis eu non diam phasellus.
                                </p>
                                <div className="social-links d-flex  mt-3">
                                    <Link to="#" className="WhatsApp">
                                        <i className="bi bi-whatsapp"></i>
                                    </Link>
                                    <Link
                                        to="https://www.facebook.com/rogernernal/"
                                        className="facebook"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </Link>
                                    <Link
                                        to="https://www.instagram.com/roger.sh0p/"
                                        className="instagram"
                                    >
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                    <Link to="#" className="linkedin">
                                        <i className="bi bi-linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street <br />
                                    Bogota, Colombia <br></br>
                                    <strong>Phone:</strong> +1 5589 55488 55
                                    <br />
                                    <strong>Email:</strong> info@example.com
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-legal">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright{' '}
                            <strong>
                                <a href='https://instagram.com/mspp._10?igshid=ZDdkNTZiNTM=' target='_blank' rel="noreferrer">Santiago Paredes</a>
                            </strong>
                            . All Rights Reserved
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};
