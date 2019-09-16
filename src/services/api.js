import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber-api-alissonmacedo.herokuapp.com/',
});

export default api;
