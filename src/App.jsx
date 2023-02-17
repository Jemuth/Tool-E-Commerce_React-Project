import './App.css'

import Cart from './components/Cart'
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/catalogo' element={<ItemListContainer />} />
    <Route path='/categorias' element={<ItemListContainer />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/detalle' element={ <ItemDetailContainer />} />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;