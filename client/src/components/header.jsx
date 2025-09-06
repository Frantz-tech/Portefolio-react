import logo from '../assets/Tenisro-removebg-preview.png';
import '../styles/header.css';
import '../styles/index.css';

function Header() {
  return (
    <header>
      <div className="background">
        <div className="bgcalq"></div>
      </div>
      <nav>
        <div className="nav">
          <a href="#top" id="#top">
            <img className="grp1" src={logo} alt="logopng" />
          </a>
          <ul className="linka">
            <li>
              <a href="#top">// home</a>
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
