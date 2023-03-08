import React, {useState, useEffect} from 'react'
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import BrandPanel from '../components/BrandPanel';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const {categoryId} = useParams();
    const {brandId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'tools');
        if (categoryId) {
        const queryFilter = query(queryCollection, where('category', '==', categoryId))
        getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
          setTimeout(() => {
              setLoading(false);
            },2000);   
        } else {  
          getDocs(queryCollection)
          .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
          setTimeout(() => {
            setLoading(false);
          },2000);
        }
    },[categoryId])
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'tools');
        if (brandId) {
        const queryFilter = query(queryCollection, where('brand', '==', brandId))
        getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
          setTimeout(() => {
              setLoading(false);
            },2000);   
        } else {  
          getDocs(queryCollection)
          .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
          setTimeout(() => {
            setLoading(false);
          },2000);
        }
    },[brandId])

    if (loading) {
      return <Loading/>;
    }
    return (
        <>
        <div className='itemlist_container'>
        <div className='sidebar'>
        <BrandPanel/>
        </div>
        <div className="item_list overflow-auto">
        <ItemList data={data} />
        </div>
        </div>
        </>
    );
}

export default ItemListContainer;