import React, {useState} from 'react';
import '../App.css';
import ItemCount from '../components/ItemCount';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
}
    return (
        <>
            <div className="item_detail">
                <div className="card">
                <img className="card-img-detail card-img-top" src={data.img} alt={data.alt} />
                    <h2 className="card-title">{data.name}</h2>
                    <p className="card-text">Marca: {data.brand}</p>
                    <h3 className="card-text">${data.price}</h3>
                    <p className="card-text">Tenemos <span style={{ fontWeight: 'bold' }}>{data.stock}</span> en stock</p>
                </div>
                <div className="review_container">
                <h2 className="card-text"><span style={{ fontWeight: 'bold' }}>{data.description}</span></h2>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non elit a orci dapibus lobortis. Nulla imperdiet, turpis in tempus luctus, ante dolor pulvinar ipsum, et euismod dolor sapien et lacus. Nunc quis efficitur massa. Donec volutpat neque et leo aliquam, at aliquam arcu mattis. Phasellus ut mi risus. Phasellus convallis volutpat orci, sit amet posuere elit cursus vitae. Proin lacinia lacus mauris, eget egestas arcu varius non. Maecenas malesuada aliquet mattis. Aliquam non turpis blandit, lobortis nisl ut, luctus metus. Proin cursus dui eget hendrerit bibendum.
                In id rhoncus ex. Pellentesque blandit sed est nec convallis. Etiam ut magna ac nisl egestas congue.</p>
                {
                    goToCart 
                        ? <Link to='/cart'><button>Terminar compra</button></Link>
                        : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
                }
                </div>
            </div>
        </>
    );
}

export default ItemDetail;