import { useState, useEffect } from 'react'
import ButtonComponent from '../assets/Button'

import { IconPointerFilled } from '@tabler/icons-react';

import './index.css'


function Feature1() {


  useEffect(() => {
    const video = document.querySelector('.Feature1-image');
    if (video) {
      video.play().catch((e) => console.log('Erro ao iniciar vídeo:', e));
    }
  }, []);
  
  
 

  return (
    <div className='Feature1-container'>
      
      <div className='Feature1-text-container'>

        
        


        <div className='Feature1-subtitle-body'>
  <div className='Feature1-subtitle-icon-mask'>
    <video
      className='gradient-video'
      src='/gradient.mp4'
      autoPlay
      loading='lazy'
      loop
      muted
      playsInline
    />
    <div className='Feature1-subtitle-icon-body'>
      <IconPointerFilled className='Feature1-subtitle-icon'  />
    </div>
    
  </div>

  <img  className='Feature1-icon-noise' src='/iconNoise.png'></img>

  <p>Guias Interativos</p>
</div>





        <h3 className='Feature1-headline'>
          Onboarding que ensina enquanto faz
        </h3>
        <h4 className='Feature1-subheadline'>
          Experiência interativa que guia os usuários por cada etapa do processo, oferecendo facilidade, agilidade e total clareza.
        </h4>

        {/* <ButtonComponent Color={'black-button'} Text={"Pré-registro"}/> */}
      </div>




      <video playsInline muted autoPlay={true} loop alt=' Onboarding guiado que ensina enquanto faz' src='/feature1.mp4' className='Feature1-image'></video>







     




    </div>
  )
}

export default Feature1
