import { useState } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BuscarClienteData from "../../components/BuscarClienteData"

import './antecipacoes.css'

const Antecipacoes = () => {

    return(
        <div className='page'>
            <Header/>
            <BuscarClienteData/>
            <div className='page-antecipacao-wrapper'>
                <div className='antecipacao-body'>
                    <h1>Antecipações Contratadas</h1>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Data e Hora">place_holder</td>
                                <td data-label="Previs]ao de pagamento">place_holder</td>
                                <td data-label="Estabelecimento">place_holder</td>
                                <td data-label="Bandeira">place_holder</td>
                                <td data-label="Forma de Pagamento">place_holder</td>
                                <td data-label="Valor da venda">place_holder</td>
                                <td data-label="Valor descontado">place_holder</td>
                                <td data-label="Valor Líquido da venda">place_holder</td>
                                <td data-label="Status">place_holder</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Antecipacoes;