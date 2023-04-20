import { Form, Col, Row, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import Perfil from '../../../models/Perfil';
import ServicioPrivado from '../../../services/ServicioPrivado';
import ApiBack from '../../../utils/dominios/ApiBack';
import { useFormulario } from '../../../utils/myHooks/useFormulario';
import { MensajeTostify } from '../../../utils/function/MensajeToastify';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export const PerfilCrear = () => {
    type formaHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);
    let { nombrePerfil, estadoPerfil, dobleEnlace, objeto } =
        useFormulario<Perfil>(new Perfil('', '', 0));

    const LimpiarForm = (formulario: HTMLFormElement) => {
        formulario.reset();
        objeto._id = '';
        objeto.nombrePerfil = '';
        objeto.estadoPerfil = 0;
        formulario.nombrePerfil.value = '';
        formulario.estadoPerfil.value = '';
        formulario.classList.remove('was-validated');
    };
    const enviarFormulario = async (fh: formaHtml) => {
        fh.preventDefault();
        setEnProceso(true);
        const formularioActual = fh.currentTarget;

        formularioActual.classList.add('was-validated');
        if (formularioActual.checkValidity() === false) {
            fh.preventDefault(); /*no deja que se comporte por defecto */
            fh.stopPropagation(); /*detiene todas las acciones del formulario */
        } else {
            const resultado = await ServicioPrivado.peticionPOST(
                ApiBack.PERFILES_CREAR,
                objeto
            );

            if (resultado.id) {
                setEnProceso(false);
                MensajeTostify('success', 'Perfil creado con exito', 6000);
            } else {
                MensajeTostify(
                    'error',
                    'NO se pude crear el perfil, puede que el nombre ya exista en el la base de datos',
                    6000
                );
            }
            LimpiarForm(formularioActual);
        }
    };

    return (
        <div>
            <main id="main" className="main">
                {' '}
                <div className="pagetitle ">
                    <h1>Perfiles</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Inicio</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Crear Perfiles
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Create Form Perfil
                            </h5>
                            <Form
                                noValidate={enProceso}
                                onSubmit={enviarFormulario}
                            >


                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="nombrePerfil"
                                >
                                    <Form.Label column sm={2}>
                                        Name Perfil
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="text"
                                            className="form-control"
                                            name="nombrePerfil"
                                            placeholder="Enter name for Perfil"
                                            value={nombrePerfil}
                                            onChange={dobleEnlace}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                       The name of Perfil is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="estadoPerfil"
                                >
                                  
                                    <Form.Label column sm={2}>
                                       Status of Perfil
                                    </Form.Label>
                                    <Col sm={10}>
                                    <Form.Select
                                        required
                                        name="estadoPerfil"
                                        value={estadoPerfil}
                                        onChange={dobleEnlace}
                                    >
                                        <option value="">
                                            Select status of Perfil
                                        </option>
                                        <option value={1}>Active</option>
                                        <option value={2}>Inactive</option>
                                    </Form.Select></Col>
                                    <Form.Control.Feedback type="invalid">
                                        The status of Perfil is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>



                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit">
                                            Crear Perfil
                                        </Button>
                                    </Col>
                                </Form.Group>


                            </Form>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </main>
        </div>
    );
};
