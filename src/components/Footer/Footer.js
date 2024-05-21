// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} InfoCidadão. Todos os direitos reservados.</p>
        {/* Adicione outros elementos do footer, como links para páginas importantes */}
      </div>
    </footer>
  );
};

export default Footer;
