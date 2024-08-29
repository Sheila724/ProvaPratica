import axios from 'axios';

const blogFetch = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1', // URL base da API da Platzi
});

export default blogFetch;