import { useState } from 'react'
import ButtonComponent from '../assets/Button'

import { IconPointerFilled } from '@tabler/icons-react';

import './index.css'


function BentoGrid() {

  
 

  return (
    <div className='BentoGrid-container'>
      
      <div className='BentoGrid-row'>

        <div className='BentoGrid-card-1'>
          <div className='BentoGrid-card-1-text-container'>
            <h3 className='BentoGrid-card-headline'>Implemente em minutos</h3>
            <p className='BentoGrid-card-subheadline'>Integre apenas com uma linha de código HTML, sem depender deu um grande especialista.</p>
            <img loading='lazy' alt='Integre apenas com uma linha de código HTML' src='./bentoScript.jpg' className='BentoGrid-card-1-image'></img>
          </div>
        </div>

        <div className='BentoGrid-card-2'>
          <div className='BentoGrid-card-1-text-container'>
            <h3 className='BentoGrid-card-headline'>Extensão Chrome para editar direto no seu site</h3>
            <p className='BentoGrid-card-subheadline'>Crie e teste guias visualmente, sem sair da interface do seu produto.</p>
          </div>
          <img loading='lazy' alt='Extensão Chrome para editar direto no seu site' src='./bentoExtension.jpg' className='BentoGrid-card-1-image'></img>
        </div>

      </div>



      <div className='BentoGrid-row'>

        <div className='BentoGrid-card-2'>
          <img loading='lazy' alt='Adapte os fluxos ao estilo do seu produto' src='./bentoEdit.jpg' className='BentoGrid-card-1-image'></img>
          <div className='BentoGrid-card-1-text-container'>
            <h3 className='BentoGrid-card-headline'>Customize do seu jeito</h3>
            <p className='BentoGrid-card-subheadline'>Adapte os fluxos ao estilo do seu produto, alinhando com a identidade da sua marca.</p>
          </div>
        </div>

        <div className='BentoGrid-card-1'>
          <img loading='lazy' alt='Conte com uma ampla variedade de templates' src='./bentoTemplates.jpg' className='BentoGrid-card-1-image'></img>
          <div className='BentoGrid-card-1-text-container'>
            <h3 className='BentoGrid-card-headline'>Templates prontos para economizar seu tempo</h3>
            <p className='BentoGrid-card-subheadline'>Conte com uma ampla variedade de templates para agilizar e transformar seu processo de forma simples.</p>
          </div>
        </div>

     

      </div>



    </div>
  )
}

export default BentoGrid
