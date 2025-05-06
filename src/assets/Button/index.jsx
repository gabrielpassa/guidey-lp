import { useState, useEffect } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import './index.css';

function ButtonComponent({ Text: text, Color , FullWidth: isFull}) {

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
    <div style={!!isFull && !!isMobile ? {width:'100%'} : null} className={`button-body ${Color}`}>
      <p>{text}</p>
      <IconArrowRight size={24} stroke={2} />
    </div>
  );
}

export default ButtonComponent;
