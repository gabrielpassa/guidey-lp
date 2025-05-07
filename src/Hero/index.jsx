
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import ButtonComponent from '../assets/Button'
// import { IconSparkles, IconPointer, IconPointerFilled, IconLifebuoy, IconLifebuoyFilled} from '@tabler/icons-react'
// import './index.css'

// function Hero() {
//   const [switchOption, setSwitchOption] = useState(1)
//   const [scale, setScale] = useState(0.9) // Escala inicial reduzida

//   const handleVideoEnd = () => {
//     setSwitchOption(prev => (prev === 1 ? 2 : 1))
//   }

//   // Efeito para aumentar a escala conforme o scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY
//       const newScale = 0.5 + scrollY / 1000 // ajusta conforme a rolagem
//       setScale(Math.min(newScale, 1)) // máximo de 1 (escala original)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//     <div className="hero-container">
//       <div className="hero-subtitle-body">
//         <IconSparkles size={24} stroke={1.5} />
//         <p>Menos churn. Mais receita.</p>
//       </div>

//       <h1 className="hero-headline">
//         Se o usuário precisa perguntar, já ficou difícil demais.
//       </h1>

//       <h2 className="hero-subheadline">
//         Ofereça uma experiência guiada e acolhedora, com suporte proativo que faz o usuário se sentir acompanhado por um especialista.
//       </h2>

      
//     <img alt='Noise Gradient' loading='lazy' style={{ 
//   position: 'absolute', 
//   top:'12%',
//   width: '100%', 
//   overflow: 'hidden', 
//     mixBlendMode: 'lighten',
//   scale:'1.2',
//   zIndex:'-1'
// }}
//  src='noiseParticles.svg'></img>
//       <div style={{ 
//   position: 'absolute', 
//   top:'16%',
//   width: '100%', 
//   overflow: 'hidden', 
//   filter: 'blur(20px)', 
//   WebkitFilter: 'blur(44px)',
//   scale:'1.6',
//   zIndex:'-2',
//   opacity:'0.8'
// }}>

//   <video
//     className="hero-gradient-video-mask"
//     src="/gradient.mp4"
//     title="Background Gradient Dinâmico"
//     aria-label="Vídeo Gradient"
//     loading="lazy"
//     autoPlay
//     loop
//     muted
//     playsInline
//   />
// </div>

//       <ButtonComponent Color={'black-button'} Text={"Pré-registro"} />

//       {/* Container com escala dinâmica */}
//       <div
//         className="hero-videos-body"
//         style={{
//           transform: `scale(${scale})`,
//           transition: 'transform 0.1s ease-out',
//         }}
//       >
//         <div className="hero-videos-switch-container" style={{ position: 'relative', display: 'flex' }}>
//           {/* Indicador animado */}
//           <motion.div
//             style={{
//               position: 'absolute',
//               top: 0,
//               width: '50%',
//               height: '100%',
//               borderRadius: '12px',
//               zIndex: 0,
//               backgroundColor: '#030303',
//             }}
//             initial={{ left: `${(switchOption - 1) * 50}%`, opacity: 0 }}
//             animate={{ left: `${(switchOption - 1) * 50}%`, opacity: 1 }}
//             exit={{ opacity: 0, left: `${(switchOption - 1) * 50}%` }}
//             transition={{
//               type: 'spring',
//               stiffness: 400,
//               damping: 25,
//               mass: 0.5,
//             }}
//           />

//           {/* Aba 1 */}
//           <motion.div
//             onClick={() => setSwitchOption(1)}
//             className={switchOption === 3 ? 'hero-videos-switch-body' : 'hero-videos-switch-body-inactive'}
//             style={{ position: 'relative', zIndex: 1 }}
//             transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.5 }}
//           >
//             {switchOption === 1 ? (
//               <IconPointerFilled className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#F3F3F3' }} />
//             ) : (
//               <IconPointer className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#3E3E3E' }} />
//             )}
//           </motion.div>

//           {/* Aba 2 */}
//           <motion.div
//             onClick={() => setSwitchOption(2)}
//             className={switchOption === 3 ? 'hero-videos-switch-body' : 'hero-videos-switch-body-inactive'}
//             style={{ position: 'relative', zIndex: 1 }}
//             transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.5 }}
//           >
//             {switchOption === 2 ? (
//               <IconLifebuoyFilled className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#F3F3F3' }} />
//             ) : (
//               <IconLifebuoy className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#3E3E3E' }} />
//             )}
//           </motion.div>



//         </div>

//         {/* Vídeo com transição de fade */}
//         <AnimatePresence mode="wait">
//           <motion.video
//             key={switchOption}
//             src={switchOption === 1 ? "/demo1.mp4" : "/demo2.mp4"}
//             className="hero-video"
//             title="Demonstração de uso Onboarding Guiado e Suporte Guiado Guidey"
//             aria-label="Vídeo demonstração: Onboarding Guiado e Suporte Guiado Guidey"
//             loading="lazy"
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           />
//         </AnimatePresence>



        
//       </div>




      
//     </div>



    
   




