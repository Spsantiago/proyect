import { useNavigate } from 'react-router-dom';
import team1 from '../../../assets/img/team/team-1.jpg';
import team3 from '../../../assets/img/team/team-3.jpg';

export const Team = () => {
    const navigate = useNavigate();
    return (
        <div >
            <section id="team" className="team colorB">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div className="section-header">
                        <h2>Nuestro equipo de trabajo</h2>
                        <p>
                            Nuestro equipo de trabajo aunque pequeño deseas
                            siempre brindarte los mejores producto para hombre,
                            dandote asi la mejor experiencia
                        </p>
                    </div>

                    <div className="row gy-5">
                        <button
                            className="btn btn-outline-dark"
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            Regresar
                        </button>
                        <div
                            className="col-xl-4 col-md-6 d-flex aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src={team1}
                                        className="img-fluid rounded-circle"
                                        alt="Roger Bernal"
                                    />
                                </div>
                                <div className="member-info">
                                    <div className="social">
                                        <a href="/#">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a href="https://www.instagram.com/roger.sh0p/" target='_blanck'>
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </div>
                                    <h4>Roger Bernal</h4>
                                    <span>Creater maker</span>
                                    <span>Data Scientist</span>
                                </div>
                            </div>
                        </div>
                        {/* End Team Member */}

                        <div
                            className="col-xl-4 col-md-6 d-flex aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src={team3}
                                        className="img-fluid rounded-circle"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <div className="social">
                                        <a href="https://www.instagram.com/mspp._10/?igshid=ZDdkNTZiNTM%3D" target='_blanck'>
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                        <a href="#">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </div>
                                    <h4>Santiago Paredes</h4>
                                    <span>Developer</span>
                                    <span>System Enginner</span>
                                </div>
                            </div>
                        </div>
                        {/* End Team Member */}

                        {/*<div
              className="col-xl-4 col-md-6 d-flex aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={team3}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <div className="social">
                    <a href="/#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>*/}
                        {/* End Team Member */}
                    </div>
                </div>
            </section>
        </div>
    );
};
