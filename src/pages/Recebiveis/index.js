import { useState } from "react"

import Header from "../../components/Header"

import Calendar from "react-calendar"
import DetalhesAdministradoras from "../../components/DetalhesAdministradoras"
import DetalhesData from "../../components/DetalhesData"
import Footer from "../../components/Footer"

import { FiZoomIn } from "react-icons/fi"

const Recebiveis = () => {
    const [date, setDate] = useState(new Date())
    const [showDetails, setShowDetails] = useState(false)
    const [admins, setAdmins] = useState(false)

function convertDate(dateString) {
    const weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const date = new Date(dateString);
    const dayOfWeek = weekdays[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    const year = date.getFullYear();
    return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;
    }

function voltar(){
    toggleDetails()
}

    const RecebiveisDetalhes = () =>{
        <div className='vendas-container'>
                    <table className="modal-table table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Data e Hora</th>
                                <th scope="col">Previsão de Pagamento</th>
                                <th scope="col">Estabelecimento</th>
                                <th scope="col">Bandeira</th>
                                <th scope="col">Forma de Pagamento</th>
                                <th scope="col">Valor da venda</th>
                                <th scope="col">Valor descontado</th>
                                <th scope="col">Valor Líquido da venda</th>
                                <th scope="col">Status</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previsão de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                                <td data-label="#"><button className='btn-details'><FiZoomIn/></button></td>
                            </tr>
                        </tbody>
                </table>
                <button type='button 'className='btn-header btn btn-primary btn-vendas' onClick={voltar}>Voltar</button>
            </div>
    }

function toggleDetails(){
    console.log('foi')
    // eslint-disable-next-line no-unused-expressions
    setShowDetails(!showDetails)
    console.log(showDetails)
    
}

    return(
        <>
            <div className="app">
                    <div className='page'>
                        <Header/>
                            <div className='page-content'>
                                <div className='content-container'>
                                    <div className='content-header'>
                                        {showDetails ? <span className='title'>Quantidade de Vendas: </span> : <span className='title'>Calendário de Recebimentos</span>}
                                        {showDetails ? <button type='button 'className='btn-header btn btn-primary btn-vendas' onClick={toggleDetails}>Voltar</button> : ''}
                                    </div>
                                    <div className='content-body'>
                                        { showDetails ? RecebiveisDetalhes() : <Calendar onChange={toggleDetails} onClickDay={setDate} value={date}/>}
                                    </div>
                                </div>
                                <div className='content-container'>
                                    <div className='content-header'>
                                        <span className='title'>Recebimentos</span>
                                        <span className='subtitle'>Data Selecionada: {convertDate(date)}</span>
                                    </div>
                                    <div className='content-body'>
                                        { admins ?  <DetalhesAdministradoras close = { () => setAdmins(!admins)}/> : <DetalhesData close = { () => setAdmins(!admins)}/> }
                                    </div>
                                </div>
                            </div>
                            <Footer/>
                    </div>
            </div>
        </>
    )
}

export default Recebiveis