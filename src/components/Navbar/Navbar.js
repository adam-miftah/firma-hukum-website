import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  // 1. Definisikan detail WhatsApp di sini
  const phoneNumber = '6281234567890'; // <-- Ganti dengan nomor Anda
  const message = 'Halo, saya ingin berkonsultasi mengenai masalah hukum saya dari website Anda.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'layanan', 'tentang', 'tim', 'artikel', 'kontak'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="Law Firm Logo" className="logo-image" />
        <div className="logo-text">
          <span className="firm-name">LAW FIRM</span>
          <span className="firm-name-main">ABDUL HODIR MATUBARDA & CO</span>
          <span className="firm-tagline">ADVOCATES & LEGAL CONSULTANT</span>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#home" className={activeLink === 'home' ? 'active' : ''}>HOME</a></li>
        <li><a href="#layanan" className={activeLink === 'layanan' ? 'active' : ''}>LAYANAN</a></li>
        <li><a href="#tentang" className={activeLink === 'tentang' ? 'active' : ''}>TENTANG KAMI</a></li>
        <li><a href="#tim" className={activeLink === 'tim' ? 'active' : ''}>TIM KAMI</a></li>
        <li><a href="#artikel" className={activeLink === 'artikel' ? 'active' : ''}>ARTIKEL</a></li>
        <li><a href="#kontak" className={activeLink === 'kontak' ? 'active' : ''}>KONTAK</a></li>
      </ul>
      
      <a 
        href={whatsappUrl} 
        className="contact-button"
        target="_blank" 
        rel="noopener noreferrer"
      >
        HUBUNGI KAMI
      </a>

    </nav>
  );
};

export default Navbar;