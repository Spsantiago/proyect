import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';


export const InicioSesion = () => {
    return (
        <div>
            <div className="colorB">
                <section className=" min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex ">
                                    <Link to="/">
                                        <img
                                            src={logo}
                                            alt=""
                                            className="logo d-flex align-items-center"
                                        />
                                    </Link>
                                </div>
                                {/*<!-- End Logo -->*/}

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                               Iniciar Sesión
                                            </h5>
                                            <p className="text-center small">
                                              Ingrese su nombre de ususario 
                                              y su contraseña 
                                            </p>
                                        </div>

                                        <form className="row g-3 needs-validation">
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourUsername"
                                                    className="form-label"
                                                >
                                                    Nombre de Usuario
                                                </label>
                                                <div className="input-group has-validation">
                                                    <span
                                                        className="input-group-text"
                                                        id="inputGroupPrepend"
                                                    >
                                                        @
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        className="form-control"
                                                        id="yourUsername"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                       Por Favor ingrese un Nombre de Usuario
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourPassword"
                                                    className="form-label"
                                                >
                                                    Contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    id="yourPassword"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                   Por favor ingrese la contraseña 
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="remember"
                                                        value="true"
                                                        id="rememberMe"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="rememberMe"
                                                    >
                                                        Recuerdame
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button
                                                    className="btn btn-primary w-100"
                                                    type="submit"
                                                >
                                                    Iniciar Sesión
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">
                                                    ¿No tienes una cuenta ?{' '}
                                                    <Link to="/Registro">
                                                        Registrarse
                                                    </Link>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
