import hook from "../shared/hook";

class ClientService {

  baseUrl = '/api/users';

  async getAll(){
    const response = await hook.get(this.baseUrl);
    return response.data.data;
  }

  post(client){
    const response = hook.post(this.baseUrl, client).then(res=>{console.log(res.data)});
    return response;
  }

  update(client){
    const response = hook.update(this.baseUrl, client)
    return response;
  }
}

export default ClientService