import { React, Component ,  } from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar bg-light navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="https://res.cloudinary.com/merjur/image/upload/v1661797644/birdApp/IMG_5098_shc8ds.jpg" className="icon" alt="icon" width="60" height="48" />
          Inicio</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/birdslist">Listado de Aves</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link " aria-current="page" href="/profile">Perfil</Link>
              </li>
              <li className="nav-item ms-2">
                  <Link className="nav-link btn btn-danger text-white" aria-current="page" href="/logout">Cerrar sesión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/birdslist">Listado de Aves</Link>
              </li>
              <li className="nav-item ms-4">
                  <Link className="nav-link btn btn-secondary text-white" aria-current="page" href="/login">Iniciar Sesión</Link>
              </li>
              <li className="nav-item ms-2">
                  <Link className="nav-link btn btn-primary text-white" aria-current="page" href="/register">Registro</Link>
              </li>
            </ul>
        </div>
      </nav>
      
      
        
    );
};

export default Navbar;