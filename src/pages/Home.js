import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div class="card text-center">
        <div class="card-header">
          Home
        </div>
        <div class="card-body">
          <button class="btn btn-primary" onClick={() => navigate('/cliente')}>Clientes</button>
        </div>  
      </div>
    </section>
  );
}
export default Home;