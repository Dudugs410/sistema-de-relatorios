import axios from "axios"

const api = axios.create({
    baseURL: 'https://app.salvalucro.com.br/api/v1'
})

export default api