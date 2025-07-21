import { useState, useEffect } from 'react'
import ButtonComponent from '../assets/Button'

import { IconLifebuoyFilled } from '@tabler/icons-react';




function Feature2() {



  useEffect(() => {
    const video = document.querySelector('.Feature1-image');
    if (video) {
      video.play().catch((e) => console.log('Erro ao iniciar vídeo:', e));
    }
  }, []);



  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkScreen = () => {
      const match = window.matchMedia('(max-width: 1024px)')
      setIsMobile(match.matches)
    }

    checkScreen()

    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])



  return (
    <div style={!!isMobile ? { flexDirection: 'column-reverse' } : null} className='Feature1-container'>

      <video autoPlay muted loop alt='Suporte proativo com guias dinâmicos inteligentes' src='/feature2.mp4' className='Feature1-image'></video>

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
              <IconLifebuoyFilled className='Feature1-subtitle-icon' />
            </div>

          </div>

          <img loading='lazy' className='Feature1-icon-noise' src='/iconNoise.png'></img>

          <p>Suporte Guiado</p>
        </div>





        <h3 className='Feature1-headline'>
          Suporte proativo com guias inteligentes
        </h3>
        <h4 className='Feature1-subheadline'>
          Ofereça suporte autônomo com guias interativos que mantêm seus usuários no fluxo certo, sem confusão, sem frustrações.
        </h4>

        {/* <ButtonComponent Color={'black-button'} Text={"Pré-registro"}/> */}
      </div>


    </div>
  )
}

export default Feature2
