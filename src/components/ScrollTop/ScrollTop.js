import React, {useState, useEffect} from 'react'
import { BiUpArrow } from 'react-icons/bi';
import "./scrolltop.css"


const ScrollTop = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', checkScrollTop) 
      return () => window.removeEventListener('scroll', checkScrollTop)
    })
    
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  
    return (
        <BiUpArrow className="scroll__top" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}  />
    )
}

export default ScrollTop
