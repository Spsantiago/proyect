import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServicioPublico from '../../services/ServicioPublico';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import CrearUsuario from '../../models/CrearUsuario';
import logo from '../../../assets/img/logo.jpg';
import { ContextoUsuario } from '../../security/ContextoUsuario';
import { useFormulario } from '../../utils/myHooks/useFormulario';
import jwtDecode from 'jwt-decode';
import * as cifrado from 'js-sha512';
import MiSesion from '../../models/MiSesion';
import { propUsuario } from '../../models/MisInterfases';
import { act } from '@testing-library/react';

export const Registro = () => {
    const navigate = useNavigate();
    const { actualizar } = useContext(ContextoUsuario) as propUsuario;
    /*variable para tomar un tipo de dato  */
    type formularioHtml = React.FormEvent<HTMLFormElement>;
    /* Se crea un hooks useState para saber si esta o no en proceso  */
    const [enProceso, setEnProceso] = useState<boolean>(false);
    /* se crean las variables para capturar la informaciaon*/
    let { nombreUsuario, correoUsuario, passwordUsuario, dobleEnlace, objeto } =
        useFormulario<CrearUsuario>(new CrearUsuario('', '', ''));

    const LimpiarForm = (formulario: HTMLFormElement) => {
        formulario.reset();

        objeto.nombreUsuario = '';
        objeto.correoUsuario = '';
        objeto.passwordUsuario = '';

        formulario.nombreUsuario.value = '';
        formulario.correoUsuario.value = '';
        formulario.passwordUsuario.value = '';

        formulario.classList.remove('was-validated');
    };

    const MensajeError = () => {
        toast('🦄 No se puede crear el Usuario!', {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    const verificarFormulario = async (fh: formularioHtml) => {
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
            const resultado = await ServicioPublico.crearUsuario(objeto);   
            if (resultado.token) {
                const objJWTRecibido: any = jwtDecode(resultado.token);
                const usuarioCargado = new MiSesion(
                    objJWTRecibido.codUsuario,
                    objJWTRecibido.correo,
                    objJWTRecibido.perfil
                );
                actualizar(usuarioCargado);
                localStorage.setItem('token', resultado.token);
                navigate('/dashboard');
                setEnProceso(false);
            } else {
                LimpiarForm(formularioActual);
                MensajeError();
            }
        }
    };

    return (
        <div>
            <main>
                <div className="colorB">
                    <section className="min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex">
                                        <Link to="/">
                                            <img
                                                className="logoimg"
                                                src={logo}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className=" pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">
                                                    Crear una cuenta
                                                </h5>
                                                <p className="text-center small">
                                                    ingrese sus datos para crear
                                                    una cuenta
                                                </p>
                                            </div>

                                            <Form
                                                noValidate
                                                className="row g-3 needs-validation"
                                                validated={enProceso}
                                                onSubmit={verificarFormulario}
                                            >
                                                <div className="col-12">
                                                    <Form.Group controlId="nombreUsuario">
                                                        <Form.Label>
                                                            Nombres
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            name="nombreUsuario"
                                                            className="form-control"
                                                            value={
                                                                nombreUsuario
                                                            }
                                                            onChange={
                                                                dobleEnlace
                                                            }
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Los Nombres son
                                                            Obligatorios
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
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
                                                            value={
                                                                correoUsuario
                                                            }
                                                            onChange={
                                                                dobleEnlace
                                                            }
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            ingrese un Email
                                                            valido
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
                                                            value={
                                                                passwordUsuario
                                                            }
                                                            onChange={
                                                                dobleEnlace
                                                            }
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            ingrese una
                                                            contraseña valida
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-12">
                                                    <Form.Group controlId="REpasswordU">
                                                        <Form.Label>
                                                            Confirme su
                                                            Contraseña
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="password"
                                                            className="form-control"
                                                            pattern={
                                                                passwordUsuario
                                                            }
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Las contraseñas no
                                                            coinciden
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>

                                                <div className="col-12">
                                                    <button
                                                        className="btn btn-primary w-100"
                                                        type="submit"
                                                    >
                                                        Crear Cuenta
                                                    </button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">
                                                        ¿Ya estas registrado?{' '}
                                                        <Link to="/inicioSesion">
                                                            Iniciar Sesión
                                                        </Link>
                                                    </p>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
};
