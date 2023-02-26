import React from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
      </>
    );
  }
  return (
    <div className="cart">
    {
      cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p>
      Total: ${totalPrice()}
    </p>
    </div>
  );
}

export default Cart;
