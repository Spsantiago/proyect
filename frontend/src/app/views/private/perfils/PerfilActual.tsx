import { Form, Col, Row, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Perfil from '../../../models/Perfil';
import ServicioPrivado from '../../../services/ServicioPrivado';
import ApiBack from '../../../utils/dominios/ApiBack';
import { useFormulario } from '../../../utils/myHooks/useFormulario';
import { MensajeTostify } from '../../../utils/function/MensajeToastify';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const PerfilActual = () => {
    let { codigo } = useParams();
    type fromaHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);
    const [todoListo, setTodoListo] = useState<boolean>(false);
    let cargaFinalizada = todoListo !== undefined;
    let { nombrePerfil, estadoPerfil, dobleEnlace, objeto } =
        useFormulario<Perfil>(new Perfil('', '', 0));

    const obtenerPerfil= async()=>{
      const urlCargandoPerfil= ApiBack.PERFILES_OBTENER_UNO+'/'+codigo
      const perfilRecibido = await ServicioPrivado.peticionGET(urlCargandoPerfil)
      objeto._id= perfilRecibido._id
      objeto.nombrePerfil=perfilRecibido.nombrePerfil
      objeto.estadoPerfil= perfilRecibido.estadoPerfil
      if(perfilRecibido){
        setTodoListo(true)
      }
    }

    const enviarFormulario = async (fh: fromaHtml) => {
        fh.preventDefault();
        setEnProceso(true);
        const formularioActual = fh.currentTarget;

        formularioActual.classList.add('was-validated');
        if (formularioActual.checkValidity() === false) {
            fh.preventDefault(); /*no deja que se comporte por defecto */
            fh.stopPropagation(); /*detiene todas las acciones del formulario */
        } else {
            const urlActualizar= ApiBack.PERFILES_ACTUALIZAR + '/' + objeto._id
            const resultado =await ServicioPrivado.peticionPUT(urlActualizar,objeto )
            if (resultado.despues) {
              setEnProceso(false)
              MensajeTostify('success','Perfil Actualizado Correctamente',7000)
            } else {
              MensajeTostify('error','No se puede actualizar el Perfil. Esposile que el nombre ya exista este nombre',7000)             
            }
        }
    };
    useEffect(() => {
        obtenerPerfil();

    },[]);

    return (
        <div>
            <main id="main" className="main">
                {' '}
                <div className="pagetitle ">
                    <h1>Perfiles</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboar">Inicio</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Actualizar Perfiles
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Uptade Form Perfil</h5>
                            {cargaFinalizada ? (
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
                                        </Form.Select>
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The status of Perfil is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit">
                                            Actualizar Perfil
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>):'Cargando Form'}
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </main>
        </div>
    );
};
