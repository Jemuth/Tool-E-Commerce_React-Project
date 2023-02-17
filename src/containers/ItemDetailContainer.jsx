import React, {useEffect, useState} from 'react';
import ItemDetail from '../components/ItemDetail';

const tool = 
    {
      "id": 1,
      "img": "./assets/images/1.jpg",
      "name": "Taladro Percutor",
      "brand": "DeWalt",
      "price": 360000,
      "description":
        "Taladro Percutor 20V DCD985L2-B2 Dewalt",
      "stock": 10,
      "category": "Electrica"
    };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(tool);
            }, 3000);
        });

        getData.then(res => setData(res));
    },[])
    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;