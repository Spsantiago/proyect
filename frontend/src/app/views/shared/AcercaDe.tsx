import card from '../../../assets/img/imagen-removebg-preview.png';

export const AcercaDe = () => {
    return (
        <main id="main" className="main colorB">
            <div className="pagetitle">
                <h1>Acerca de ...</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            {' '}
                            <a href="index.html">Inicio</a>
                        </li>

                        <li className="breadcrumb-item active">
                            Desarrolladores
                        </li>
                    </ol>
                </nav>{' '}
            </div>

            <div className="mt-4 row justify-content-around">
                    <div className="card col-md">
                        <img src={card} className='card-img-top logo' alt="..." />{' '}
                        <div className="card-body">
                            <h5 className="card-title">Roger Bernal</h5>

                            <p className="card-text">Fundador</p>

                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                </div>

                <div className="card col-md">
                    <img src={card} className="card-img-top logo" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">Santiago Paredes</h5>{' '}
                        <p className="card-text">Developer</p>
                        <p className="card-text">
                            {' '}
                            <small className="text-muted">...</small>
                        </p>
                    </div>
                </div>

              
          
                    
                
            </div>
        </main>
    );
};
