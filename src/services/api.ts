import axios from 'axios';

const api = axios.create({
    baseURL: 'https://receitaws.com.br/api',
});

export default api;
