import Item from './Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return (
        data.map(tool => <Item key={toolbar.id} info={tool}/>)
    );
}

export default ItemList;