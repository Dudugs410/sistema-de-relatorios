import './detalhesAdministradoras.css'
import '../DetalhesData/detalhesData.css'

import { ADQ } from '../../resources/adquirentes'

import { useState } from 'react'

const DetalhesAdministradoras = ({close}) =>{
    const [total, setTotal] = useState(0.00)
    const [detalhes, setDetalhes] = useState(false)

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