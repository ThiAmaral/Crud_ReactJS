import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from '../pages/List';
// import Register from '../pages/Register';
// import Update from '../pages/Update';
import Home from '../pages/Home';
import RegisterForm from '../pages/RegisterForm';
import UpdateForm from '../pages/UpdateForm';

const MainRoutes = ()=>{

  return(
    <div class="container">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cliente' element={ <List /> } />
        <Route path='/cadastrarCliente' element={ <RegisterForm /> } />
        <Route path='/cliente/:id' element={ <UpdateForm /> } />
      </Routes>
    </div>
    
  )
}
export default MainRoutes;
  
