import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';
import { MenuSuperior } from '../../container/MenuSuperior';
export const Error404 = () => {
    return (
        <div
            id="main"
            className=" colorB min-vh-100 d-flex flex-column align-items-center justify-content-center"
        >
            <MenuSuperior/>
            <h1>404</h1>
            <h2>La pagina que estas buscando no existe.</h2>
            <Link className="btn btn-outline-dark" to="/dashboard">
                Volver al Inicio
            </Link>
            <Link to="/dashboard">
                <img src={logo} className="img-fluid" alt="Page Not Found" />
            </Link>
            
            <div  className="footer-legal">
                    <div className="container">
                        <div className="copyright">
                           Copyright&copy;{' '} 
                            <strong>
                                <a href='https://instagram.com/mspp._10?igshid=ZDdkNTZiNTM=' target='_blank' rel="noreferrer">Santiago Paredes</a>
                            </strong>
                            . All Rights Reserved
                        </div>
                    </div>
                </div>
        </div>
    );
};
