import '../App.css';
import React from 'react';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';

const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`)

}
const Item = ({info}) => {
    return (
        <>
        <Link to={`/detalle/${info.id}`} className="tool">
            <img src={info.img} alt={info.alt} />
            <h3>{info.name}</h3>
            <h4>{info.brand}</h4>
            <p>{info.price}</p>
            <p>Tenemos {info.stock} en stock</p>
        </Link>
        </>
    );
}

export default Item;