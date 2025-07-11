import React from 'react';
import Spline from '@splinetool/react-spline'; // <-- 1. Import Spline

const Hero = () => {
  return (
    // Kita tidak lagi menggunakan className 'hero-section' untuk background,
    // tapi tetap gunakan untuk padding dan layouting umum.
    <section id="home" className="hero-section">

      {/* 2. Komponen Spline sebagai background */}
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/U9yixoBQfEJkwGWK/scene.splinecode" /> 
        {/* ^-- GANTI DENGAN URL SPLINE ANDA SENDIRI */}
      </div>

      {/* 3. Konten tetap berada di atas background */}
      <div className="container hero-content-container">
        <div className="hero-content">
          <h1>Solusi Hukum Strategis dan Terpercaya untuk Masa Depan Anda</h1>
          <p>
            Di ABDUL HODIR MATUBARDA & CO, kami mendedikasikan keahlian dan pengalaman kami untuk melindungi kepentingan Anda. Kami menyediakan layanan hukum yang komprehensif, personal, dan berorientasi pada hasil.
          </p>
          <div>
            <a href="#kontak" className="btn btn-primary">Jadwalkan Konsultasi</a>
            <a href="#layanan" className="btn btn-secondary">Pelajari Layanan Kami</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;