import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h1 className='h1'>P-TOOLS <small className="text-muted">Para expertos como tú</small></h1>
            <div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="#">Catálogos</a></li>
                    <li className="list-group-item"><a href="#">Categorías</a></li>
                    <li className="list-group-item"><a href="#"><CartWidget/></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;