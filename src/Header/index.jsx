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



import { useState, useEffect } from 'react'
import ButtonComponent from '../assets/Button'
import './index.css'

function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      const match = window.matchMedia('(max-width: 560px)')
      setIsMobile(match.matches)
    }

    checkScreen()

    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <div className='header-container'>
      <img
        src={isMobile ? '/logoMobile.svg' : '/logo.svg'}
        alt='Logo'
        // style={{ height: '40px' }}
      />
      <ButtonComponent Color='black-button' Text='Pré-registro' />
    </div>
  )
}

export default Header
