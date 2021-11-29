import axios from 'axios';

//PROD baseURL: 'https://honeypetplus.herokuapp.com',
const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:4000',
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default httpClient;