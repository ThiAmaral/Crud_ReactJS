import React from 'react';
import Header from './Header';
import Routes from '../routes/Routes';
import Footer from './Footer';

const Index = ()=>{

  return(
    <div class="container">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default Index;