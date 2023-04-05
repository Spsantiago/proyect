import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';
export const Erro404 = () => {
    return (
        <div className="Error404">
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h1>404</h1>
                    <h2>La pagina que estas buscando no existe.</h2>
                    <Link className="btn btn-outline-dark" to="/">
                        Volver al Inicio
                    </Link>
                    <img
                        src={logo}
                        className="img-fluid"
                        alt="Page Not Found"
                    />
                    <div >
                        Create by{' '}
                        <Link to="#">
                            Santiago Paredes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
