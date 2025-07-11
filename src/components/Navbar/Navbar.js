import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false); 

  const phoneNumber = '6281234567890';
  const message = 'Halo, saya ingin berkonsultasi mengenai masalah hukum saya dari website Anda.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const toggleMenu = () => setIsOpen(!isOpen); 

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false); 
      const sections = ['home', 'layanan', 'tentang', 'tim', 'artikel', 'kontak'];
      const scrollPosition = window.scrollY + 150;
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]); 

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <a href="#home"> 
          <img src={logo} alt="Law Firm Logo" className="logo-image" />
        </a>
        <div className="logo-text">
          <span className="firm-name">LAW FIRM</span>
          <span className="firm-name-main">ABDUL HODIR MATUBARDA & CO</span>
          <span className="firm-tagline">ADVOCATES & LEGAL CONSULTANT</span>
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={toggleMenu}>HOME</a></li>
        <li><a href="#layanan" className={activeLink === 'layanan' ? 'active' : ''} onClick={toggleMenu}>LAYANAN</a></li>
        <li><a href="#tentang" className={activeLink === 'tentang' ? 'active' : ''} onClick={toggleMenu}>TENTANG KAMI</a></li>
        <li><a href="#tim" className={activeLink === 'tim' ? 'active' : ''} onClick={toggleMenu}>TIM KAMI</a></li>
        <li><a href="#artikel" className={activeLink === 'artikel' ? 'active' : ''} onClick={toggleMenu}>ARTIKEL</a></li>
        <li><a href="#kontak" className={activeLink === 'kontak' ? 'active' : ''} onClick={toggleMenu}>KONTAK</a></li>
        
        <li className="nav-button-mobile">
          <a href={whatsappUrl} className="contact-button" target="_blank" rel="noopener noreferrer">HUBUNGI KAMI</a>
        </li>
      </ul>

      <a href={whatsappUrl} className="contact-button desktop" target="_blank" rel="noopener noreferrer">HUBUNGI KAMI</a>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;