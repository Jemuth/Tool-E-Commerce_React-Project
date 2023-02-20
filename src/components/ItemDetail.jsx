import React from 'react';
import '../App.css';
import ItemCount from '../components/ItemCount';

const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`)

}

export const ItemDetail = ({data}) => {
    return (
        <>
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.img} alt={data.alt} />
                <div className="content">
                    <h1>{data.name}</h1>
                    <p>{data.brand}</p>
                    <p>{data.price}</p>
                    <p>{data.description}</p>
                    <p>Tenemos {data.stock} en stock</p>
                    <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;