
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './dashboard.css'

import { useState, useEffect } from "react"
import api from "../../services/api"

const Dashboard = () => {
    const [adquirentes, setAdq] = useState([])

    useEffect(() => {
        const loadAdquirentes = async () => {
        const result = await api.get('/adquirente', {headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTYWx2YWx1Y3JvU2VydmljZUFjZXNzVG9rZW4iLCJqdGkiOiIyMzVjZWE0Ny1iNTFmLTRlMzUtOGUwNC1mMDljYTk4NWJlYjIiLCJpYXQiOiIxMS8wNC8yMDIzIDE2OjU1OjA4IiwiaWQiOiIxNjQzODUiLCJsb2dpbiI6IkFMRlJFRE8iLCJleHAiOjE2ODEyMzkzMDgsImlzcyI6IlNhbHZhbHVyb0F1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiU2FsdmFsdWNyb1NlcnZpY2VDbGllbnQifQ.Fvz_lA82SpYeqq9UJxXJL1gZcqT-BIVxqZO8eeDLcyY'}})
        console.log(result)
        setAdq(result.data)
        }
        loadAdquirentes()
    })

    
  
  return(
    <div className='page'>
        <Header/>
        <div className='main-wrapper'>
            <div className='dashboard-content'>
                Conteúdo(vendas, grafico, etc)
            </div>
            <div className='dashboard-content-wrapper'>
                <div className='dashboard-graph-wrapper'>
                    <div className='graph-table'>
                        <div className="graph-content">
                            <span>Últimos 5 dias</span>
                        </div>
                        <div className='table-title'>TESTE</div>
                        <div className='dashboard-table-wrapper'>
                            <div className="table-content dropShadow">
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className='dashboard-graph-wrapper'>
                    <div className='graph-table'>
                        <div className="graph-content">
                            <span>Últimos 5 dias</span>
                        </div>
                        <div className='table-title'>TESTE</div>
                        <div className='dashboard-table-wrapper'>
                            <div className="table-content dropShadow">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )  

}

export default Dashboard