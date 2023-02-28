import React from 'react';
import { NavLink } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
    <div className= "container_welcome">
      <div className="container">
        <p>BIENVENIDOS A PTOOLS</p>
        <p className="welcometext">Herramientas por <u>expertos</u>, para <u>expertos</u>.</p>
        <div className="welcomelink">
        <NavLink to='/catalogo'><button className="card_button btn mr-2"><span id="welcometext" style={{ fontWeight: 'bold'}}>Ir al catálogo <i className="bi bi-box-arrow-in-right"></i></span></button></NavLink>
        </div>
      </div>
    <img src="./assets/images/welcome.jpg" alt="Bienvenidos a P-Tools" />
    </div>
    </>
  );
}

export default Welcome;