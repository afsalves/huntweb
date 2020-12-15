import axios from 'axios';

const api = axios.create({baseUrl:'https://rocketseat-node.herokuapp.com/api'});

export default api;