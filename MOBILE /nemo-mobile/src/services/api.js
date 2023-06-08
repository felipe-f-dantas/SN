import axios  from "axios";

const api = axios.create({
    baseURL: 'http://190.89.148.23:3000'
});

export default api;