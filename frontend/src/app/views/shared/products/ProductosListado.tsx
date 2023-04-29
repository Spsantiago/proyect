import { useState, useEffect } from 'react';
import ApiBack from '../../../utils/dominios/ApiBack';
import ServicioPrivado from '../../../services/ServicioPrivado';
import Productos from '../../../models/Productos';
import noFoto from '../../../../assets/img/cta-bg.jpg';

export const ProductosListado = () => {
    const [todoListo, setTodoListo] = useState<boolean>(false);
    let cargaFinalizada = todoListo !== false;
    const [arregloProductos, setarregloProductos] = useState<Productos[]>([]);

    const obtenerProducto = async () => {
        const resultado = await ServicioPrivado.peticionGET(
            ApiBack.PRODUCTOS_OBTENER
        );
        setarregloProductos(resultado);
        setTodoListo(true);
        return resultado;
    };

    useEffect(() => {
        obtenerProducto();
    }, []);

    const imageOnErrorHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        event.currentTarget.src = noFoto;
    };
    return (
        <div>
            {cargaFinalizada ? (
                <section id="team" className="team colorB">
                    <div
                        className="container aos-init aos-animate"
                        data-aos="fade-up"
                    >
                        <div className="section-header">
                            <h2>Productos</h2>
                            <p>
                            
                            </p>
                        </div><div className="row gy-5">
                        {arregloProductos.map((producto, index) => (
                            
                                <div
                                    className="col-xl-4 col-md-6 d-flex"
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                >
                                    <div className="team-member">
                                        <div className="member-img">
                                            <img
                                                onError={imageOnErrorHandler}
                                                src={producto.avatarProducto}
                                                className="img-fluid rounded-circle"  
                                                alt="Imagen Producto"
                                            />
                                        </div>
                                        <div className="member-info">
                                            <h4>{producto.nombreProducto}</h4>
                                            <span>
                                                {' '}
                                                {producto.descripcion}{' '}
                                            </span>
                                            <span> {producto.valor} </span>
                                            <button className='btn '>agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            
                            
                        ))}</div>
                    </div>
                </section>
            ) : (
                'cargando'
            )}
        </div>
    );
};
