import React from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';
import { NavLink } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '202-555-0168',
      adress: '2700 Butterfield Coach Rd'
    },
    items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id))
    Swal.fire({
      title: 'Tu orden ha sido ingresada',
      text: 'Recibirás en tu correo una copia de la orden de compra',
      imageUrl: 'https://raw.githubusercontent.com/Jemuth/PreEntregaI-JuanJana/main/public/assets/images/alert.jpg',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Trabajadores',
      confirmButtonColor: '#ff7919',
    })
  }

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
            <input align="left" id="name" type="text" defaultValue="John Doe" />
          </div>
          <div className="inputForm">
            <label align="right" htmlFor="email">Correo@</label>
            <input align="left" id="email" type="text" defaultValue="johndoe@gmail.com" />
          </div>
          <div className="inputForm">
            <label align="right" htmlFor="phone">Teléfono</label>
            <input align="left" id="phone" type="phone" defaultValue="202-555-0168" />
          </div>
          <div className="inputForm">
            <label align="right" htmlFor="adress">Dirección</label>
            <input align="left" id="adress" type="adress" defaultValue="2700 Butterfield Coach Rd" />
          </div>
        </form>
      <button onClick={handleClick} className= "card_button btn mr-2">Enviar orden de compra</button>
    </div>
  </div>
  );
}

export default Cart;
