import { useState } from "react"
import DateRange from "../DateRange"

import { BAN } from "../../resources/bandeiras"

import './buscar.css'

const BuscarClienteData = () => {


    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')

    function buscar(){
        if(dataFinal < dataInicial){
            alert('a Data Final não pode ser menor que a data inicial. Favor selecionar uma data válida.')
            return
        }
        else if(dataFinal==='' || dataInicial==='')
        {
            alert('favor selecionar um período de datas válido')
            return
        }

        alert(`executou busca entre os dias ${dataInicial} e ${dataFinal}`);
        <DateRange startDate={dataInicial} endDate={dataFinal}/>
    }

    return(
        <>
            <div className='search-bar'>
                    <div className='date-container'>
                        <div className='date-column'>
                            
                            <div className='select-card'>
                                <span>Grupo de Clientes</span>
                                <select>
                                    <option selected=''>selecione</option>
                                    <option>place_holder_01</option>
                                    <option>place_holder_02</option>
                                    <option>place_holder_03</option>
                                    <option>place_holder_04</option>
                                </select>
                            </div>
                            <div className="select-card">
                                <span className='date-text'>Data Inicial</span>
                                <input className='date-picker' id="date" type="date" onChange={(e)=>setDataInicial(e.target.value)}></input>
                            </div>
                        </div>

                        <div  className='date-column'>
                            <div className='select-card'>
                                <span>Cliente</span>
                                <select>
                                    <option selected=''>selecione</option>
                                    <option>place_holder_01</option>
                                    <option>place_holder_02</option>
                                    <option>place_holder_03</option>
                                    <option>place_holder_04</option>
                                </select>
                            </div>
                            <div className="select-card">
                                <span  className='date-text'>Data Final</span>
                                <input className='date-picker' id="date" type="date" onChange={(e)=>setDataFinal(e.target.value)}></input>
                            </div>
                            
                        </div>

                        <div className='date-column'>
                            
                            <div className='select-card'>
                                <span>Administradora</span>
                                <select>
                                    <option selected=''>selecione</option>
                                    <option>place_holder_01</option>
                                    <option>place_holder_02</option>
                                    <option>place_holder_03</option>
                                    <option>place_holder_04</option>
                                </select>
                            </div>

                            <div className='select-card'>
                                <span>Bandeira</span>
                                <select>
                                    <option>selecione</option>
                                    {BAN.map((BAN)=>(
                                        <option value = {BAN.DESCRICAO}>{BAN.DESCRICAO}</option>
                                    ))}
                                    
                                </select>
                            </div>
                        </div>

                        <div  className='date-column'>
                            <button className="btn btn-primary" onClick={buscar}>Pesquisar</button>
                        </div>
                        
                    </div>
                </div>
        </>
    )
    
}

export default BuscarClienteData