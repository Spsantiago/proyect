import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Bienvenida } from '../../container/Bienvenida';
import { Team } from '../../views/shared/Team';
import { Error404 } from '../../views/shared/Error404';
import { PrincipalUser } from '../../views/private/users/PrincipalUser';
import { PerfilListado } from '../../views/private/perfils/PerfilListado';
import { PerfilCrear } from '../../views/private/perfils/PerfilCrear';
import { PerfilAdmin } from '../../views/private/perfils/PerfilAdmin';
import { PerfilActual } from '../../views/private/perfils/PerfilActual';
import { UsuarioListado } from '../../views/private/users/UsuarioListado';
import { UsuarioDetalle } from '../../views/private/users/UsuarioDetalle';
import { UsuarioCrear } from '../../views/private/users/UsuarioCrear';
import { UsuarioAdmin } from '../../views/private/users/UsuarioAdmin';
import { UsuarioActual } from '../../views/private/users/UsuarioActual';
import { ProductosListado } from '../../views/shared/products/ProductosListado';
const cargando = (
    <div className="d-flex justify-content-center">
        <div className="mt-3">
            <button
                className="btn btn-outline-secondary"
                type="button"
                disabled
            >
                <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                />
                Cargando ...
            </button>
        </div>
    </div>
);
const LazyBienvenida = lazy(() => import('../../container/Bienvenida').then(() => ({ default: Bienvenida })) );
const LazyTeam = lazy(() => import('../../views/shared/Team').then(() => ({ default: Team })) );
const LazyError404 = lazy(() => import('../../views/shared/Error404').then(() => ({ default: Error404 })) );
const LazyPrincipalUser = lazy(() => import('../../views/private/users/PrincipalUser').then(() => ({ default: PrincipalUser })) );
const LazyPerfilListado = lazy(() => import('../../views/private/perfils/PerfilListado').then(() => ({ default: PerfilListado })) );
const LazyPerfilCrear = lazy(() => import('../../views/private/perfils/PerfilCrear').then(() => ({ default: PerfilCrear })) );
const LazyPerfilAdmin = lazy(() => import('../../views/private/perfils/PerfilAdmin').then(() => ({ default: PerfilAdmin })) );
const LazyPerfilActual = lazy(() => import('../../views/private/perfils/PerfilActual').then(() => ({ default: PerfilActual })) );
const LazyUsuarioListado = lazy(() => import('../../views/private/users/UsuarioListado').then(() => ({ default: UsuarioListado })) );

const LazyUsuarioActual = lazy(() => import('../../views/private/users/UsuarioActual').then(() => ({ default: UsuarioActual })) );
const LazyUsuarioAdmin = lazy(() => import('../../views/private/users/UsuarioAdmin').then(() => ({ default: UsuarioAdmin })) );
const LazyUsuarioCrear = lazy(() => import('../../views/private/users/UsuarioCrear').then(() => ({ default: UsuarioCrear })) );
const LazyUsuarioDetalle = lazy(() => import('../../views/private/users/UsuarioDetalle').then(() => ({ default: UsuarioDetalle })) );
const LazyProductosListado = lazy(() => import('../../views/shared/products/ProductosListado').then(() => ({ default: ProductosListado  })) );


export const RuteoTablero = () => {
    return (
        <Suspense fallback={cargando}>
            <Routes>
                <Route path="/principal" element={<LazyPrincipalUser />} />
                <Route path="/listprofiles" element={<LazyPerfilListado />} />
                <Route path="/addprofile" element={<LazyPerfilCrear />} />
                <Route path="/adminprofile" element={<LazyPerfilAdmin />} />
                <Route path="/updateprofile/:codigo" element={<LazyPerfilActual />} />
                <Route path="/addusers" element={<LazyUsuarioCrear />} />
                <Route path="/adminusers" element={<LazyUsuarioAdmin />} />
                <Route path="/updateusers/:codigo" element={<LazyUsuarioActual />} />
                <Route path="/detailsusers/:codigo" element={<LazyUsuarioDetalle />} />
                <Route path="/listusers" element={<LazyUsuarioListado />} />
                <Route path="/listproducts" element={<LazyProductosListado />} />

                <Route path="/" element={<LazyBienvenida />} />
                <Route path="/team" element={<LazyTeam />} />
                <Route path="*" element={<LazyError404 />} />
            </Routes>
        </Suspense>
    );
};
