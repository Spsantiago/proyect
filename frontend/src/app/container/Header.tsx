import { MouseEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContextoUsuario } from '../security/ContextoUsuario';
import { OcultarMenu } from '../utils/function/OcultarMenu';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';

export const Header = () => {
    const navegacion = useNavigate();
    const miUsuario = useContext(ContextoUsuario);
    const correoUsuario = miUsuario?.autenticado.correo;
    const cerrarSesion = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        localStorage.removeItem('token');
        navegacion('/inicioSesion');
    };

    return (

        <header id="header" className="header fixed-top d-flex align-items-center">
        
        <div className="d-flex align-items-center justify-content-between">
        
        <a href="index.html" className="logo d-flex align-items-center"> <img src="assets/img/logo.png" alt="" />
        
        <span className="d-none d-lg-block">MisiónTIC 2022</span>
        
        </a>
};

<script src="../../assets/js/main.js"></script>;
