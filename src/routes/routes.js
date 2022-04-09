import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from '../pages/List';
import Home from '../pages/Home';
import Register from '../pages/Register';

const MainRoutes = ()=>{

  return(
    <div>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/cliente' element={ <List /> } />
        <Route path='/cadastrarCliente' element={ <Register/> } />
      </Routes>
    </div>
    
  )
}
export default MainRoutes;
  
