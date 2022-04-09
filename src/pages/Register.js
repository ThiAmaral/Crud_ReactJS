import React from 'react';
import ClientService from '../services/ClientService';
import Form from './Form'

const Register = ()=> {
  //Terceira Página!
  const clientService = new ClientService();
  const data = [];
  // const imprimir = "Imprimindo Palavra";

  const saveClient = (e)=>{
    e.preventDefault();
    clientService.post(data);
  }

  const imprima = (palavra)=>{
    palavra = "Imprimindo Palavra";
    return palavra;
  }
  return(
    <section>
      <div class="card">
        <h5 class="card-header">Cadastrar Cliente</h5>
        <Form onSave={imprima}/>
      </div>
      {/* Cadastrar */}
    </section>
  );
}

export default Register;