import React, {useState, useEffect} from 'react';
import '../App.css';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return ( 
        <div className="item_count">
            <div className="count_buttons_container">
            <button className="count_buttons card_button btn mr-2" disabled={count <=1} onClick={decrease}>-</button>
            <span style={{ fontWeight: 'bold' }}>{count}</span>
            <button className="count_buttons card_button btn mr-2" disabled={count >= stock} onClick={increase}>+</button>
            </div>
            <div>
                <button className="count_buttons card_button btn mr-2" disabled= {stock <= 0} onClick={() => onAdd(count)}><span style={{ fontWeight: 'bold' }}>Agregar al carro <i class="bi bi-cart2"></i></span></button>
            </div>
        </div>
    );
}

export default ItemCount;