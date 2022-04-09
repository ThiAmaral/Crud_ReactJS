import axios from 'axios';

const hook = axios.create({
  baseURL: 'https://reqres.in'
});

export default hook;