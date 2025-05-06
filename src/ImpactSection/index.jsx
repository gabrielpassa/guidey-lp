import { useState } from 'react'
import ButtonComponent from '../assets/Button'

import './index.css'


function ImpactSection() {

  const frases = [
      "Menos churn.",
      "Menos tickets.",
      "Mais retenção.",
      "Mais conversão.",
      "Mais engajamento.",
      "Mais faturamento.",
      "Onboarding eficiente.",
      "Suporte antecipado.",
      "Experiência sem fricção.",
      "Retenção inteligente.",
      "Suporte que fideliza.",
      "Onboarding que engaja.",
      "Ajuda antes da dúvida.",
      "Conversão acelerada.",
      "Suporte ágil.",
      "Onboarding claro.",
      "Suporte proativo.",
      "Menos atrito.",
      "Mais sucesso.",
      "Crescimento sustentável."
  ]
  
 

  return (
    <div className='ImpactSection-container'>
      <h3 className='ImpactSection-headline'>
        O impacto que você espera, com a simplicidade que precisa.
      </h3>
      <h4 className='ImpactSection-subheadline'>
        Transforme a experiência do usuário em conversão, retenção e crescimento.
      </h4>




      <div className="ImpactSection-frases-row-container">
        
        <div className='ImpactSection-frases-shadow-left'></div>
        <div className='ImpactSection-frases-shadow-right'></div>

      <div className="ImpactSection-frases-collum-container">
  {frases.concat(frases).slice().sort(() => Math.random() - 0.5).map((i, idx) => (
    <div className="ImpactSection-frases-body" key={`linha1-${idx}`}>
      <p style={{ whiteSpace: 'nowrap' }}>{i}</p>
    </div>
  ))}
</div>

<div className="ImpactSection-frases-collum-container reverse">
  {frases.concat(frases).slice().sort(() => Math.random() - 0.5).map((i, idx) => (
    <div className="ImpactSection-frases-body" key={`linha2-${idx}`}>
      <p style={{ whiteSpace: 'nowrap' }}>{i}</p>
    </div>
  ))}
</div>

<div className="ImpactSection-frases-collum-container">
  {frases.concat(frases).slice().sort(() => Math.random() - 0.5).map((i, idx) => (
    <div className="ImpactSection-frases-body" key={`linha3-${idx}`}>
      <p style={{ whiteSpace: 'nowrap' }}>{i}</p>
    </div>
  ))}
</div>




      </div>




    </div>
  )
}

export default ImpactSection
