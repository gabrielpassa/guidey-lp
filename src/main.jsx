// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import Header from './Header/index.jsx'
// import Hero from './Hero/index.jsx'
// import ImpactSection from './ImpactSection/index.jsx'
// import Feature1 from './Feature1/index.jsx'
// import Feature2 from './Feature2/index.jsx'
// import BentoGrid from './BentoGrid/index.jsx'
// import LastCTA from './LastCTA/index.jsx'
// import Footer from './Footer/index.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Header/>
//     <Hero/>
//     <ImpactSection/>
//     <Feature1/>
//     <Feature2/>
//     <BentoGrid/>
//     <LastCTA/>
//     <Footer/>
//   </StrictMode>,
// )







import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Header/index.jsx'
import Hero from './Hero/index.jsx'
import ImpactSection from './ImpactSection/index.jsx'
import Feature1 from './Feature1/index.jsx'
import Feature2 from './Feature2/index.jsx'
import BentoGrid from './BentoGrid/index.jsx'
import LastCTA from './LastCTA/index.jsx'
import Footer from './Footer/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <ImpactSection />
    <Feature1 />
    <Feature2 />
    <BentoGrid />
    <LastCTA />
    <Footer />
  </StrictMode>,
)

// Script para aplicar CSS no body continuamente
const applyBodyStyle = () => {
  document.body.style.margin = '0'
  document.body.style.padding = '0'
  document.body.style.display = 'flex'
  document.body.style.justifyContent = 'center'
  document.body.style.overflowX = 'hidden'
}

// Aplica inicialmente
applyBodyStyle()

// Reaplica em interações
const interactionEvents = ['mousemove', 'scroll', 'keydown', 'click', 'touchstart']
interactionEvents.forEach(event => {
  window.addEventListener(event, applyBodyStyle, { passive: true })
})

// Reaplica periodicamente
setInterval(applyBodyStyle, 1000)
