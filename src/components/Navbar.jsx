import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h1 className='h1'>P-TOOLS <small className="text-muted">Para expertos como tú</small></h1>
            <div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="#">Eléctricas</a></li>
                    <li className="list-group-item"><a href="#">Manuales</a></li>
                    <li className="list-group-item"><a href="#">Equipo de seguridad</a></li>
                    <li className="list-group-item"><a href="#">Contenedores</a></li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default Navbar;