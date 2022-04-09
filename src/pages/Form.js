import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService';

const Form = (onSave) => {
  //Segunda Página!
  const clientService = new ClientService();
  const navigate = useNavigate();
  const clientId = useParams();
  const [data, setData] = useState({
    name: "",
    job: "",
  })
  //Post
  const handleSubmit = (e)=>{
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  const saveClient = (e)=>{
    e.preventDefault();
    clientService.post(data);
  }

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
      {/* Formulário */}
      <div class="card-body">
        <form onSubmit={ (e)=> saveClient(e) }>
          <div class="form-group">
            <label for="name">Usuário</label>
            <input 
              type="text"
              class="form-control"
              id="name" 
              aria-describedby="nameHelp"
              placeholder="Nome do usuário" 
              onChange={ (e)=> handleSubmit(e) }
              value={ data.name }
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
              onChange={ (e)=> handleSubmit(e) }
              value={ data.job }
            />
              <small id="jobHelp" class="form-text text-muted">Digite o nome de um novo usuário</small>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-left mt-4">
            <button type="submit" class="btn btn-primary me-md-2">Submit</button>
            <button type="button" class="btn btn-primary me-md-2" onClick={(e)=> updateClient(e)}>Atualizar</button>
            <button type="button" class="btn btn-primary" onClick={()=> navigate(-1)}>Cancelar</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;