import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://api.imgbb.com/1/upload',
    timeout: 3000,
    headers: {
        "Content-Type": "multipart/form-data"
    }
})

const APIKEY = "93eb07095edfcab22ba3c0b1c84a287a";

const uploadHeroImg = (heroImg) => httpClient.post(`?key=${APIKEY}`, heroImg);


export { uploadHeroImg }