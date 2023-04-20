import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Form, Button } from 'react-bootstrap';

import * as cifrado from 'js-sha512';
import { ToastContainer } from 'react-toastify';

import Perfil from '../../../models/Perfil';
import Usuario from '../../../models/Usuario';
import ApiBack from '../../../utils/dominios/ApiBack';
import nofoto from '../../../../assets/img/logo.jpg';
import ServicioPrivado from '../../../services/ServicioPrivado';
import { useFormulario } from '../../../utils/myHooks/useFormulario';
import { MensajeTostify } from '../../../utils/function/MensajeToastify';
import { ConvertirBase64 } from '../../../utils/function/ConvertirBase64';

export const UsuarioCrear = () => {
    //variables
    const [todoListo, setTodoListo] = useState<boolean>(false);
    let cargaFinalizada = todoListo !== false;

    const redirigir = useNavigate();
    const [imagenMiniatura, setImagenMiniatura] = useState(nofoto);
    const [avatarBase64, setAvatarBase64] = useState<string>('');
    type formaHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);
    const [arregloPerfiles, setArregloPerfiles] = useState<Perfil[]>([]);

    //Hook para formulario
    let {
        nombreUsuario,
        estadoUsuario,
        correoUsuario,
        passwordUsuario,
        nombreImagenUsuario,
        avatarUsuario,
        codPerfil,
        dobleEnlace,
        objeto,
    } = useFormulario<Usuario>(
        new Usuario(
            '',
            '',
            '',
            '',
            new Date(),
            0,
            '',
            '',
            new Perfil('', '', 1)
        )
    );

    //Obtener Perfiles a mostrar en un combo
    const obtenerPerfiles = async () => {
        const resultado = await ServicioPrivado.peticionGET(
            ApiBack.PERFILES_OBTENER
        );
        setArregloPerfiles(resultado);
        if (resultado) {
            setTodoListo(true);
        }
    };

    //Mostrar Imagen en pantalla
    const mostrarImagen = async (e: any) => {
        const archivos = e.target.files;
        const imagen = archivos[0];
        setImagenMiniatura(URL.createObjectURL(imagen));
        dobleEnlace(e);
        const base64 = await ConvertirBase64(imagen);
        setAvatarBase64(String(base64));
    };
    //limpiar cajas
    const LimpiarForm = (formulario: HTMLFormElement) => {
        formulario.reset();
        objeto._id = '';
        objeto.passwordUsuario = '';
        formulario.passwordUsuario.value = '';
        formulario.rePasswordUsuario.value = '';
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
            const claveCifrada = cifrado.sha512(objeto.passwordUsuario);
            objeto.passwordUsuario = claveCifrada;
            objeto.avatarUsuario = avatarBase64;
            const resultado = await ServicioPrivado.peticionPOST(
                ApiBack.USUARIOS_CREAR,
                objeto
            );

            if (resultado.id) {
                setEnProceso(false);
                redirigir('/dashboard/detailuser/' + resultado.id);
            } else {
                LimpiarForm(formularioActual);
                MensajeTostify(
                    'error',
                    'no es posible crearel usuario es posible que exista en la BD',
                    6000
                );
            }
        }
    };

    useEffect(() => {
        obtenerPerfiles();
    }, []);

    return (
        <main id="main" className="main">
          <div className='pagetitle'>
            <h1>Usuarios</h1>
            <nav>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <Link to='/dashboard'>Inicio</Link>
                    </li>
                    <li className='breadcrumb-item active'>Crear Usuario</li>
                </ol>
            </nav>
          </div>

          <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Create Form User
                            </h5>
                            <Form
                                noValidate={enProceso}
                                onSubmit={enviarFormulario}
                            >


                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="nombreUsuario"
                                >
                                    <Form.Label column sm={2}>
                                        Name User
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="text"
                                            className="form-control"
                                            name="nombreUsuario"
                                            placeholder="Enter name for Perfil"
                                            value={nombreUsuario}
                                            onChange={dobleEnlace}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                       The name of User is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="estadoUsuario"
                                >
                                  
                                    <Form.Label column sm={2}>
                                       Status of User
                                    </Form.Label>
                                    <Col sm={10}>
                                    <Form.Select
                                        required
                                        name="estadoUsuario"
                                        value={estadoUsuario}
                                        onChange={dobleEnlace}
                                    >
                                        <option value="">
                                            Select status of User
                                        </option>
                                        <option value={1}>Active</option>
                                        <option value={2}>Inactive</option>
                                    </Form.Select></Col>
                                    <Form.Control.Feedback type="invalid">
                                        The status of User is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>



                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit">
                                            Crear Usuario
                                        </Button>
                                    </Col>
                                </Form.Group>


                            </Form>
                        </div>
                    </div>
                </div>
           <ToastContainer/>
        </main>
    );
};
