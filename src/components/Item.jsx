import '../App.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


const Item = ({info}) => {
    
    return (
        <>  
            <div className="container mx-auto mt-4">
                <div className="row">
                     <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={info.img} alt={info.alt} />
                                <div className="card-body">
                                    <p className="card-title">{info.name}</p>
                                    <p className="card-subtitle mb-2">{info.brand}</p>
                                    <h3 className="card-text">${info.price}</h3>
                                </div>
                                <div className='container'>
                                    <Link to={`/detalle/${info.id}`}>
                                        <button className="card_button btn mr-2"><span style={{ fontWeight: 'bold' }}>Ver detalles <i class="bi bi-eye-fill"></i></span></button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;