//          {/* <svg className='hero-gradient-mask' xmlns="http://www.w3.org/2000/svg" width="1851" height="1018" viewBox="0 0 1851 1018" fill="none">
//          <path d="M0 0C0 0 488.551 426.29 941.568 422.581C1385.5 418.947 1851 0 1851 0V1017.75C1851 1017.75 1318.89 571.506 941.568 565.814C552.407 559.945 0 1017.75 0 1017.75V0Z" fill="#D9D9D9"/>
//        </svg> */}
//        </>
//   )
// }

// export default Hero































// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import ButtonComponent from '../assets/Button'
// import { IconSparkles, IconPointer, IconPointerFilled, IconLifebuoy, IconLifebuoyFilled } from '@tabler/icons-react'
// import './index.css'

// function Hero() {
//   const [switchOption, setSwitchOption] = useState(1)
//   const [scale, setScale] = useState(0.8) // Escala inicial reduzida

//   const handleVideoEnd = () => {
//     setSwitchOption(prev => (prev === 1 ? 2 : 1))
//   }

//   // Efeito para aumentar a escala conforme o scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY
//       const newScale = 0.8 + scrollY / 1000 // ajusta conforme a rolagem (inicia em 0.8)
//       setScale(Math.min(newScale, 1)) // máximo de 1 (escala original)
//     }

//     // Define a escala inicial quando a página carrega
//     handleScroll()

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>

//       <div className="hero-container">
//         <div className="hero-subtitle-body">
//           <IconSparkles size={24} stroke={1.5} />
//           <p>Menos churn. Mais receita.</p>
//         </div>

//         <h1 className="hero-headline">
//           Se o usuário precisa perguntar, já ficou difícil demais.
//         </h1>

//         <h2 className="hero-subheadline">
//           Ofereça uma experiência guiada e acolhedora, com suporte proativo que faz o usuário se sentir acompanhado por um especialista.
//         </h2>

//         <img
//           alt="Noise Gradient"
//           loading="lazy"
//           style={{
//             position: 'absolute',
//             top: '12%',
//             width: '100%',
//             overflow: 'hidden',
//             mixBlendMode: 'lighten',
//             scale: '1.2',
//             zIndex: '-1',
//           }}
//           src="noiseParticles.svg"
//         />

//         <div
//           style={{
//             position: 'absolute',
//             top: '16%',
//             width: '100%',
//             overflow: 'hidden',
//             filter: 'blur(20px)',
//             WebkitFilter: 'blur(44px)',
//             scale: '1.6',
//             zIndex: '-2',
//             opacity: '0.8',
//           }}
//         >
//           <video
//             className="hero-gradient-video-mask"
//             src="/gradient.mp4"
//             title="Background Gradient Dinâmico"
//             aria-label="Vídeo Gradient"
//             loading="lazy"
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//         </div>

//         <ButtonComponent Color={'black-button'} Text={'Pré-registro'} />

//         {/* Container com escala dinâmica */}
//         <div
//           className="hero-videos-body"
//           style={{
//             transform: `scale(${scale})`, // Aplica a escala dinâmica
//             transition: 'transform 0.1s ease-out',
//           }}
//         >
//           <div className="hero-videos-switch-container" style={{ position: 'relative', display: 'flex' }}>
//             {/* Indicador animado */}
//             <motion.div
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 width: '50%',
//                 height: '100%',
//                 borderRadius: '12px',
//                 zIndex: 0,
//                 backgroundColor: '#030303',
//               }}
//               initial={{ left: `${(switchOption - 1) * 50}%`, opacity: 0 }}
//               animate={{ left: `${(switchOption - 1) * 50}%`, opacity: 1 }}
//               exit={{ opacity: 0, left: `${(switchOption - 1) * 50}%` }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 400,
//                 damping: 25,
//                 mass: 0.5,
//               }}
//             />

//             {/* Aba 1 */}
//             <motion.div
//               onClick={() => setSwitchOption(1)}
//               className={switchOption === 3 ? 'hero-videos-switch-body' : 'hero-videos-switch-body-inactive'}
//               style={{ position: 'relative', zIndex: 1 }}
//               transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.5 }}
//             >
//               {switchOption === 1 ? (
//                 <IconPointerFilled className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#F3F3F3' }} />
//               ) : (
//                 <IconPointer className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#3E3E3E' }} />
//               )}
//             </motion.div>

//             {/* Aba 2 */}
//             <motion.div
//               onClick={() => setSwitchOption(2)}
//               className={switchOption === 3 ? 'hero-videos-switch-body' : 'hero-videos-switch-body-inactive'}
//               style={{ position: 'relative', zIndex: 1 }}
//               transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.5 }}
//             >
//               {switchOption === 2 ? (
//                 <IconLifebuoyFilled className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#F3F3F3' }} />
//               ) : (
//                 <IconLifebuoy className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#3E3E3E' }} />
//               )}
//             </motion.div>
//           </div>

