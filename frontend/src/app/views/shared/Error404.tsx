import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';

export const Error404 = () => {
    const navigate = useNavigate()
    return (
        <div
            className=" colorB min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>404</h1>
            <h2>La pagina que estas buscando no existe.</h2>
            <button className="btn btn-outline-dark" onClick={()=>{navigate(-1)}}>
               Regresar
            </button>
            <Link to=''onClick={()=>{navigate(-1)}}>
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
