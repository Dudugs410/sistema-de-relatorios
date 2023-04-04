import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './dashboard.css'

const Dashboard = () => {
  
  
  return(
    <>
        <Header/>
        <div className='dashboard-content-wrapper'>
            <div className='dashboard-content'>Conteúdo(vendas, grafico, etc)</div>
            <div className='dashboard-graph-wrapper'>
                <div className="graph-content">
                    <span>Últimos 5 dias</span>
                </div>
                <div className="graph-content">
                    <span>Recebíveis do dia anterior</span>
                </div>
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
                        <tbody>
                           <tr>
                                <td data-label="Cliente">place_holder</td>
                                <td data-label="Assunto">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="Data de Criação">place_holder</td>
                            </tr>                            
                        </tbody>
                        <tbody>
                           <tr>
                                <td data-label="Cliente">place_holder</td>
                                <td data-label="Assunto">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="Data de Criação">place_holder</td>
                            </tr>                            
                        </tbody>
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
        <Footer/>
    </>
  )  

}

export default Dashboard