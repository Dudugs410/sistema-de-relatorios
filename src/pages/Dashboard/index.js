
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
                        <div className='dashboard-table-wrapper'>
                            <div className="table-content dropShadow">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Assunto</th>
                                            <th scope="col">Status</th>                                    
                                            <th scope="col">Data de Criação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Cliente">place_holder</td>
                                            <td data-label="Assunto">place_holder</td>
                                            <td data-label="Status">place_holder</td>
                                            <td data-label="Data de Criação">place_holder</td>
                                        </tr>                            
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Assunto</th>
                                            <th scope="col">Status</th>                                    
                                            <th scope="col">Data de Criação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Cliente">place_holder</td>
                                            <td data-label="Assunto">place_holder</td>
                                            <td data-label="Status">place_holder</td>
                                            <td data-label="Data de Criação">place_holder</td>
                                        </tr>                            
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Assunto</th>
                                            <th scope="col">Status</th>                                    
                                            <th scope="col">Data de Criação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Cliente">place_holder</td>
                                            <td data-label="Assunto">place_holder</td>
                                            <td data-label="Status">place_holder</td>
                                            <td data-label="Data de Criação">place_holder</td>
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
                        <div className='dashboard-table-wrapper'>
                            <div className="table-content dropShadow">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Assunto</th>
                                            <th scope="col">Status</th>                                    
                                            <th scope="col">Data de Criação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Cliente">place_holder</td>
                                            <td data-label="Assunto">place_holder</td>
                                            <td data-label="Status">place_holder</td>
                                            <td data-label="Data de Criação">place_holder</td>
                                        </tr>                            
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Assunto</th>
                                            <th scope="col">Status</th>                                    
                                            <th scope="col">Data de Criação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Cliente">place_holder</td>
                                            <td data-label="Assunto">place_holder</td>
                                            <td data-label="Status">place_holder</td>
                                            <td data-label="Data de Criação">place_holder</td>
                                        </tr>                            
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Assunto</th>
                                            <th scope="col">Status</th>                                    
                                            <th scope="col">Data de Criação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Cliente">place_holder</td>
                                            <td data-label="Assunto">place_holder</td>
                                            <td data-label="Status">place_holder</td>
                                            <td data-label="Data de Criação">place_holder</td>
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