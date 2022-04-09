import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ()=>{
  const navigate = useNavigate();

  return(
    <section>
      <p>Dashboard</p>
      <button onClick={()=>navigate('/cliente')}>Clientes</button>
    </section>
  )
}
export default Home;