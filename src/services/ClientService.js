import hook from "../shared/hook";

class ClientService {

  baseUrl = '/api/users';

  async getAll(){
    const response = await hook.get(this.baseUrl);
    return response.data.data;
  }

  post(client){
    const response = hook.post(this.baseUrl, client).then(res=>{ console.log(res.data) });
    return response;
  }

  //Em construção
  async getId(client){
    const response = await hook.get(`${this.baseUrl}/${client.id}`);
    return response.data.data
  }

  update(data, client){
    console.log(data);
    console.log(client);
    console.log(`${this.baseUrl}/${client.id  }`);
    const response = hook.put(`${this.baseUrl}/${client.id}`).then(res=>{ console.log(res.data) });
    return response.data;
  }
}

export default ClientService