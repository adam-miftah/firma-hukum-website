import React from 'react';
import { FaBalanceScale, FaHandshake, FaGavel, FaBullseye } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="container">
        <h2>Mitra Hukum yang Dapat Anda Andalkan</h2>
        <div className="why-us-grid">
          <div className="why-us-item">
            <FaGavel className="icon" />
            <h3>Tim Ahli & Berpengalaman</h3>
            <p>Tim kami terdiri dari para advokat dan konsultan hukum dengan rekam jejak yang terbukti dalam berbagai kasus.</p>
          </div>
          <div className="why-us-item">
            <FaHandshake className="icon" />
            <h3>Pendekatan Personal</h3>
            <p>Kami meluangkan waktu untuk memahami situasi Anda secara mendalam guna merancang strategi hukum yang efektif.</p>
          </div>
          <div className="why-us-item">
            <FaBalanceScale className="icon" />
            <h3>Integritas dan Profesionalisme</h3>
            <p>Kami menjunjung tinggi etika profesi. Kerahasiaan dan kepercayaan Anda adalah prioritas kami.</p>
          </div>
          <div className="why-us-item">
            <FaBullseye className="icon" />
            <h3>Berorientasi pada Hasil</h3>
            <p>Tujuan utama kami adalah mencapai hasil terbaik bagi klien, baik melalui negosiasi maupun litigasi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;