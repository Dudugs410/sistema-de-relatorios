
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './dashboard.css'

import { useState, useEffect } from "react"
import api from "../../services/api"

const Dashboard = () => {


    
  
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