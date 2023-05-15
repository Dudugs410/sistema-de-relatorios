import './vendas.css'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import api, { params, config } from '../../services/api'
import DisplayData from '../../components/DisplayData'
import BuscarClienteData from '../../components/BuscarClienteData'

const Vendas = () =>{
    const [vendas, setVendas] = useState([])

    const { dataInicial, dataFinal, cnpj, accessToken } = useContext(AuthContext)

    useEffect(()=>{
        async function loadVendas(){
            await api.get('/vendas', )
              .then(response =>{
                console.log(response)
              })
        }
        loadVendas()
    })

    return(
        <div className='appPage'>
            <div className='page-content'>
                <BuscarClienteData/>
                <DisplayData/>
            </div>
        </div>
    )
}

export default Vendas