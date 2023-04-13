
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BuscarClienteData from "../../components/BuscarClienteData"

import './servicos.css'

const Servicos = () => {
    return(
        <div className='page'>
            <Header/>
                <div className='servicos-main'>
                    <BuscarClienteData/>
                </div>
                <div className='servicos-content'>

                </div>
            <Footer/>
        </div>
    )
}

export default Servicos