import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Principal } from '../../views/public/Principal';
import { InicioSesion } from '../../views/public/InicioSesion';
import { Registro } from '../../views/public/Registro';
import { Error404 } from '../../views/shared/Error404';
import { Vigilante } from '../../security/Vigitante';
import UsuarioSesion from '../../security/UsuarioSesion';
import { TableroPrincipal } from '../../container/TableroPrincipal';
import { Team } from '../../views/shared/Team';
import { ProductosListado } from '../../views/shared/products/ProductosListado';

/*componentes lazy deben iniciar con mayuscula  */
const LazyPrincipal = lazy(() =>
    import('../../views/public/Principal').then(() => ({ default: Principal }))
);
const LazyInicioSesion = lazy(() =>
    import('../../views/public/InicioSesion').then(() => ({
        default: InicioSesion,
    }))
);
const LazyRegistro = lazy(() =>
    import('../../views/public/Registro').then(() => ({ default: Registro }))
);
const LazyError404 = lazy(() =>
    import('../../views/shared/Error404').then(() => ({ default: Error404 }))
);

const LazyTablero = lazy(() =>
    import('../../container/TableroPrincipal').then(() => ({
        default: TableroPrincipal,
    }))
);
const LazyTeam = lazy(() =>
    import('../../views/shared/Team').then(() => ({
        default: Team,
    }))
);
const LazyProducts = lazy(() =>
import('../../views/shared/products/ProductosListado').then(() => ({
    default: ProductosListado,
}))
);

export const Ruteo = () => {
    return (
        <UsuarioSesion>
            <Routes>
                <Route path="/" element={<LazyPrincipal />} />
                <Route path="/team" element={<LazyTeam />} />

                <Route path="/inicioSesion" element={<LazyInicioSesion />} />
                <Route path="/Registro" element={<LazyRegistro />} />
                <Route path="/productos" element={<LazyProducts/>} />

                <Route element={<Vigilante/>}>
                    <Route path="/dashboard/*" element={<LazyTablero />} />
                </Route>
                <Route path="*" element={<LazyError404 />} />
            </Routes>
        </UsuarioSesion>
    );
};
