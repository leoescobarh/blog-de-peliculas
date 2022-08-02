import { Link } from 'react-router-dom';

//componentes import

import Buscador from  './Buscador';
function Header (){

    return(

            <header>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">PelisLeo</a>                                                        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                    <ul className="navbar-nav">
                        <li className="text-end">
                        <Link to="/" className="nav-link active" aria-current="page"> Inicio</Link>
                        </li>
                        <li>
                        <Link to="/Listado" className="nav-link active"> Listados</Link>
                        </li>
                        <li>
                        <Link to="/contacto" className="nav-link active"> Contacto</Link>
                        </li>
                    </ul>
                    
                    </div>
                    
                    </div>
                    <Buscador/>
                    </div>
                </nav>
            </header>


    )
}

export default Header;