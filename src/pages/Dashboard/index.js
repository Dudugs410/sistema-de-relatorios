
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './dashboard.css'
//////
import Cookies from "js-cookie"
//////
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/auth"
//////
import { clienteVendas } from "../../resources/teste"
import { Pie } from "react-chartjs-2"
import { Chart, ArcElement} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ArcElement);

const Dashboard = () => {
    console.log('Dashboard')
    const { isSignedIn, setIsSignedIn, accessToken, setAccessToken } = useContext(AuthContext)

    useEffect(() => {
        setIsSignedIn(sessionStorage.getItem('isSignedIn'))
        setAccessToken(Cookies.get('token'))

    })
    
    /////TESTE DO GRÁFICO//////
    // Dados de vendas dos últimos 5 dias
    const lastFiveDaysSales = 
    clienteVendas
    .slice(-5)
    .map((vendas) => vendas.vendas.reduce((a, b) => a + b, 0));

  const dados5Dias = {
    labels: [],
    datasets: [
      {
        data: lastFiveDaysSales,
        backgroundColor: clienteVendas.slice(-5).map((vendas) => vendas.cor),
      },
    ],
  };

  // Dados de vendas do dia atual
  const dadosDiaAtual = {
    labels: clienteVendas[0].vendas.map((clienteVendas) => clienteVendas.dia),
    datasets: [
      {
        label: "Vendas do Dia Atual",
        data: clienteVendas[0].vendas,
        backgroundColor: clienteVendas.map((clienteVendas) => clienteVendas.cor),
      },
    ],
  };

  const pieOptions = {
    radius: "70%",
    plugins:{
        datalabels:{
            color: 'white',
            font:{
                size: '14px',
                weight: 'bold',
            }
        }
    }

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
                            <Pie data={dados5Dias} options={pieOptions} plugins={[ChartDataLabels]}/>
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
                            <Pie data={dadosDiaAtual} options={pieOptions} plugins={[ChartDataLabels]}/>
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