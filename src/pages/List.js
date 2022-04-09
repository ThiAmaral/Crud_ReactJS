import React, { useEffect, useState } from 'react';
import ClientService from '../services/ClientService';
import { useNavigate } from 'react-router-dom';

const List = ()=> {
  //Primeira página!
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(  ()=>{
      async function loadClient(){
        const clientService = new ClientService();
        setLoading(true);
        setClients(await clientService.getAll());
        setLoading(false);
      }
      loadClient();
    }, []
  );

  return(
    <section>
      {/* Listar Usuários */}
      {loading ?
        <p>Carregando!</p>
      :
        <div>
          <div class="card">
            <h5 class="card-header">Clientes</h5>
            <div class="card-body">
              {clients.map( (client)=>
              <div>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  {client.first_name}
                  <div class="d-grid gap-2 d-md-block">
                    <button class="btn btn-primary" type="button" onClick={()=> navigate(`/cliente/${client.id}`)}>Editar</button>
                  </div>
                </li>
              </div>
              )}
              <div class="d-grid gap-2 d-md-flex justify-content-md-left mt-3">
                <button 
                  class="btn btn-primary me-md-2"
                  type="button" 
                  onClick={()=> navigate('/cadastrarCliente')}
                >
                  Novo usuário
                </button>
                <button 
                  class="btn btn-primary"
                  type="button"
                  onClick={()=> navigate(-1)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  );
}

export default List;