import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MensajeTostify } from '../../../utils/function/MensajeToastify';
import ServicioPrivado from '../../../services/ServicioPrivado';
import ApiBack from '../../../utils/dominios/ApiBack';
import Usuario from '../../../models/Usuario';
import { ToastContainer } from 'react-toastify';
import Perfil from '../../../models/Perfil';
import {
  obtenerFechaLocal,
  obtenerHora,
} from '../../../utils/function/FormatoFecha';

export const UsuarioAdmin = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [aregloUsuarios, setaregloUsuarios] = useState<Usuario[]>([]);

    const [objUsu, setobjUsu] = useState<Usuario>(new Usuario(
      '',
      '',
      '',
      '',
      new Date(),
      0,
      '',
      '',
      new Perfil('', '', 1)
  ));
    const obtenerUsuario = async () => {
      const resultado = await ServicioPrivado.peticionGET(
          ApiBack.USUARIOS_OBTENER
      );
      setaregloUsuarios(resultado);
      return resultado;
  };

    const borrarUsuario = async (codigo: string) => {
        const urlBorrar = ApiBack.USUARIOS_ELIMINAR + '/' + codigo;
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
        obtenerUsuario();
    };

    useEffect(() => {
      obtenerUsuario();
  }, []);

    return (
        <div>
            <main id="main" className="main">
                <div className="pagetitle ">
                    <h1>Usuarios</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Inicio</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Listado de Usuarios
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-hover table-sm table-responsive">
                                <thead>
                                    <tr >
                                        <th style={{ width: '8%' }}>Nro</th>
                                        <th  style={{ width: '25%' }}>Usuario</th>
                                        <th className='d-none d-md-table-cell' style={{ width: '15%' }}>Creación</th>
                                        <th className='d-none  d-md-table-cell' style={{ width: '20%' }}>Perfil</th>
                                        <th className='d-none d-md-table-cell' style={{ width: '10%' }}>Estado</th>
                                       <th style={{ width: '22%' }}></th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {aregloUsuarios.map((usuario, indice) => (
                                        <tr key={indice}>
                                            <td>{indice + 1}</td>
                                            <td>{usuario.nombreUsuario} 
                                                <br/>
                                                <span className='small color-gray'> {usuario.correoUsuario} </span>
                                            </td>
                                            <td className='d-none d-md-table-cell'>
                                            {obtenerFechaLocal( String( usuario?.fechaCreacion ) )}
                                              <br />
                                              <span className='small color-gray'>{obtenerHora( String( usuario?.fechaCreacion ) )}</span>  
                                            </td>
                                            <td className='d-none d-md-table-cell justify-content-center'>
                                                {usuario.codPerfil.nombrePerfil}
                                            </td>
                                            <td className='d-none d-md-table-cell'> {usuario.estadoUsuario===1?'Activo':'Inactivo'} </td>
                                            <td>
                                                {usuario.estadoUsuario === 2 ? ( <button
                                                        className="btn mx-2 btn-md justify-content-center"
                                                        onClick={(e) => { e.preventDefault(); setobjUsu(usuario); setShow(true); }}
                                                    >
                                                        <i className="fa-solid fa-trash-can" style={{ color: '#fc0a0a', }} ></i>
                                                    </button> 
                                                ) : (
                                                   <button className="btn mx-2 btn-md justify-content-center">
                                                        {' '}
                                                        <i className="fa-solid fa-trash-can " style={{ color: '#00000070', }} ></i>
                                                    </button>
                                                )}
                                                <a href={ '/dashboard/updateusers/' + usuario._id } >
                                                    <button className="btn mx-2 btn-md">
                                                        <i className="fa-solid fa-user-pen" style={{ color: '#2626cc', }} ></i>
                                                    </button>
                                                </a>
                                                <a href={'/dashboard/detailsusers/' + usuario._id}> <button className='btn'><i  className="fa-solid fa-magnifying-glass" style={{color: "#050be4"}}></i></button> </a>
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
                                    <strong>{objUsu.nombreUsuario}</strong>
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
                                            borrarUsuario(objUsu._id);
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
