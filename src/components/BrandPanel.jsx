import React from 'react';
import { NavLink } from 'react-router-dom';

const Panel = () => {
  return (
    <>
    <div className='brandpanel'>
    <h2 className="brandtitle"><span style={{ fontWeight: 'bold' }}>Nuestros partners</span></h2>
    <p className="brandtext">Nuestras marcas asociadas garantizan <u>calidad</u>, <u>rendimiento</u> y <u>seguridad</u>.</p>
    <NavLink to='/marcas/DeWalt'><img className='brandimage'src="./assets/images/dewaltlogo.jpg" alt="Logo DeWalt" /></NavLink>
    <NavLink to='/marcas/Redline'><img className='brandimage'src="./assets/images/redlinelogo.jpg" alt="Logo Redline" /></NavLink>
    <NavLink to='/marcas/Karson'><img className='brandimage'src="./assets/images/karsonlogo.jpg" alt="Logo Karson" /></NavLink>
    <NavLink to='/marcas/Stanley'><img className='brandimage'src="./assets/images/stanleylogo.jpg" alt="Logo Stanley" /></NavLink>
    </div>
    </>
  );
}

export default Panel;

