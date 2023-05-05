import './detalhesAdministradoras.css'
import '../DetalhesData/detalhesData.css'

import { config } from '../../services/api'
import api from '../../services/api'

import { useState, useEffect, useContext } from 'react'
import { DateContext } from '../../contexts/date'
import Cookies from 'js-cookie'

const DetalhesAdministradoras = ({close}) =>{
    const [total, setTotal] = useState(0.00)
    const [detalhes, setDetalhes] = useState(false)
    const [ADQ, setADQ] = useState([])
    const [ADQdata, setADQdata] = useState([])
    const [selecionada, setSelecionada] = useState([])
    const [loading, setLoading] = useState(false)

    const { dataInicial } = useContext(DateContext)
    const { dataFinal } = useContext(DateContext)

    useEffect(() => {
        const loadTotalVendas = async () =>{
            console.log('loadTotalVendas()')
            const body = 
            {
                "cnpj" : "03.953.552/0001-02",
                "dataInicial": dataInicial,
                "dataFinal": dataFinal,
            }  
            const response = 
            await api.get('/vendas',
            {  
                data: body, ...config(Cookies.get('token'))
            }, 
            )
            console.log(response)
            setLoading(false)
            setADQ(response.data)
        }
        loadTotalVendas()
      }, [dataFinal, dataInicial])

    function clicou(administradora){
        console.log('mostrar detalhes da administradora ' + administradora.NOME)
        console.log(administradora)
        setDetalhes(true)
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