import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
            <nav className="navbar px-3 navbar-expand-lg">
            <NavLink className="navbar-brand" to='/'><img src="/assets/images/brandlogo.png" alt="Logo Ptools" /></NavLink>
            <div className="navbar_links" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav_link" to='/catalogo'><span id="navtext" style={{ fontWeight: 'bold'}}>Catálogo</span></NavLink>
                    </li>
                    <li className="nav-item  dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span id="navtext" style={{ fontWeight: 'bold'}}>Categorías</span>
                        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to='/categorias/manuales'>Herramientas manuales</NavLink>
                        <NavLink className="dropdown-item" to='/categorias/electricas'>Herramientas eléctricas</NavLink>
                        <NavLink className="dropdown-item" to='/categorias/epp'>Equipo de protección personal</NavLink>
                    </div>
                    </li>
                </ul>
            </div>
            <NavLink className="cart_link" to='/cart'><CartWidget/></NavLink>
            </nav>
    );
}

export default Navbar;