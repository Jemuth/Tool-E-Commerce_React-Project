import React from 'react';
import {useState} from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2'


const Cart = () => {
  
  const { cart, totalPrice } = useCartContext();

  const [nombre, setNombre] = useState('Ingrese nombre');
  const [apellido, setApellido] = useState('Ingrese apellido');
  const [fono, setFono] = useState('Ingrese teléfono');
  const [correo, setCorreo] = useState('Ingrese correo');
  const [validarCorreo, setValidarCorreo] = useState('Ingrese nuevamente correo')



  const nombreHandleChange = event => {
    setNombre(event.target.value);
  };
  const apellidoHandleChange = event => {
    setApellido(event.target.value);
  };
  const fonoHandleChange = event => {
    setFono(event.target.value);
  };
  const correoHandleChange = event => {
    setCorreo(event.target.value);
  };
  const validarCorreoHandleChange = event => {
    setValidarCorreo(event.target.value);
  };

  const order = {
    buyer: {
      name: nombre,
      surname: apellido,
      phone: fono,
      email: correo
    },
    items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  
  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    Swal.fire({
      title: 'Tu orden ha sido ingresada',
      text: 'Recibirás en tu correo una copia de la orden de compra',
      imageUrl: 'https://raw.githubusercontent.com/Jemuth/PreEntregaI-JuanJana/main/public/assets/images/alert.jpg',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Trabajadores',
      confirmButtonColor: '#ff7919',
    })}


  if (cart.length === 0) {
    return (
      <>
      <div className='emptyCart'>
      <i className="bi bi-emoji-frown"></i>
        <p>No hay productos en el carro</p>
        <NavLink to='/catalogo'><button className="card_button btn mr-2"><span id="welcometext" style={{ fontWeight: 'bold'}}>Ir al catálogo <i className="bi bi-box-arrow-in-right"></i></span></button></NavLink>
      </div>
      </>
    );
  }
  return (
    <div className="cart">
    <p className='checkouttext'>Checkout</p>
    {
      cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <div className='checkoutForm'>
    <h3><span style={{ fontWeight: 'bold' }}>Tu orden de compra</span></h3>
    <p><span style={{ fontWeight: 'bold' }}>Total a pagar: ${totalPrice()}</span></p>
    <p><span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Ingresa tus datos</span></p>
    <form>
          <div className="inputForm">
            <label align="right" htmlFor="name">Nombre</label>
            <input align="left" id="name" type="text" onChange={nombreHandleChange} defaultValue={nombre}/>
          </div>
          <div className="inputForm">
            <label align="right" htmlFor="email">Apellido</label>
            <input align="left" id="email" type="text" onChange={apellidoHandleChange} defaultValue={apellido}/>
          </div>
          <div className="inputForm">
            <label align="right" htmlFor="phone">Teléfono</label>
            <input align="left" id="phone" type="phone" onChange={fonoHandleChange} defaultValue={fono}/>
          </div>
          <div className="inputForm">
            <label align="right" htmlFor="adress">Correo</label>
            <input align="left" id="adress" type="text" onChange={correoHandleChange} defaultValue={correo}/>
          </div>
          <div className="inputForm">
            <label align="right" htmlFor="adress">Verifique correo</label>
            <input align="left" id="adress" type="text" onChange={validarCorreoHandleChange} defaultValue={validarCorreo}/>
          </div>
        </form>
      <button disabled={correo != validarCorreo} onClick={handleClick} className= "card_button btn mr-2"><span style={{ fontWeight: 'bold'}}>Enviar orden de compra</span></button>
      <Link to='/catalogo'><button className="card_button btn mr-2"><span style={{ fontWeight: 'bold' }}>Seguir comprando <i className="bi bi-currency-dollar"></i></span></button></Link>
    </div>
  </div>
  );
}

export default Cart;
