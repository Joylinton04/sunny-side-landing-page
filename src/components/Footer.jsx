import faceBook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <h1>sunnyside</h1>
            <ul>
                <li>About</li>
                <li>services</li>
                <li>projects</li>
            </ul>
            <div className="social-icons">
                <img src={faceBook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
            </div>
        </div>
    </footer>
  )
}
export default Footer;