// import { useState } from 'react'
// import ButtonComponent from '../assets/Button'

// import './index.css'


// function Header() {
 

//   return (
//     <div className='header-container'>
//       <img src='/logo.svg'></img>
//        <ButtonComponent Color={'black-button'} Text={"Pré-registro"}></ButtonComponent>
//     </div>
//   )
// }

// export default Header



// import { useState, useEffect } from 'react'
// import ButtonComponent from '../assets/Button'
// import './index.css'

// function Header() {
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkScreen = () => {
//       const match = window.matchMedia('(max-width: 560px)')
//       setIsMobile(match.matches)
//     }

//     checkScreen()

//     window.addEventListener('resize', checkScreen)
//     return () => window.removeEventListener('resize', checkScreen)
//   }, [])

//   return (
//     <>
//       <div  className='header-container'>
//         <img
//           src={isMobile ? '/logoMobile.svg' : '/logo.svg'}
//           alt='Logo'
//         />
//         <ButtonComponent Color='black-button' Text='Pré-registro' />
//       </div>

//       <div style={{ position: 'fixed', top: '0px' }} className='header-container'>
//         <img
//           src={isMobile ? '/logoMobile.svg' : '/logo.svg'}
//           alt='Logo'
          
//         />
//         <ButtonComponent Color='black-button' Text='Pré-registro' />
//       </div>
//     </>
    
//   )
// }

// export default Header









import { useState, useEffect } from 'react';
import ButtonComponent from '../assets/Button';
import './index.css';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const match = window.matchMedia('(max-width: 560px)');
      setIsMobile(match.matches);
    };

    checkScreen();

    window.addEventListener('resize', checkScreen);

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolled(false); // Mantém o estado original quando está no topo
      } else {
        setScrolled(true); // Aplica as mudanças quando rolar para baixo
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkScreen);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ opacity: '0' }} className='header-container'>
        <img
          src={isMobile ? '/logoMobile.svg' : '/logo.svg'}
          alt='Logo'
        />
        <ButtonComponent Color='black-button' Text='Pré-registro' />
      </div>

      <div
        style={{ position: 'fixed', top: '0px', width: '100%' }}
        className={`header-container ${scrolled ? '' : 'scrolled'}`} // Aplica a classe 'scrolled' apenas no topo
      >
        <div className='header-body'>
          <img className='header-logo'
            src={isMobile ? '/logoMobile.svg' : '/logo.svg'}
            alt='Logo'
          />
          <ButtonComponent Color='black-button' Text='Pré-registro' />
        </div>
      </div>
    </>
  );
}

export default Header;







// import { useState, useEffect } from 'react'
// import ButtonComponent from '../assets/Button'
// import './index.css'

// function Header() {
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkScreen = () => {
//       const match = window.matchMedia('(max-width: 560px)')
//       setIsMobile(match.matches)
//     }

//     checkScreen()

//     window.addEventListener('resize', checkScreen)
//     return () => window.removeEventListener('resize', checkScreen)
//   }, [])

//   return (
//     <>
//       <div style={{opacity: '0'}}  className='header-container'>
//         <img
//           src={isMobile ? '/logoMobile.svg' : '/logo.svg'}
//           alt='Logo'
//         />
//         <ButtonComponent Color='black-button' Text='Pré-registro' />
//       </div>

      
      
//       <div style={{ position: 'fixed', top: '0px' }} className='header-container'>
//         <div className='header-body'> 
//         <img
//           src={isMobile ? '/logoMobile.svg' : '/logo.svg'}
//           alt='Logo'
          
//         />
//         <ButtonComponent Color='black-button' Text='Pré-registro' />
//         </div>
//       </div>
//     </>
    
//   )
// }

// export default Header
