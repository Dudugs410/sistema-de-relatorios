import { useState } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Calendar from "react-calendar"
import ModalVendas from '../../components/ModalVendas'
import DetalhesAdministradoras from "../../components/DetalhesAdministradoras"
import DetalhesData from "../../components/DetalhesData"

import './vendas.css'
import './calendario.css'

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
    console.log('foi')
    // eslint-disable-next-line no-unused-expressions
    setShowDetails(!showDetails)
    console.log(showDetails)
    
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
                                        {showDetails ? <span className='title'>Quantidade de Vendas: </span> : <span className='title'>Calendário de Vendas</span>}
                                        {showDetails ? <button type='button 'className='btn-header btn btn-primary btn-vendas' onClick={voltar}>Voltar</button> : Periodo()}
                                    </div>
                                    <div className='content-body'>
                                        { showDetails ? <ModalVendas/> : <Calendar onChange={toggleDetails} onClickDay={setDate} value={date}/>}
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