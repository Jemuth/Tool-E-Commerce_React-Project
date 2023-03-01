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
            <p className='detailtext'>Detalle de producto</p>
            <div className="item_detail">
                <div className='review_container'>
                <div className="detail_image_container">
                <img className="detail_image" src={data.img} alt={data.alt} />
                </div>
                <div className="review_text_container">
                <h2 className="card-text"><span style={{ fontWeight: 'bold' }}>{data.brand}</span></h2>
                <h3 className="card-text"><span>{data.description}</span></h3>
                <p className="lorem"><span style={{ fontWeight: 'bold' }}>Características</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non elit a orci dapibus lobortis. Nulla imperdiet, turpis in tempus luctus, ante dolor pulvinar ipsum, et euismod dolor sapien et lacus. Nunc quis efficitur massa. Donec volutpat neque et leo aliquam, at aliquam arcu mattis. Phasellus ut mi risus. Phasellus convallis volutpat orci, sit amet posuere elit cursus vitae. Proin lacinia lacus mauris, eget egestas arcu varius non. Maecenas malesuada aliquet mattis. 
                </p>
                <h3 className="card-text">${data.price}</h3>
                <p className="card-text">Tenemos <span style={{ fontWeight: 'bold' }}>{data.stock}</span> en stock</p>
                {
                    goToCart 
                        ? <Link to='/cart'><button className="card_button btn mr-2"><span style={{ fontWeight: 'bold' }}>Ir al carro <i className="bi bi-cart-fill"></i></span></button></Link>
                        : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
                }
                <Link to='/catalogo'><button className="card_button btn mr-2"><span style={{ fontWeight: 'bold' }}>Seguir comprando <i className="bi bi-currency-dollar"></i></span></button></Link>
                </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;