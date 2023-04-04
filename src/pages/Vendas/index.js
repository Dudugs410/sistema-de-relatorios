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

function toggleAdmins(){
    console.log('toggle admins')
    // eslint-disable-next-line no-unused-expressions
    !setAdmins()
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
                                        {showDetails ? <button type='button 'className='btn-header btn btn-primary btn-vendas' onClick={toggleDetails}>Voltar</button> : 'teste'}
                                    </div>
                                    <div className='content-body'>
                                        { showDetails ? <ModalVendas/> : <Calendar onChange={toggleDetails} onClickDay={setDate} value={date}/>}
                                    </div>
                                </div>
                                <div className='content-container'>
                                    <div className='content-header'>
                                        <span className='title'>Detalhamento Calendário</span>
                                        <span className='subtitle'>Data Selecionada: {convertDate(date)}</span>
                                    </div>
                                    <div className='content-body'>
                                        { admins ?  <DetalhesAdministradoras close = { () => setAdmins(!admins)}/> : <DetalhesData close = { () => setAdmins(!admins)}/> }
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )
}

export default Vendas