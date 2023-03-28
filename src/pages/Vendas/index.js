import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import Calendar from "react-calendar"

import './vendas.css'

const Vendas = () => {
const [date, setDate] = useState(new Date())

    return(
        <>
            <Header/>

            <div className="app">
                <div className='calendar-area'>
                    <div className='page-main'>
                        <div className='calendar-container'>
                            <Calendar onChange={setDate} value={date}/>
                        </div>
                        <div className='detail-container'>
                            <h2>Detalhamento calendário</h2>
                            <span>Data Selecionada: {date.toDateString()}</span>
                            <div className='card-vendas'>
                                <div className='detail-header'>
                                        <h2>Vendas no Total: </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vendas