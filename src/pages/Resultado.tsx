import React from 'react'
import ResultadoChurrasco from '../components/ResultadoChurrasco'

import bgImage2 from "../assets/bg-2.jpg"

const Resultado = () => {
  return (
    <div style={{backgroundImage: `url(${bgImage2})`}} className='page-container'>
      <h1>Resultado do Churrasco</h1>
      <ResultadoChurrasco />
    </div>
  )
}

export default Resultado