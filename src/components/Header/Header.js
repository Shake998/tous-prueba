import Navbar from './../Navbar/Navbar.js';
import './Header.css'; 

function Header() {
  return (
    <div className="Header">
      <div className="top-message">
        ENVÍO ESTÁNDAR GRATIS EN TODAS LAS COMPRAS DE 100 € O MÁS
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
