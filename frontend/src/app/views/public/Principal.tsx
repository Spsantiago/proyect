import { Link } from 'react-router-dom';

export const Principal = () => {
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
                                <Link to="index.html" className="active">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="about.html">About</Link>
                            </li>
                            <li>
                                <Link to="services.html">Services</Link>
                            </li>
                            <li>
                                <Link to="portfolio.html">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="team.html">Team</Link>
                            </li>
                            <li>
                                <Link to="blog.html">Blog</Link>
                            </li>
                            <li className="dropdown">
                                <Link to="/#">
                                    <span>Dropdown</span>{' '}
                                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/#">Dropdown 1</Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/#">
                                            <span>Deep Dropdown</span>{' '}
                                            <i className="bi bi-chevron-down dropdown-indicator"></i>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link to="/#">
                                                    Deep Dropdown 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/#">
                                                    Deep Dropdown 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/#">
                                                    Deep Dropdown 3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/#">
                                                    Deep Dropdown 4
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/#">
                                                    Deep Dropdown 5
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/#">Dropdown 2</Link>
                                    </li>
                                    <li>
                                        <Link to="/#">Dropdown 3</Link>
                                    </li>
                                    <li>
                                        <Link to="/#">Dropdown 4</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="contact.html">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    {/*<-- .navbar -->*/}
                </div>
            </header>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <h2 data-aos="fade-up">Focus On What Matters</h2>
                            <blockquote data-aos="fade-up" data-aos-delay="100">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Perspiciatis cum
                                    recusandae eum laboriosam voluptatem
                                    repudiandae odio, vel exercitationem
                                    officiis provident minima.{' '}
                                </p>
                            </blockquote>
                            <div
                                className="d-flex"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <Link to="#about" className="btn-get-started">
                                    Get Started
                                </Link>
                                <Link
                                    to="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                    className="glightbox btn-watch-video d-flex align-items-center"
                                >
                                    <i className="bi bi-play-circle"></i>
                                    <span>Watch Video</span>
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
                                    className="logo d-flex align-items-center"
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
                                    <Link to="#" className="twitter">
                                        <i className="bi bi-twitter"></i>
                                    </Link>
                                    <Link to="#" className="facebook">
                                        <i className="bi bi-facebook"></i>
                                    </Link>
                                    <Link to="#" className="instagram">
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                    <Link to="#" className="linkedin">
                                        <i className="bi bi-linkedin"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">Home</Link>
                                    </li>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">About us</Link>
                                    </li>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">Services</Link>
                                    </li>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">Terms of service</Link>
                                    </li>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">Privacy policy</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">Web Design</Link>
                                    </li>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">Web Development</Link>
                                    </li>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">Product Management</Link>
                                    </li>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">Marketing</Link>
                                    </li>
                                    <li>
                                        <i className="bi bi-dash"></i>{' '}
                                        <Link to="#">Graphic Design</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022
                                    <br />
                                    United States <br></br>
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
                                <span>Nova</span>
                            </strong>
                            . All Rights Reserved
                        </div>
                        <div className="credits">
                            {/*<!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nova-bootstrap-business-template/ -->
          Designed by*/}{' '}
                            <Link to="https://bootstrapmade.com/">
                                BootstrapMade
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
           
        </div>
    );
};
