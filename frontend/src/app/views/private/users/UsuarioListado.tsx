import { useState, useEffect } from 'react';

import ApiBack from '../../../utils/dominios/ApiBack';
import ServicioPrivado from '../../../services/ServicioPrivado';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../../models/Usuario';
import {
    obtenerFechaLocal,
    obtenerHora,
} from '../../../utils/function/FormatoFecha';

export const UsuarioListado = () => {
    const [aregloUsuarios, setaregloUsuarios] = useState<Usuario[]>([]);

    const obtenerUsuario = async () => {
        const resultado = await ServicioPrivado.peticionGET(
            ApiBack.USUARIOS_OBTENER
        );
        setaregloUsuarios(resultado);
        return resultado;
    };

    useEffect(() => {
        obtenerUsuario();
    }, []);
    const navigate= useNavigate()

    return (
        <div>
            <main id="main" className="main">
                <div className="pagetitle ">
                    <h1>Usuarios</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboar">Inicio</Link>
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
                            <table className="table table-hover table-responsive-sm">
                                <thead>
                                    <tr>
                                        <th>Nro</th>
                                        <th>Usuario</th>
                                        <th>Creación</th>
                                        <th>Perfil</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {aregloUsuarios.map((usuario, indice) => (
                                        <tr key={indice}>
                                            <td>{indice + 1}</td>
                                            <td>
                                                {usuario.nombreUsuario}
                                                <br />
                                                <span className="small color-gray">
                                                    {usuario.correoUsuario}
                                                </span>
                                            </td>
                                            <td>
                                                {obtenerFechaLocal( String( usuario?.fechaCreacion ) )}
                                              <br />
                                              <span className='small color-gray'>{obtenerHora( String( usuario?.fechaCreacion ) )}</span>  
                                            </td>
                                            <td>{usuario.codPerfil.nombrePerfil}</td>
                                            <td>{usuario.estadoUsuario===1?'Activo':'Inactivo'}</td>
                                            <td>
                                              <button onClick={()=>navigate('/dashboard/detailsusers/' + usuario._id)} className='btn'><i  className="fa-solid fa-magnifying-glass" style={{color: "#050be4"}}></i></button>
                                              
                                             </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
