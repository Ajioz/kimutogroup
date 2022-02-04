import { useEffect } from 'react';
import './footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import card3 from '../../images/instagram/thumb-card3.png'
import card4 from '../../images/instagram/thumb-card4.png'
import card5 from '../../images/instagram/thumb-card5.png'
import card6 from '../../images/instagram/thumb-card6.png'
import card7 from '../../images/instagram/thumb-card7.png'
import card8 from '../../images/instagram/thumb-card8.png'

const Footer = () => {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    })
  }

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <>
      <footer className="footer">
      <div className="containerz">
        <div className="about-us" data-aos="fade-right" data-aos-delay="200">
          <h2>About Us</h2>
          <p>
           KEL provides quality management services and human capital/manpower solutions (local and expatriate). We have vast resources of highly skilled and dedicated professionals (project managers, engineers, technicians and trainers).
          </p>
        </div>
        <div className="newsletter" data-aos="fade-right" data-aos-delay="200">
          <h2>NewsLetter</h2>
          <p>Stay Updated with our latest</p>
          <div className="form-element">
            <input type="text" placeholder="Email" required />
            <span><i className="fas fa-chevron-right"></i></span>
          </div>
        </div>
        <div className="instagram" data-aos="fade-left" data-aos-delay="200">
          <h2>Instagram</h2>
          <div className="flex-row">
            <img src={card3} alt="ins1" />
            <img src={card4} alt="ins2" />
            <img src={card5} alt="ins3" />
          </div>
          <div className="flex-row">
            <img src={card6} alt="ins4" />
            <img src={card7} alt="ins5" />
            <img src={card8} alt="ins6" />
          </div>
        </div>
        <div className="follow" data-aos="fade-left" data-aos-delay="200">
          <h2>Follow Us</h2>
          <p>Let us be Social</p>
           <div>
                <a href="https://web.facebook.com" target="_blank" rel="noreferrer">
                  <i className="topIcon fab fa-facebook-square"></i>
                </a>

                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                  <i className="topIcon fab fa-twitter-square"></i>
                </a>

                <a href="whatsapp://send?text=Hi, I'd love to know more about Kimuto Group, I am reaching you from your official webpage!&phone=+2348060779928" target="_blank" rel="noreferrer">
                  <i className="topIcon fa fa-whatsapp" aria-hidden="true"></i>
                </a>

                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <i className="topIcon fab fa-instagram-square"></i>
                </a>
          </div>
        <h2>Call us on</h2>
        <div>
          <i className="fas fa-phone-volume"> +234-8060779928</i>
        </div>
        </div>
      </div>

      <div className="moveRight flex-row">
        <h4 className="text-gray">
          Copyright &copy; | 2022 All right reserved - Kimuto Engineering |&nbsp;
          <a href="https://ajiozi.com" target="_blank" rel="noreferrer">
            Powered by <i className="fab fa-twitter"></i>&nbsp;Ajiozi
          </a>
        </h4>
      </div>
     
      <div className="move-up" onClick={scrollUp}>
        <span><i className="fas fa-arrow-circle-up fa-2x"></i></span>
      </div>
    </footer>
    </>
  );
};

export default Footer;
