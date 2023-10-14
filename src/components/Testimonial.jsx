import emily from '../assets/image-emily.jpg'
import Thomas from '../assets/image-thomas.jpg'
import Jennie from '../assets/image-jennie.jpg'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <h1>Client testimonials</h1>
        <div className="test">
            <div className="test-card">
                <div className="test-img">
                    <img src={emily} alt="" />
                </div>
                <div className="test-info">
                    <p> We put our trust in Sunnyside and they </p>
                    <p>delivered, making sure our needs were met </p>
                    <p>and deadlines were always hit.</p>
                </div>
                <div className="test-author">
                    <h2>Emily R.</h2>
                    <p>Marketing Director</p>
                </div>
            </div>
            <div className="test-card">
                <div className="test-img">
                    <img src={Thomas} alt="" />
                </div>
                <div className="test-info">
                    <p> Sunnyside’s enthusiasm coupled with their </p>
                    <p>keen interest in our brand’s success made it </p>
                    <p>a satisfying and enjoyable experience.</p>
                </div>
                <div className="test-author">
                    <h2>Thomas S.</h2>
                    <p>Chief Operating Officer</p>
                </div>
            </div>
            <div className="test-card">
                <div className="test-img">
                    <img src={Jennie} alt="" />
                </div>
                 <div className="test-info">
                    <p>Incredible end result! Our sales increased</p>
                    <p>over 400% when we worked with Sunnyside.</p>
                    <p>Highly recommended!</p>
                </div>
                <div className="test-author">
                    <h2>Jennie F.</h2>
                    <p>Business Owner</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial;