import { Form, Col, Row, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Perfil from '../../../models/Perfil';
import ServicioPrivado from '../../../services/ServicioPrivado';
import ApiBack from '../../../utils/dominios/ApiBack';
import { useFormulario } from '../../../utils/myHooks/useFormulario';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ConvertirBase64 } from '../../../utils/function/ConvertirBase64';
import Usuario from '../../../models/Usuario';
import nofoto from '../../../../assets/img/about.jpg';
import { MensajeTostify } from '../../../utils/function/MensajeToastify';

export const UsuarioActual = () => {
    let { codigo } = useParams<string>(); 
    const [avatarBase64, setAvatarBase64] = useState<string>(''); 
    const [imagenMiniatura, setImagenMiniatura] = useState(nofoto);
    const [nombreImagenTempo, setNombreImagenTempo]= useState<string>('')


    const [todoListo, setTodoListo] = useState<boolean>(false);
    let cargaFinalizada = todoListo !== undefined;
    type formaHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);
    const [arregloPerfiles, setArregloPerfiles] = useState<Perfil[]>([]);
   


    let { nombreUsuario, estadoUsuario, correoUsuario, avatarUsuario, nombreImagenUsuario, codPerfil, dobleEnlace, objeto } = useFormulario<Usuario>(
        new Usuario( '', '', '', '', new Date(), 0, '', '', new Perfil('', '', 1) ) );
  

    const obtenerUsuario = async () => {
        const urlCargandoUsuario = ApiBack.USUARIOS_OBTENER_UNO + '/' + codigo;
        const usuarioRecibido = await ServicioPrivado.peticionGET(
            urlCargandoUsuario
        );
    
        if (usuarioRecibido) {
           
            objeto.nombreUsuario = usuarioRecibido.nombreUsuario;
            objeto.estadoUsuario = usuarioRecibido.estadoUsuario;
            objeto.correoUsuario= usuarioRecibido.correoUsuario
objeto._id= usuarioRecibido._id
            objeto.avatarUsuario= usuarioRecibido.avatarUsuario
            objeto.codPerfil = usuarioRecibido.codPerfil

            if(usuarioRecibido){
              setAvatarBase64(usuarioRecibido.avatarUsuario)
              setImagenMiniatura(usuarioRecibido.avatarUsuario)
              setNombreImagenTempo(usuarioRecibido.nombreImagenUsuario) 
              setTodoListo(true); 
            }
        }
    }; 
    
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

   
    const enviarFormulario = async (fh: formaHtml) => {
        fh.preventDefault();
        setEnProceso(true);
        const formularioActual = fh.currentTarget;

        formularioActual.classList.add('was-validated');
        if (formularioActual.checkValidity() === false) {
            fh.preventDefault(); /*no deja que se comporte por defecto */
            fh.stopPropagation(); /*detiene todas las acciones del formulario */
        } else {


          objeto.avatarUsuario= avatarUsuario
          objeto.avatarUsuario=avatarBase64
            const urlActualizar =
                ApiBack.USUARIOS_ACTUALIZAR + '/' + codigo;
                const objetoActualizar = new Usuario( objeto._id ,objeto.nombreUsuario,objeto.correoUsuario,'',new Date(),objeto.estadoUsuario,nombreImagenUsuario!==''?nombreImagenUsuario : nombreImagenTempo ,objeto.avatarUsuario,objeto.codPerfil)
            const resultado = await ServicioPrivado.peticionPUT(
                urlActualizar,
                objetoActualizar
            );
            if (resultado.despues) {
                setEnProceso(false);
                MensajeTostify(
                    'success',
                    'Usuario Actualizado Correctamente',
                    7000
                );
            } else {
                MensajeTostify(
                    'error',
                    'No se puede actualizar el Perfil. Esposile que el nombre ya exista',
                    7000
                );
            }
        }
    };
    useEffect(() => {
        obtenerPerfiles();
        obtenerUsuario();
    },[]);

    return (
        <main id="main" className="main">
                  <div className="pagetitle">
                <h1>Usuarios</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Inicio</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            Crear Usuario
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Create Form User</h5>

                        {cargaFinalizada ? (
                            <Form
                                noValidate
                                validated={enProceso}
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
                                            placeholder={objeto.nombreUsuario}
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
                                    controlId="correoUsuario"
                                >
                                    <Form.Label column sm={2}>
                                        Email User
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="text"
                                            className="form-control"
                                            name="correoUsuario"
                                            placeholder="Enter Email"
                                            pattern="[a-z0-9+_.-]+@[a-z]+\.[a-z]{2,3}"
                                            value={correoUsuario}
                                            onChange={dobleEnlace}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The email of User is REQUIRED
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
                                        </Form.Select>
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The status of User is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="codPerfil"
                                >
                                    <Form.Label column sm={2}>
                                        Perfil Code
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Select
                                            size="sm"
                                            required
                                            name="codPerfil"
                                            value={codPerfil._id}
                                            onChange={dobleEnlace}
                                        >
                                            <option value="">
                                                Select code of Perfil
                                            </option>
                                            {arregloPerfiles.map(
                                                (Perfil, index) => (
                                                    <option
                                                        key={index}
                                                        value={Perfil._id}
                                                    >
                                                        {Perfil.nombrePerfil}
                                                    </option>
                                                )
                                            )}
                                        </Form.Select>
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The coodePerfil of User is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="nombreImagenUsuario"
                                >
                                    {' '}
                                    <Form.Label column sm={2}>
                                        Seleccione Imagen
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            accept="image/png, image/jpeg"
                                            required
                                            type="file"
                                            name="nombreImagenUsuario"
                                            className="form-control"
                                            value={nombreImagenUsuario}
                                            onChange={mostrarImagen}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        seleccione un avatar para el usuario
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="mb-3 row">
                                    <div className="col-sm-3"></div>
                                    <div className="d-flex justify-content-center col-sm-9">
                                        <img
                                            src={imagenMiniatura}
                                            alt="no foto"
                                            className="maximoTamanoCreacion"
                                        />
                                    </div>
                                </div>
                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Crear Usuario
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        ) : (
                            <div> Cargando Información</div>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </main>
    );
};
