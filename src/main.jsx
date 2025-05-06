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
    <Header/>
    <Hero/>
    <ImpactSection/>
    <Feature1/>
    <Feature2/>
    <BentoGrid/>
    <LastCTA/>
    <Footer/>
  </StrictMode>,
)
