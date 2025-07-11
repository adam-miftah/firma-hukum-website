import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State untuk status pengiriman form
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah halaman reload
    setStatus('Mengirim...'); // Tampilkan status "Mengirim..."

    try {
      // Kirim data ke endpoint Formspree Anda
      const response = await fetch('https://formspree.io/f/xovwgkzy', { // <-- GANTI DENGAN URL ANDA
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Jika berhasil
        setStatus('Pesan berhasil terkirim! Terima kasih.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Kosongkan form
      } else {
        // Jika ada error dari server
        setStatus('Gagal mengirim pesan, silakan coba lagi.');
      }
    } catch (error) {
      // Jika ada error jaringan
      console.error('Submit error:', error);
      setStatus('Gagal mengirim pesan, silakan periksa koneksi Anda.');
    }
  };

  return (
    <section id="kontak">
      <div className="container">
        <h2>Hubungi Kami</h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '-30px auto 50px auto' }}>
          Langkah pertama Anda menuju solusi hukum yang tepat dimulai dari sini.
        </p>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Alamat Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subjek</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan Anda</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              {status === 'Mengirim...' ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
            
            {/* Tampilkan pesan status setelah submit */}
            {status && <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{status}</p>}

          </form>
          <div className="contact-details">
            <p><FaMapMarkerAlt className="icon" /> Gedung Perkantoran ABC, Lantai 10<br />Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan, 12190</p>
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