import '../App.css';
import React from 'react';
import ItemCount from '../components/ItemCount';

const Item = ({info}) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)

    }
    return (
        
        <>
        <a href='' className="tool">
            <img src={info.img} alt="" />
            <h3>{info.name}</h3>
            <p>{info.brand}</p>
            <p>{info.price}</p>
            <p>Tenemos {info.stock} en stock</p>
        </a>
        <ItemCount initial={3} stock={5} onAdd={onAdd}/>
        </>
    );
}

export default Item;