//           {/* Vídeo com transição de fade */}
//           <AnimatePresence mode="wait">
//             <motion.video
//               key={switchOption}
//               src={switchOption === 1 ? '/demo1.mp4' : '/demo2.mp4'}
//               className="hero-video"
//               // title="Demonstração de uso Onboarding Guiado e Suporte Guiado Guidey"
//               aria-label="Vídeo demonstração: Onboarding Guiado e Suporte Guiado Guidey"
//               loading="lazy"
//               autoPlay
//               muted
//               playsInline
//               onEnded={handleVideoEnd}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//           </AnimatePresence>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Hero












import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ButtonComponent from '../assets/Button'
import {
  IconSparkles,
  IconPointer,
  IconPointerFilled,
  IconLifebuoy,
  IconLifebuoyFilled
} from '@tabler/icons-react'
import './index.css'

function Hero() {
  const [switchOption, setSwitchOption] = useState(1)
  const [scale, setScale] = useState(0.8)
  const [isLoading, setIsLoading] = useState(true)

  const handleVideoEnd = () => {
    setSwitchOption(prev => (prev === 1 ? 2 : 1))
  }

  const handleVideoLoad = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newScale = 0.8 + scrollY / 100
      setScale(Math.min(newScale, 1))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* LOADING BONITO */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#ffffff',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              style={{
                width: 50,
                height: 50,
                border: '5px solid #ccc',
                borderTop: '5px solid #000',
                borderRadius: '50%',
                marginBottom: 20
              }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{ fontSize: '18px', color: '#333' }}
            >
              
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hero-container">
        <div className="hero-subtitle-body">
          <IconSparkles size={24} stroke={1.5} />
          <p>Menos churn. Mais receita.</p>
        </div>

        <h1 className="hero-headline">
          Se o usuário precisa perguntar, já ficou difícil demais.
        </h1>

        <h2 className="hero-subheadline">
          Ofereça uma experiência guiada e acolhedora, com suporte proativo que faz o usuário se sentir acompanhado por um especialista.
        </h2>

        <img
          className='hero-gradient-noise'
          alt="Noise Gradient"
          loading="lazy"
          style={{
            position: 'absolute',
            // top: '12%',
            width: '100%',
            overflow: 'hidden',
            mixBlendMode: 'lighten',
            scale: '1.2',
            zIndex: '-1'
          }}
          src="noiseParticles.svg"
        />

        <div 
        className='hero-gradient-mask'
          style={{
            position: 'absolute',
            // top: '16%',
            width: '100%',
            overflow: 'hidden',
            // filter: 'blur(20px)',
            // WebkitFilter: 'blur(44px)',
            scale: '1.6',
            zIndex: '-2',
            opacity: '0.8',
           
          }}
        >
          <video
            className="hero-gradient-video-mask"
            src="/gradient.mp4"
            title="Background Gradient Dinâmico"
            aria-label="Vídeo Gradient"
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={handleVideoLoad}
          />
        </div>

        <ButtonComponent FullWidth={true} Color={'black-button'} Text={'Pré-registro'} />

        <div
          className="hero-videos-body"
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="hero-videos-switch-container" style={{ position: 'relative', display: 'flex' }}>
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                width: '50%',
                height: '100%',
                borderRadius: '12px',
                zIndex: 0,
                backgroundColor: '#030303'
              }}
              initial={{ left: `${(switchOption - 1) * 50}%`, opacity: 0 }}
              animate={{ left: `${(switchOption - 1) * 50}%`, opacity: 1 }}
              exit={{ opacity: 0, left: `${(switchOption - 1) * 50}%` }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.5 }}
            />

            <motion.div
              onClick={() => setSwitchOption(1)}
              className={switchOption === 3 ? 'hero-videos-switch-body' : 'hero-videos-switch-body-inactive'}
              style={{ position: 'relative', zIndex: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.5 }}
            >
              {switchOption === 1 ? (
                <IconPointerFilled className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#F3F3F3' }} />
              ) : (
                <IconPointer className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#3E3E3E' }} />
              )}
            </motion.div>

            <motion.div
              onClick={() => setSwitchOption(2)}
              className={switchOption === 3 ? 'hero-videos-switch-body' : 'hero-videos-switch-body-inactive'}
              style={{ position: 'relative', zIndex: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.5 }}
            >
              {switchOption === 2 ? (
                <IconLifebuoyFilled className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#F3F3F3' }} />
              ) : (
                <IconLifebuoy className="hero-videos-switch-icon" stroke={1.5} style={{ color: '#3E3E3E' }} />
              )}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.video
              key={switchOption}
              src={switchOption === 1 ? '/demo1.mp4' : '/demo2.mp4'}
              className="hero-video"
              aria-label="Vídeo demonstração: Onboarding Guiado e Suporte Guiado Guidey"
              loading="lazy"
              preload='auto'
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            
            />
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Hero









