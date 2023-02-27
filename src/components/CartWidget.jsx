import React from 'react';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
const {totalProducts} = useCartContext();
  
  return (
    <div className="cart_container">
        <i className="bi bi-cart2"></i>
        <p><span style={{ fontWeight: 'bold' }}>Tienes {totalProducts() || '0'} producto(s) en tu carro</span></p>
    </div>
  );
}

export default CartWidget;
