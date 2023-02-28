import React from 'react';
import { useCartContext } from '../context/CartContext';
import '../App.css';

const ItemCart = ({ product }) => {
const { removeProduct } = useCartContext();

  return (
    <div className='itemCart'>
        <img src={product.img} alt={product.name} />
        <div>
            <p>{product.description}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio por unidad: ${product.price}</p>
            <p><span style={{ fontWeight: 'bold' }}>Subtotal: ${product.quantity * product.price}</span></p>
            <button className='card_button btn mr-2' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
  )
}

export default ItemCart
