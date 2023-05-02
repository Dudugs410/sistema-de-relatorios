
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './dashboard.css'

import { useState, useEffect } from "react"
import api from "../../services/api"

//////
import { cliente } from "../../resources/teste"
import { Pie } from "react-chartjs-2"
import { Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
//////

const Dashboard = () => {

    /////TESTE DO GRÁFICO//////
    // Dados de vendas dos últimos 5 dias
  const dados5Dias = {
    labels: ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5"],
    datasets: cliente.map((cliente) => ({
      label: cliente.nome,
      data: cliente.vendas.slice(0, 5),
      fill: false,
      backgroundColor: cliente.cor,
      tension: 0.1,
    })),
  };

  // Dados de vendas do dia atual
  const dadosDiaAtual = {
    labels: cliente.map((cliente) => cliente.nome),
    datasets: [
      {
        label: "Vendas do Dia Atual",
        data: cliente.map((cliente) => cliente.vendas[4]),
        backgroundColor: cliente.map((cliente) => cliente.cor),
      },
    ],
  };
    ///////////////////////////


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
                            <Pie data={dados5Dias} options={{radius: "70%"}}/>
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
                            <span>Dia Atual</span>
                            <Pie data={dadosDiaAtual} options={{radius: "70%"}}/>
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