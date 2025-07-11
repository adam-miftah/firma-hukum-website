import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="kontak">
      <div className="container">
        <h2>Hubungi Kami</h2>
        <p style={{textAlign: 'center', maxWidth: '600px', margin: '-30px auto 50px auto'}}>
          Langkah pertama Anda menuju solusi hukum yang tepat dimulai dari sini. Jadwalkan konsultasi awal dengan tim kami hari ini.
        </p>
        <div className="contact-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Alamat Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subjek</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan Anda</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Kirim Pesan</button>
          </form>
          <div className="contact-details">
            <p><FaMapMarkerAlt className="icon" /> Gedung Perkantoran ABC, Lantai 10<br/>Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan, 12190</p>
            <p><FaEnvelope className="icon" /> info@matubardalaw.com</p>
            <p><FaPhone className="icon" /> (021) 1234 5678</p>
            <p><FaClock className="icon" /> Senin - Jumat: 09:00 - 17:00 WIB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;