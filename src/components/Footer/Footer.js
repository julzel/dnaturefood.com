import React from 'react';

// local imports
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <a href="https://www.instagram.com/dnaturecr/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram" /> <span>Síguenos en Instagram</span>
        </a>
      </nav>
    </footer>
  );
}
 
export default Footer;