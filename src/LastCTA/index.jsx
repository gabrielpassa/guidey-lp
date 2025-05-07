import { useState } from 'react'
import ButtonComponent from '../assets/Button'

import './index.css'


function LastCTA() {

  
 

  return (
    <div className='LastCTA-container'>
      
      
      <div className='LastCTA-body'>
        <h2 className='LastCTA-headline'>Não perca mais usuários para a curva de aprendizado</h2>
        <h4 className='LastCTA-subheadline'>Implemente uma jornada clara e sem frustrações, com onboarding interativo e suporte inteligente.</h4>
        <ButtonComponent FullWidth={true}  Color={'white-button'} Text={'Inscreva-se agora'}/>
      </div>


    </div>
  )
}

export default LastCTA
