import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 02b341a79d53289e4a2d3d015309bd9b3d3c517b2b651f745bb538e387f85038'
    }
})