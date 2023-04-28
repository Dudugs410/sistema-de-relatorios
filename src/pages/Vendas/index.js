import { useState } from "react"
import Cookies from "js-cookie"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Calendar from "react-calendar"
import DetalhesAdministradoras from "../../components/DetalhesAdministradoras"
import DetalhesData from "../../components/DetalhesData"

import './vendas.css'
import './calendario.css'

import { FiZoomIn } from "react-icons/fi"

const Vendas = () => {
const [date, setDate] = useState(new Date())
const [showDetails, setShowDetails] = useState(false)
const [admins, setAdmins] = useState(false)
const [dataInicial, setDataInicial] = useState('')
const [dataFinal, setDataFinal] = useState('')

function convertDate(dateString) {
    const weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const date = new Date(dateString);
    const dayOfWeek = weekdays[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    const year = date.getFullYear();
    return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;
  }

function toggleDetails(){
    console.log('toggleDetails()')
    // eslint-disable-next-line no-unused-expressions
    setShowDetails(!showDetails)
    console.log('showDetails Depois: ' + showDetails)
    
}

function voltar(){
    setDataInicial('')
    setDataFinal('')
    toggleDetails()
}

function pesquisaPeriodo(){
    if(dataFinal < dataInicial){
        alert('a Data Final não pode ser menor que a data inicial. Favor selecionar uma data válida.')
        return
    }

    else if( dataInicial==='' || dataFinal==='' )
    {
        alert('favor selecionar um período de datas válido')
        return
    }

    else if(dataInicial === dataFinal){
        alert('Selecione uma data diferente para a data final. Caso deseje saber informações de uma única data específica, clique na data no calendário abaixo.')
    }

    toggleDetails()
}

const Vendas = () =>{
    return(
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
                            <td data-label="" className="td-btn-details"><button className='btn-details'>Detalhes <FiZoomIn/></button></td>
                        </tr>
                    </tbody>
            </table>
            <button type='button 'className='btn-header btn btn-primary btn-vendas' onClick={voltar}>Voltar</button>
        </div>
    ) 
}

const Periodo = () =>{
    return(
        <>
            <span className='subtitle'>Clique em uma data para mais detalhes ou selecione um período</span>
            <div className='periodo'>
                <div className='picker-wrapper'>
                    <span className='sub-date-text'>Data Inicial: </span><input className='sub-date-picker' id="date" type="date" onChange={(e) => setDataInicial(e.target.value)}></input>
                </div>
                <div className='picker-wrapper'>
                    <span className='sub-date-text'>Data Final: </span><input className='sub-date-picker' id="date" type="date" onChange={(e) => setDataFinal(e.target.value)}></input>
                </div>
                <button className='btn btn-primary' onClick={pesquisaPeriodo}>Pesquisar</button>
            </div>
        </>
    )
}

    return(
        <>
            <div className="app">
                    <div className='page'>
                        <Header/>
                            <div className='page-content'>
                                <div className='content-container'>
                                    <div className='content-header'>
                                        { showDetails ? <span className='title'>Quantidade de Vendas: </span> : <span className='title'>Calendário de Vendas</span>}
                                        { showDetails ? <span></span> : Periodo()}
                                    </div>
                                    <div className='content-body'>
                                        { showDetails ? Vendas() : <Calendar onChange={toggleDetails} onClickDay={setDate} value={date}/>}
                                    </div>
                                </div>
                                <div className='content-container'>
                                    <div className='content-header'>
                                        <span className='title'>Detalhamento Calendário</span>
                                        <span className='subtitle'>
                                            { !dataFinal ? `Data Selecionada: ${convertDate(date)}` : `Período selecionado: ${convertDate(dataInicial)} a ${convertDate(dataFinal)}`}
                                            </span>
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

export default Vendas