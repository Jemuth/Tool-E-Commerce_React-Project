import React, {useEffect, useState} from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'tools', detailId );
        getDoc(queryDoc)
        .then(res => setData({ id:res.id, ...res.data() }))
        setTimeout(() => {
          setLoading(false);
    }, 2000);
    },[detailId])
    if (loading) {
      return <Loading/>;
    }
    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;
