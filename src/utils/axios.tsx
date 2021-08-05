import axios from 'axios'

const client = axios.create({
    baseURL: 'https://60f55a702208920017f3a03f.mockapi.io/api/v1',
    responseType: 'json',
})

export default client
