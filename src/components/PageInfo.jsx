import imageTransform from '../assets/desktop/image-transform.jpg'
import imageStand from '../assets/desktop/image-stand-out.jpg'
import imageApple from '../assets/desktop/image-graphic-design.jpg'
import imageOrange from '../assets/desktop/image-photography.jpg'

const PageInfo = () => {
  return (
    <section className="page-info">
        <section className="section">
            <div className="section-info">
               <div>
                    <h1>Transform your <br/>brand</h1>
                    <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <p>Learn more</p>
               </div>
            </div>
            <div className="section-img">
                <img src={imageTransform} alt="" />
            </div>
        </section>
        <section className="section">
            <div className="section-img">
                <img src={imageStand} alt="" />
            </div>
            <div className="section-info">
               <div>
                    <h1>Stand out to the right<br/>audience</h1>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                    <p>Learn more</p>
               </div>
            </div>
        </section>
        <section className="section-2">
            <div className="section-img-info-1">
                <div className='section-info-img'>
                    <img src={imageApple} alt="" />
                </div>
                <div className='section-2-info'>
                    <h1>Graphic design</h1>
                    <div>
                        <p>Great design makes you memorable. We deliver</p>
                        <p>artwork that underscores your brand message</p>
                        <p>and captures potential clients' attention.</p>
                    </div>
                </div>
            </div>
            <div className="section-img-info-2">
                <div className='section-info-img'>
                    <img src={imageOrange} alt="" />
                </div>
                <div className='section-2-info'>
                    <h1>Photography</h1>
                   <div>
                        <p>Increase your credibility by getting the</p>
                        <p>most stunning, high-quality photos that improve your</p>
                        <p>business image.</p>
                    </div>  
                </div>
            </div>
           {/*  <div className="section-img-info-1">
                <div className='section-info-img'>
                    <img src={imageApple} alt="" />
                </div>
                <div className='section-2-info'>
                    <h1>Graphic design</h1>
                    <div>
                        <p>Great design makes you memorable. We deliver</p>
                        <p>artwork that underscores your brand message</p>
                        <p>and captures potential clients' attention.</p>
                    </div>
                </div>
            </div>
            <div className="section-img-info-2">
                <div className='section-info-img'>
                    <img src={imageOrange} alt="" />
                </div>
                <div className='section-2-info'>
                    <h1>Photography</h1>
                   <div>
                        <p>Increase your credibility by getting the</p>
                        <p>most stunning, high-quality photos that improve your</p>
                        <p>business image.</p>
                    </div>  
                </div>
            </div> */}
        </section>
    </section>
  )
}

export default PageInfo;