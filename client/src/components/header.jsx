import { useEffect, useState } from 'react';
import logo from '../assets/Tenisro-removebg-preview.png';
import '../styles/header.css';
import '../styles/index.css';

function Header() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 1.4) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header>
      <div className="background">
        <div className="bgcalq"></div>
      </div>

      {/* Nav de base */}
      <nav className="nav">
        <a href="#logo">
          <img className="grp1" src={logo} alt="logopng" />
        </a>
        <ul className="linka">
          <li>
            <a href="#home">// home</a>
          </li>
          <li>
            <a href="#exp">// expertise</a>
          </li>
          <li>
            <a href="#work">// work</a>
          </li>
          <li>
            <a href="#contact">// contact</a>
          </li>
        </ul>
      </nav>

      {/* Placeholder pour la nav sticky */}
      {sticky && <div style={{ height: '80px' }}></div>}

      {/* Nav sticky avec blur */}
      <nav className={`navSticky ${sticky ? 'active' : ''}`}>
        <a href="#logo">
          <img className="grp1" src={logo} alt="logopng" />
        </a>
        <ul className="linka">
          <li>
            <a href="#home">// home</a>
          </li>
          <li>
            <a href="#exp">// expertise</a>
          </li>
          <li>
            <a href="#work">// work</a>
          </li>
          <li>
            <a href="#contact">// contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
