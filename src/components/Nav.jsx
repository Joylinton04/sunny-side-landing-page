import imageHeader from '../assets/desktop/image-header.jpg'
import iconArrow from '../assets/icon-arrow-down.svg'
import useWindowSize from '../hooks/useWindowSize'
import hamburgerIcon from '../assets/icon-hamburger.svg'

const Nav = () => {
    const {width} = useWindowSize()
  return (
    <nav>        
        <div className='header-img'>
            <img src={imageHeader} alt="" />
        </div>
        <div className='nav-info'>
            <h1>sunnyside</h1>
            {width > 715 ?
                <ul>
                    <li>about</li>
                    <li>services</li>
                    <li>projects</li>
                    <li>contact</li>
                </ul>
               : <div>
                <button className='humburger-icon'><img src={hamburgerIcon} alt=""/></button>
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