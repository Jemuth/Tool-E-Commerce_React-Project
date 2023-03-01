import React from 'react';

const Loading = () => {
return (
    <div className='loadercontainer'>
        <h3 className='loadertext'>Cargando...</h3>
        <div className="spinner-border" role="status">
  <span className="sr-only"></span>
</div>
        
    </div>
);
}

export default Loading;