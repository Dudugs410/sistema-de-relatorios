import axios from 'axios'

export function config(accessToken){
    const config = { headers:{ 
        Authorization:`Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Accept': '*/*'
        } 
    }
    return config

}

export function params(cnpj, dataInicial, dataFinal){
    const params = { 
        cnpj: `${cnpj}`,
        dataInicial:`${dataInicial}` ,
        dataFinal: `${dataFinal}`,
        }  
    return params
    
}

const api = axios.create({
    baseURL: 'https://app.salvalucro.com.br/api/v1'
})

export default api