import './App.css'
import React from 'react';

import Cart from './components/Cart';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartProvider from './context/CartContext';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
  <BrowserRouter>
  <CartProvider>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/catalogo' element={<ItemListContainer />} />
    <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/detalle/:detailId' element={ <ItemDetailContainer />} />
  </Routes>
  </CartProvider>
  </BrowserRouter>
  </>
  );
}

export default App;