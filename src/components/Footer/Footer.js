import React from 'react';

// local imports
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>DNAture Alimentación Natural R.L.</p>
        <p>Costa Rica 🇨🇷 | {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
}
 
export default Footer;