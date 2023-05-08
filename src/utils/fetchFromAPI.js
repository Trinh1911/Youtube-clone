import axios from "axios";
const axios = require('axios');
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'
const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'c3d26ca775mshe7fd22729a0c8acp19152cjsn014e5498649e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const fetchFromAPI = async(url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options)
   return data
}