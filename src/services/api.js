import axios from 'axios'

export function config(accessToken){
    const config = { headers:{ 
        Authorization:`Bearer ${accessToken}`,
        'Content-Type': 'application/json'} }
    return config

}

const api = axios.create({
    baseURL: 'https://app.salvalucro.com.br/api/v1'
})

export default api