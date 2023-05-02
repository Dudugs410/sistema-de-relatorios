import './detalhesAdministradoras.css'
import '../DetalhesData/detalhesData.css'

import { config } from '../../services/api'
import api from '../../services/api'

import { useState, useEffect } from 'react'

const DetalhesAdministradoras = ({close}) =>{
    const [total, setTotal] = useState(0.00)
    const [detalhes, setDetalhes] = useState(false)
    const [ADQ, setADQ] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadAdquirentes = async () =>{
          const result = await api.get('/adquirente', config('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTYWx2YWx1Y3JvU2VydmljZUFjZXNzVG9rZW4iLCJqdGkiOiI2MTUxYzVkYy0wOWE0LTQwYmItODAwZC1mNGI1NjFhMzUxZjUiLCJpYXQiOiIwMi8wNS8yMDIzIDE3OjMyOjM2IiwiaWQiOiIxNjc1NjEiLCJsb2dpbiI6IkVEVUFSRE8iLCJleHAiOjE2ODMwNTU5NTYsImlzcyI6IlNhbHZhbHVyb0F1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiU2FsdmFsdWNyb1NlcnZpY2VDbGllbnQifQ.9TqFLq3Uz_2dCxcfmkXEHLw61no9hUhBt4aPQ-_vZqk'))
          console.log(result)
          setADQ(result.data)
          setLoading(false)
        }
        loadAdquirentes()
        console.log(ADQ)
      }, [])

    function clicou(administradora){
        console.log('mostrar detalhes da administradora ' + administradora.NOME)
        console.log(administradora)
        setDetalhes(true)
    }

    function showAdmList(){
        setDetalhes(false)
    }

    return(
        <>
            <div className='vendas-container'>
                {!detalhes ? 
                    <div className='btn-div administradoras-container'>
                        {ADQ.map((ADQ)=>{
                            return(
                                <div key={ADQ.CODIGO}>
                                    <button className='valores-div' onClick={() => {clicou(ADQ)}}>
                                        <span>{ADQ.NOME}: </span> <span className='total'>R$0.00</span>
                                    </button>
                                </div>
                                )
                            })}
                            <div className='total-container'>
                                <span>Total:</span><span className='total'>${total}</span> 
                            </div>
                            <div className='button-container'>
                                <button type='button' className='botao-card btn btn-primary' onClick={ close }>Voltar</button>
                            </div>
                    </div>
                            :
                                <div>
                                    <table className="table table-bordered ">
                                    <thead>
                                            <tr>
                                                <th scope="col">Dados_Place_Holder</th>
                                                <th scope="col">Dados_Place_Holder</th>
                                                <th scope="col">Dados_Place_Holder</th>                                    
                                                <th scope="col">Dados_Place_Holder</th>
                                                <th scope="col">Dados_Place_Holder</th>
                                                <th scope="col">Dados_Place_Holder</th>
                                                <th scope="col">Dados_Place_Holder</th>
                                                <th scope="col">Dados_Place_Holder</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                            </tr>                            
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                            </tr>                            
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                            </tr>                            
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                            </tr>                            
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                            </tr>                            
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                            </tr>                            
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                            </tr>                            
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                                <td data-label="Dado_Place_Holder">place_holder</td>
                                            </tr>                            
                                        </tbody>
                                    </table>
                                    <div className='button-container'>
                                        <button type='button' className='botao-card btn btn-primary' onClick={ close }>Voltar</button>
                                    </div> 
                                </div>                       
                }
            </div>   
        </>
    )
}

export default DetalhesAdministradoras