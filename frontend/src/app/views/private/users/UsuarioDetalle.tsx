import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Usuario from '../../../models/Usuario';
import ApiBack from '../../../utils/dominios/ApiBack';
import noFoto from '../../../../assets/img/logo-original.png';
import ServicioPrivado from '../../../services/ServicioPrivado';
import {
    obtenerFechaLocal,
    obtenerHora,
} from '../../../utils/function/FormatoFecha';


export const UsuarioDetalle = () => {
    let { codigo } = useParams();
    const navigate = useNavigate();
    const [todoListo, setTodoListo] = useState<boolean>(false);
    let cargaFinalizada = todoListo !== false;
    const [objUsuario, setObjUsuario] = useState<Usuario>();

    useEffect(() => {
        //consulta los datos de un usuario por su id
        const ObtenerUsuario = async () => {
            const urlCargarUnUsuario =
                ApiBack.USUARIOS_OBTENER_UNO + '/' + codigo;
            const usuRecibido = await ServicioPrivado.peticionGET(
                urlCargarUnUsuario
            );
            if (usuRecibido) {
                setObjUsuario(usuRecibido);
                setTodoListo(true);
            }
        };
        ObtenerUsuario();
    }, [codigo]);
    const imageOnErrorHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        event.currentTarget.src = noFoto;
    };

    return (
        <main id="main" className="main">
            {cargaFinalizada ? (
                <div className="d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Informacion del usuario
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {' '}
                                    nombre : {objUsuario?.nombreUsuario}
                                </h5>
                                <p className="card-text">
                                    Correo: {objUsuario?.correoUsuario}
                                    <br />
                                    Perfil :{' '}
                                    {objUsuario?.codPerfil.nombrePerfil}
                                    <br />
                                    Fecha de Creación{' '}
                                    {obtenerFechaLocal(
                                        String(objUsuario?.fechaCreacion)
                                    )}
                                    <br />
                                    {obtenerHora(
                                        String(objUsuario?.fechaCreacion)
                                    )}
                                    <br />
                                    Estado:{' '}
                                    <span
                                        className={
                                            objUsuario?.estadoUsuario === 1
                                                ? 'text-success'
                                                : 'text-danger'
                                        }
                                    >
                                        {objUsuario?.estadoUsuario === 1
                                            ? 'activo'
                                            : 'inactivo'}
                                    </span>
                                    <br />
                                    Nombre Avatar :{' '}
                                    {objUsuario?.nombreImagenUsuario}
                                    <br />
                                    <br />
                                    <img
                                        onError={imageOnErrorHandler}
                                        src={objUsuario?.avatarUsuario}
                                        alt="profile"
                                        className="maximoTamanoCreacion"
                                    />{'                                        '}
                                </p>
                                <button className='col btn btn-outline-secondary' onClick={()=>navigate(-1)}>Regresar</button>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>cargando</div>
            )}
        </main>
    );
};
