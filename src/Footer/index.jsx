import { useState } from 'react'
import ButtonComponent from '../assets/Button'

import './index.css'


function Footer() {

  
 

  return (
    <div className='Footer-container'>
      
      <div className='Footer-body'>
        <img alt='Logo marca Guidey' loading='lazy' className='Footer-logo' src='/logo.svg'></img>
        <p className='Footer-txt'>©2025 Guidey.com.br</p>
        <p className='Footer-txt'>guidey.contact@gmail.com.br</p>
        <p className='Footer-txt'>Feito com 💜 no Brasil </p>
      </div>
      
    </div>
  )
}

export default Footer
