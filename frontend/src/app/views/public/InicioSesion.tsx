import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServicioPublico from '../../services/ServicioPublico';

import { ToastContainer } from 'react-toastify';
import CrearUsuario from '../../models/CrearUsuario';
import logo from '../../../assets/img/logo.jpg';
import { ContextoUsuario } from '../../security/ContextoUsuario';
import { useFormulario } from '../../utils/myHooks/useFormulario';
import jwtDecode from 'jwt-decode';
import * as cifrado from 'js-sha512';
import MiSesion from '../../models/MiSesion';
import { propUsuario } from '../../models/MisInterfases';
import { MensajeTostify } from '../../utils/function/MensajeToastify';

export const InicioSesion = () => {
    const navigate = useNavigate();
    const { actualizar } = useContext(ContextoUsuario) as propUsuario;
    /*variable para tomar un tipo de dato  */
    type formularioHtml = React.FormEvent<HTMLFormElement>;
    /* Se crea un hooks useState para saber si esta o no en proceso  */
    const [enProceso, setEnProceso] = useState<boolean>(false);
    /* se crean las variables para capturar la informaciaon*/
    let { correoUsuario, passwordUsuario, dobleEnlace, objeto } =
        useFormulario<CrearUsuario>(new CrearUsuario('', '', ''));
    /*funcion para limiar losformularios de caulquier informacion basura */
    const LimpiarForm = (formulario: HTMLFormElement) => {
        formulario.reset();
        objeto.correoUsuario = '';
        objeto.passwordUsuario = '';
        formulario.correoUsuario.value = '';
        formulario.passwordUsuario.value = '';
        formulario.classList.remove('was-validated');
    };

    const enviarFormulario = async (fh: formularioHtml) => {
        fh.preventDefault();
        setEnProceso(true);
        const formularioActual = fh.currentTarget;

        formularioActual.classList.add('was-validated');
        if (formularioActual.checkValidity() === false) {
            fh.preventDefault(); /*no deja que se comporte por defecto */
            fh.stopPropagation(); /*detiene todas las acciones del formulario */
        } else {
            const claveCifrada = cifrado.sha512(objeto.passwordUsuario);
            objeto.passwordUsuario = claveCifrada;
            const resultado = await ServicioPublico.iniciarSesion(objeto);
            if (resultado.token) {
                const objJWTRecibido: any = jwtDecode(resultado.token);
                const usuarioCargado = new MiSesion(
                    objJWTRecibido.codUsuario,
                    objJWTRecibido.correo,
                    objJWTRecibido.perfil
                );
                actualizar(usuarioCargado);
                localStorage.setItem('token', resultado.token);
                localStorage.setItem('avatar', resultado.avatar);
                navigate('/dashboard');
                setEnProceso(false);
            } else {
                LimpiarForm(formularioActual);
                MensajeTostify(
                    'error',
                    'Usuario o Contraseña Invalidos ',
                    6000
                );
            }
        }
    };

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
                                                Ingrese su nombre de ususario y
                                                su contraseña
                                            </p>
                                        </div>

                                        <Form
                                            noValidate
                                            className="row g-3 needs-validation"
                                            validated={enProceso}
                                            onSubmit={enviarFormulario}
                                        >
                                            <div className="col-12">
                                                <Form.Group controlId="correoUsuario">
                                                    <Form.Label>
                                                        Email
                                                    </Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="email"
                                                        name="correoUsuario"
                                                        className="form-control"
                                                        value={correoUsuario}
                                                        onChange={dobleEnlace}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        ingrese un Email valido
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </div>

                                            <div className="col-12">
                                                <Form.Group controlId="passwordUsuario">
                                                    <Form.Label>
                                                        Contraseña
                                                    </Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="password"
                                                        name="passwordUsuario"
                                                        className="form-control"
                                                        minLength={6}
                                                        value={passwordUsuario}
                                                        onChange={dobleEnlace}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        ingrese una contraseña
                                                        valida
                                                    </Form.Control.Feedback>
                                                </Form.Group>
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
                                        </Form>
                                        <div className="col-12">
                                            <p className="small mb-0">
                                                ¿No tienes una cuenta ?{' '}
                                                <Link to="/Registro">
                                                    Registrarse
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ToastContainer />
        </div>
    );
};
