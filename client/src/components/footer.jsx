import '../styles/index.css';
function Footer() {
  return (
    <footer>
      <div className="left-side-container">
        <div className="footer-heading-title">
          <h3 className="footer-title">Available for select freelance opportunities</h3>
        </div>
        <div className="footer-text">
          <p>
            Have an exciting project you need <br />
            help with? <br />
            Send me an email or contact me via <br />
            instant message!
          </p>
        </div>
        <span className="espace-container"></span>
        <div className="footerLinks">
          <a className="email-footer-style" href="mailto:frantz.o@icloud.com">
            frantz.o@icloud.com
          </a>
          <a href="#linkedin"> Linkedin logo</a>
          <a href="#Instagram"> Instagram</a>
          <a href="#Github"> GitHub</a>
        </div>
      </div>
      <div className="right-side-container">
        <div className="elementor-left-footer">
          <p className="elementor-left-footer-text">
            Merci de votre visite ! Toujours curieux d’apprendre et de collaborer, je suis ouvert à de nouvelles
            opportunités. <br />
            👉 N’hésitez pas à me contacter pour discuter d’un projet ou simplement échanger !
          </p>
        </div>
        <div className="elementor-right-footer">
          <p className="elementor-right-footer-text">
            Merci de votre visite ! Toujours curieux d’apprendre et de collaborer, je suis ouvert à de nouvelles
          </p>
          <p className="elementor-right-bottom-footer-text">
            Merci de votre visite ! Toujours curieux d’apprendre et de collaborer, je suis ouvert à de nouvelles
            opportunités. 👉 N
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
