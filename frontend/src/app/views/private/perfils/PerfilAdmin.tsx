import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MensajeTostify } from '../../../utils/function/MensajeToastify';
import ServicioPrivado from '../../../services/ServicioPrivado';
import ApiBack from '../../../utils/dominios/ApiBack';
import Perfil from '../../../models/Perfil';
import { ToastContainer } from 'react-toastify';

export const PerfilAdmin = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [aregloPerfiles, setaregloPerfiles] = useState<Perfil[]>([]);

    const [objPer, setobjPer] = useState<Perfil>(new Perfil('', '', 0));
    const obtenerPerfiles = async () => {
        const resultado = await ServicioPrivado.peticionGET(
            ApiBack.PERFILES_OBTENER
        );
        setaregloPerfiles(resultado);
        return resultado;
    };

    const borrarPerfil = async (codigoPerfil: string) => {
        const urlBorrar = ApiBack.PERFILES_ELIMINAR + '/' + codigoPerfil;
        const resultado = await ServicioPrivado.peticionDELETE(urlBorrar);
        if (typeof resultado.eliminado === 'undefined') {
            MensajeTostify(
                'error',
                'no se puede elminiar el perfi, es posile que relacione usuarios',
                6000
            );
        } else {
            MensajeTostify('success', 'Perfil eliminado exitosamente', 6000);
        }
        obtenerPerfiles();
    };

    useEffect(() => {
        obtenerPerfiles();
    }, []);

    return (
        <div>
            <main id="main" className="main">
                <div className="pagetitle ">
                    <h1>Perfiles</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Inicio</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Listado de Perfiles
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-hover table-responsive-sm ">
                                <thead>
                                    <tr>
                                        <th style={{ width: '25%' }}>#</th>
                                        <th style={{ width: '40%' }}>Nombre</th>
                                        <th style={{ width: '15%' }}>Estado</th>
                                        <th style={{ width: '0%' }}></th>
                                        <th style={{ width: '10%' }}>Acciones</th>
                                        <th style={{ width: '10%' }}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {aregloPerfiles.map((perfil, indice) => (
                                        <tr key={indice}>
                                            <td>{indice + 1}</td>
                                            <td>{perfil.nombrePerfil}</td>
                                            <td>
                                                {perfil.estadoPerfil === 1
                                                    ? 'Activo'
                                                    : 'Inactivo'}
                                            </td>
                                            <td className="text-center">
                                                {perfil.cantUsuarios}
                                            </td>
                                            <td>
                                                {perfil.cantUsuarios === 0 ? ( <button
                                                        className="btn mx-2 btn-md"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setobjPer(perfil);
                                                            setShow(true);
                                                        }}
                                                    >
                                                        <i
                                                            className="fa-solid fa-trash-can"
                                                            style={{
                                                                color: '#fc0a0a',
                                                            }}
                                                        ></i>
                                                    </button>
                                                    
                                                ) : (
                                                   <button className="btn mx-2 btn-md">
                                                        {' '}
                                                        <i
                                                            className="fa-solid fa-trash-can"
                                                            style={{
                                                                color: '#00000070',
                                                            }}
                                                        ></i>
                                                    </button>
                                                )}
                                            </td>
                                            <td>
                                                <Link
                                                    to={
                                                        '/dashboard/updateprofile/' +
                                                        perfil._id
                                                    }
                                                >
                                                    <button className="btn mx-2 btn-md">
                                                        <i
                                                            className="fa-solid fa-user-pen"
                                                            style={{
                                                                color: '#2626cc',
                                                            }}
                                                        ></i>
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Deseas Eliminar</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Estas Seguro que deseas Elmininar{' '}
                                    <strong>{objPer.nombrePerfil}</strong>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={(e) => {
                                            setShow(false);
                                        }}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={(e) => {
                                            borrarPerfil(objPer._id);
                                            setShow(false);
                                        }}
                                    >
                                        Eliminar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </main>
        </div>
    );
};
