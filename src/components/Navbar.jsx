import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="container">
            <nav className="nav">
            <div className="nav_brand">
            <NavLink className="nav_link" to='/'><h1 className='h1'>P-TOOLS <small className="text-muted">Para expertos como tú</small></h1></NavLink>
            </div>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav_link" to='/catalogo'>Catálogo</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categorias'>Categorías</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav_link" to='/cart'><CartWidget/></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;