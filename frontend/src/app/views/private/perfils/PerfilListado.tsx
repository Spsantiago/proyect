import { useState, useEffect } from 'react';
import Perfil from '../../../models/Perfil';
import ApiBack from '../../../utils/dominios/ApiBack';
import ServicioPrivado from '../../../services/ServicioPrivado';
import { Link } from 'react-router-dom';

export const PerfilListado = () => {
    const [aregloPerfiles, setaregloPerfiles] = useState<Perfil[]>([]);

    const obtenerPerfiles = async () => {
        const resultado = await ServicioPrivado.peticionGET(
            ApiBack.PERFILES_OBTENER
        );
        setaregloPerfiles(resultado);
        return resultado;
    };

    useEffect(() => {
        obtenerPerfiles();
    }, []);

    return (
        <div >
            <main id="main" className="main ">
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
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th style={{ width: '20%' }}>#</th>
                                        <th style={{ width: '55%' }}>Nombre</th>
                                        <th style={{ width: '15%' }}>Estado</th>
                                        <th style={{ width: '10%' }}>Usuarios</th>
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
                                            <td className='text-center'>{perfil.cantUsuarios}</td>
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
