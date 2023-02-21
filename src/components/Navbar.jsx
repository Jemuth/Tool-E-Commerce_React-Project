import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
            <nav className="navbar px-3 navbar-expand-lg">
            <NavLink className="navbar-brand" to='/'>ImagenLogo</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav_link" to='/catalogo'>Catálogo</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorías
                        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to='/categorias/manuales'>Herramientas manuales</NavLink>
                        <NavLink className="dropdown-item" to='/categorias/electricas'>Herramientas eléctricas</NavLink>
                        <NavLink className="dropdown-item" to='/categorias/epp'>Equipo de protección personal</NavLink>
                    </div>
                    </li>
                    
                    <li>
                    <NavLink className="nav_link" to='/cart'><CartWidget/></NavLink>
                    </li>
                </ul>
            </div>
            </nav>
    );
}

export default Navbar;