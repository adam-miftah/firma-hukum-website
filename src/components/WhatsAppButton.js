import React from 'react';
import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa'; // Import ikon WhatsApp

const WhatsAppButton = () => {
  // Ganti nomor di bawah ini dengan nomor WhatsApp Anda
  const phoneNumber = '6281319310355'; 
  const message = 'Halo, saya ingin berkonsultasi mengenai masalah hukum saya.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;