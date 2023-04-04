import { useState } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Calendar from "react-calendar"
import ModalVendas from '../../components/ModalVendas'
import DetalhesAdministradoras from "../../components/DetalhesAdministradoras"
import DetalhesData from "../../components/DetalhesData"

const Recebiveis = () => {
const [date, setDate] = useState(new Date())
const [showDetails, setShowDetails] = useState(false)
const [admins, setAdmins] = useState(false)

function toggleDetails(){
    // eslint-disable-next-line no-unused-expressions
    !setShowDetails()
    
}

function toggleAdmins(){
    console.log('toggle admins')
    // eslint-disable-next-line no-unused-expressions
    !setAdmins()
}

    return(
        <>
            <div className="app">
                    <div className='calendar-area'>
                    <Header/>
                        <div className='page-main'>
                            <div className='calendar-container'>
                                <div className='card-header'>
                                    {showDetails ? <h2>Quantidade de Vendas: </h2> : <h2>Recebimentos</h2>}
                                    {showDetails ? <button type='button 'className='btn btn-primary btn-vendas' onClick={toggleDetails}>Voltar ao Calendário</button> : 'teste'}

                                </div>
                                { showDetails ? <ModalVendas/> : <Calendar onChange={setDate} value={date}/>}
                            </div>
                            <div className='detail-container'>
                                <div className='card-header'>
                                    <h2>Recebimentos previstos</h2>
                                    <h3>Data Selecionada: {date.toDateString()}</h3>
                                </div>
                                <div className='button-container'>
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