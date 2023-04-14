import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MensajeTostify = (
    tipo: string,
    texto: string,
    milisegundos: number
) => {
    const opcion = String(tipo.toLowerCase());

    switch (opcion) {
        case 'error':
            toast.error(texto, {
                position: 'top-right',
                autoClose: milisegundos,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            break;
        case 'success':
            toast.success(texto, {
                position: 'top-right',
                autoClose: milisegundos,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            break;
        case 'info':
            toast.info(texto, {
                position: 'top-right',
                autoClose: milisegundos,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            break;
        case 'warn':
            toast.warn(texto, {
                position: 'top-right',
                autoClose: milisegundos,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            break;
        default:
        console.log ('la opcion no exite ')
            break;
    }
};
