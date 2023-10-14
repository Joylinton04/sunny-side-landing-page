import imageHeader from '../assets/desktop/image-header.jpg'
import iconArrow from '../assets/icon-arrow-down.svg'

const Nav = () => {
  return (
    <nav>        
        <div className='header-img'>
            <img src={imageHeader} alt="" />
        </div>
        <div className='nav-info'>
            <h1>sunnyside</h1>
            <ul>
                <li>about</li>
                <li>services</li>
                <li>projects</li>
                <li>contact</li>
            </ul>
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