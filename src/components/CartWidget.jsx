import React from 'react';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
const {totalProducts} = useCartContext();
  
  return (
    <div className="cart_container">
        <i className="bi bi-cart2"></i>
        <p><span style={{ fontWeight: 'bold' }}>{totalProducts() || ''}</span></p>
    </div>
  );
}

export default CartWidget;
