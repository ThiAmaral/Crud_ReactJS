import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from '../pages/List';
import Register from '../pages/Register';
import Update from '../pages/Update';
import Home from '../pages/Home';

const MainRoutes = ()=>{

  return(
    <div class="container">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cliente' element={ <List /> } />
        <Route path='/cadastrarCliente' element={ <Register /> } />
        <Route path='/cliente/:id' element={ <Update /> } />
      </Routes>
    </div>
    
  )
}
export default MainRoutes;
  
