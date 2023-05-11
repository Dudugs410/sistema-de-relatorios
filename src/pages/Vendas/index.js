
import './vendas.css'
import DisplayData from '../../components/DisplayData'

import BuscarClienteData from '../../components/BuscarClienteData'

const Vendas = () =>{
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