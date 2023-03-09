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
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
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
    <p><span style={{ fontWeight: 'bold' }}>Tu total a pagar es: ${totalPrice()}</span></p>
    <p><span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Ingresa tus datos</span></p>
    <form>
          <div className="inputForm">
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" defaultValue="John Doe" />
          </div>
          <div className="inputForm">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" defaultValue="johndoe@gmail.com" />
          </div>
          <div className="inputForm">
            <label htmlFor="phone">Teléfono</label>
            <input id="phone" type="phone" defaultValue="202-555-0168" />
          </div>
          <div className="inputForm">
            <label htmlFor="adress">Dirección</label>
            <input id="adress" type="adress" defaultValue="2700 Butterfield Coach Rd" />
          </div>
        </form>
      <button onClick={handleClick} className= "card_button btn mr-2">Enviar orden de compra</button>
    </div>
  </div>
  );
}

export default Cart;
