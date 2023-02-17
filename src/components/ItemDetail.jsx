import React from 'react';
import '../App.css';

export const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.img} alt="" />
                <div className="content">
                    <h1>{data.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;