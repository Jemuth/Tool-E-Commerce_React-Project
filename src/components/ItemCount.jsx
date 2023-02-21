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
        <div>
            <button disabled={count <=1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled= {stock <= 0} onClick={() => onAdd(count)}>Agregar al carro</button>
            </div>
        </div>
    );
}

export default ItemCount;