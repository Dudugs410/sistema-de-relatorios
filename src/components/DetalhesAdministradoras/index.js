import './detalhesAdministradoras.css'
import '../DetalhesData/detalhesData.css'

const DetalhesAdministradoras = ({close}) =>{
    return(
        <>
            <div className='vendas-container'>
                <div className='btn-div administradoras-container'>
                    <div className='valores-div'>
                        <span>Rede: </span> <span>valor</span>
                    </div>
                    <div className='valores-div'>
                        <span>Alelo: </span> <span>valor</span>
                    </div>
                    <div className='valores-div'>
                        <span>Nutricard: </span> <span>valor</span>
                    </div>
                    <div className='valores-div'>
                        <span>Stone: </span> <span>valor</span>
                    </div>
                    <div className='button-container'>
                        <button type='button' className='botao-card btn btn-primary' onClick={ close }>Voltar</button>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default DetalhesAdministradoras