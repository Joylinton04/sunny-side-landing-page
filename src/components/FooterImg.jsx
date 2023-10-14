import milkbottles from '../assets/desktop/image-gallery-milkbottles.jpg'
import orange from '../assets/desktop/image-gallery-orange.jpg'
import cone from '../assets/desktop/image-gallery-cone.jpg'
import sugarcubes from '../assets/desktop/image-gallery-sugarcubes.jpg'

const FooterImg = () => {
  return (
    <section className='section-3'>
        <ul className='section-3-img'>
            <li><img src={milkbottles} alt="" /></li>
            <li><img src={orange} alt="" /></li>
            <li><img src={cone} alt="" /></li>
            <li><img src={sugarcubes} alt="" /></li>
        </ul>
    </section>
  )
}

export default FooterImg;