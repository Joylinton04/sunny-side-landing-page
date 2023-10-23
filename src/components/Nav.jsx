import imageHeader from '../assets/desktop/image-header.jpg'
import iconArrow from '../assets/icon-arrow-down.svg'
import useWindowSize from '../hooks/useWindowSize'
import hamburgerIcon from '../assets/icon-hamburger.svg'
import { useEffect, useRef } from 'react'

const Nav = () => {
    const {width} = useWindowSize()
    const ref = useRef()

    function handleMobileMenu () {
        if (ref.current.classList.contains('mb-screen')) {
            ref.current.classList.remove('mb-screen');
            ref.current.style.display = "none"
          } else {
            ref.current.classList.add('mb-screen');
            ref.current.style.display = "block"
          }
          
    }

  return (
    <nav>        
        <div className='header-img'>
            <img src={imageHeader} alt="" />
        </div>
        <div className='nav-info'>
            <h1>sunnyside</h1>
            {width > 715 ?
                <ul className='lr-screen'>
                    <li>about</li>
                    <li>services</li>
                    <li>projects</li>
                    <li>contact</li>
                </ul>
               : <div>
                    <button className='humburger-icon' onClick={handleMobileMenu}>
                        <img src={hamburgerIcon} alt=""/>
                    </button>
                    <div className='mb-screen' ref={ref}>
                        <ul className='mb-screen-menu'>
                            <li>about</li>
                            <li>services</li>
                            <li>projects</li>
                            <li>contact</li>
                        </ul>
                    </div>
               </div>
            }
        </div>
        <div className='header-mess'>
            <h1>we are creatives</h1>
            <div className='arrow-down'>
                <img src={iconArrow} alt="" />
            </div>
        </div>
    </nav>
  )
}

export default Nav;