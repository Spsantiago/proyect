import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Bienvenida } from '../../container/Bienvenida';
import { AcercaDe } from '../../views/shared/AcercaDe';
import { Error404 } from '../../views/shared/Error404';
import { PrincipalUser } from '../../views/private/users/PrincipalUser';

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
const LazyBienvenida = lazy(() =>
    import('../../container/Bienvenida').then(() => ({ default: Bienvenida }))
);
const LazyAcercaDe = lazy(() =>
    import('../../views/shared/AcercaDe').then(() => ({ default: AcercaDe }))
);
const LazyError404 = lazy(() =>
    import('../../views/shared/Error404').then(() => ({ default: Error404 }))
);
const LazyPrincipalUser = lazy(() =>
    import('../../views/private/users/PrincipalUser').then(() => ({ default: PrincipalUser }))
);

export const RuteoTablero = () => {
    return (
        <Suspense fallback={cargando}>
            <Routes>
                 <Route path="/principal" element={<LazyPrincipalUser />} />
                <Route path="/" element={<LazyBienvenida />} />
                <Route path="/about" element={<LazyAcercaDe />} />
                <Route path="*" element={<LazyError404 />} />
            </Routes>
        </Suspense>
    );
};
