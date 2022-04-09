import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService';

const UpdateForm = () => {
  const clientService = new ClientService();
  const navigate = useNavigate();
  const clientId = useParams();
  const [data, setData] = useState({
    name: "",
    job: "",
  })
  //Post
  const handleSubmit = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  //Update
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState();

  const updateClient = (e, id) => {
    e.preventDefault();
    clientService.update(data, id);
  }

  useEffect( ()=>{
    async function loadClient(id){
      const clientService = new ClientService();
      setLoading(true);
      setClients(await clientService.getId(id));
      setLoading(false);
    }
    loadClient(clientId);
  }, [clientId]
);

  //Teste

  // const imprimir = (e)=>{
  //   e.preventDefault();
  //   if(onSave){
  //     console.log(e);
  //   }
  // }

  //Fim do Teste

  return (
    <section>
      {loading ?
        <h1>Carregando</h1>
        :
        < div class="card">
          <h5 class="card-header">Editar Cliente</h5>
          <div class="card-body">
            <form onSubmit={(e) => updateClient(e, clients)}>
              <div class="form-group">
                
                <label for="name">Usuário</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                  placeholder="Nome do usuário"
                  onChange={(e) => handleSubmit(e)}
                  value={data.name}
                />
                <small id="nameHelp" class="form-text text-muted">Digite o nome de um novo usuário</small>
              </div>
              <div class="form-group">
                <label for="job">Cargo</label>
                <input
                  type="text"
                  class="form-control"
                  id="job"
                  aria-describedby="jobHelp"
                  placeholder="Nome do cargo"
                  onChange={(e) => handleSubmit(e)}
                  value={data.job}
                />
                <small id="jobHelp" class="form-text text-muted">Digite o nome de um novo usuário</small>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-left mt-4">
                <button type="submit" class="btn btn-primary me-md-2">Atualizar</button>
                <button type="button" class="btn btn-primary" onClick={() => navigate(-1)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      }
      
    </section >
  );
}

export default UpdateForm;