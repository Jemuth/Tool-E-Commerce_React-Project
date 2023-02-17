import '../App.css';
import React from 'react';

const Item = ({info}) => {
    return (
        <a href='' className="tool">
            <img src={info.img} alt="" />
            <h3>{info.name}</h3>
            <p>{info.brand}</p>
            <p>{info.price}</p>
            <p>{info.description}</p>
            <p>Tenemos {info.stock} en stock</p>
            <p>Categoría: {info.category}</p>
        </a>
    );
}

export default Item;