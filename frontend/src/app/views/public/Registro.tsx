import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';
import { useState } from 'react';
import { useFormulario } from '../../utils/myHooks/useFormulario';
import CrearUsuario from '../../models/CrearUsuario';
import { Form } from 'react-bootstrap';
import ServicioPublico from '../../services/ServicioPublico';

export const Registro = () => {
    /*variable para tomar un tipo de dato  */
    type formularioHtml = React.FormEvent<HTMLFormElement>;
    /* Se crea un hooks useState para saber si esta o no en proceso  */
    const [enProceso, setenProceso] = useState<boolean>(false);
    /* se crean las variables para capturar la informaciaon*/
    let { nombreUsuario, correoUsuario, passwordUsuario, dobleEnlace, objeto } =
        useFormulario<CrearUsuario>(new CrearUsuario('', '', ''));
    const verificarFormulario = async (fh: formularioHtml) => {
        fh.preventDefault();
        setenProceso(true);
        const formularioActual = fh.currentTarget;

        formularioActual.classList.add('was-validated');
        if (formularioActual.checkValidity() === false) {
            fh.preventDefault(); /*no deja que se comporte por defecto */
            fh.stopPropagation(); /*detiene todas las acciones del formulario */
        } else {
            console.log(objeto)
           const vieneDelBackend =await ServicioPublico.crearUsuario(objeto)
           console.log(vieneDelBackend)
        }
    };

    return (
        <div>
            <main>
                <div className="Error404">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex">
                                        <Link to="/">
                                            <img
                                                className="logo"
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
                                                            Confirme su Contraseña
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="password"
                                                         
                                                            className="form-control"
                                                            pattern={passwordUsuario}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Las contraseñas  no coinciden
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
            </main>{' '}
        </div>
    );
};
