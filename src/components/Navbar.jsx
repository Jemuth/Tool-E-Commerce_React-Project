import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h1 className='h1'>P-TOOLS <small class="text-muted">Para expertos como tú</small></h1>
            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><a href="#">Eléctricas</a></li>
                    <li class="list-group-item"><a href="#">Manuales</a></li>
                    <li class="list-group-item"><a href="#">Equipo de seguridad</a></li>
                    <li class="list-group-item"><a href="#">Contenedores</a></li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default Navbar;