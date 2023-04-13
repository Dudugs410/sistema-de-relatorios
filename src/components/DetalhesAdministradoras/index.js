import './detalhesAdministradoras.css'
import '../DetalhesData/detalhesData.css'

import { ADQ } from '../../resources/adquirentes'

const DetalhesAdministradoras = ({close}) =>{
    return(
        <>
            <div className='vendas-container'>
                <div className='btn-div administradoras-container'>
                {ADQ.map((ADQ)=>{
                    return(
                        <div key={ADQ.CODIGO}>
                            <div className='valores-div'>
                                <span>{ADQ.NOME}: </span> <span>valor:</span>
                            </div>
                        </div>
                        )
                    })}
                    <div className='button-container'>
                        <button type='button' className='botao-card btn btn-primary' onClick={ close }>Voltar</button>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default DetalhesAdministradoras