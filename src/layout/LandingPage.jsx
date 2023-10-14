import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PageInfo from "../components/PageInfo";
import Testimonial from "../components/Testimonial";
import FooterImg from '../components/FooterImg'

const LandingPage = () => {
  return (
    <div className="landing-page">
        <Nav/>
        <PageInfo/>
        <Testimonial/>
        <FooterImg/>
        <Footer/>
    </div>
  )
}

export default LandingPage;