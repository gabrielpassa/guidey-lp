import { useState } from 'react'
import ButtonComponent from '../assets/Button'

import { IconLifebuoyFilled } from '@tabler/icons-react';




function Feature2() {

  
 

  return (
    <div className='Feature1-container'>

      <img loading='lazy' alt='Suporte proativo com guias dinâmicos inteligentes' src='/feature2.jpg' className='Feature1-image'></img>
      
      <div className='Feature1-text-container'>

        
        


        <div className='Feature1-subtitle-body'>
        <div className='Feature1-subtitle-icon-mask'>
          <video
            className='gradient-video'
            src='/gradient.mp4'
            loading='lazy'
            autoPlay
            loop
            muted
            playsInline
          />
          <div className='Feature1-subtitle-icon-body'>
            <IconLifebuoyFilled className='Feature1-subtitle-icon'  />
          </div>
          
        </div>

        <img loading='lazy' className='Feature1-icon-noise' src='/iconNoise.png'></img>

        <p>Suporte Guiado</p>
      </div>





        <h3 className='Feature1-headline'>
        Suporte proativo com guias inteligentes
        </h3>
        <h4 className='Feature1-subheadline'>
        Ofereça suporte autônomo com guias interativos, mantendo seus usuários no caminho certo e livres de frustrações
        </h4>

        <ButtonComponent Color={'black-button'} Text={"Pré-registro"}/>
      </div>


    </div>
  )
}

export default Feature2
