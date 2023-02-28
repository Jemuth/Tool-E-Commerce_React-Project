import React from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

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
    <div className='itemCart'>
      Total: ${totalPrice()}
    </div>
    </div>
  );
}

export default Cart;
