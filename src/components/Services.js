import React from 'react';

const servicesData = [
  { title: "Hukum Korporat & Komersial", description: "Pendirian perusahaan, merger & akuisisi, perjanjian bisnis, kepatuhan, dan segala aspek hukum untuk operasional bisnis Anda." },
  { title: "Penyelesaian Sengketa & Litigasi", description: "Mewakili Anda dalam sengketa perdata, pidana, maupun tata usaha negara, serta melalui arbitrase dan mediasi." },
  { title: "Hukum Ketenagakerjaan", description: "Memberikan nasihat hukum terkait perjanjian kerja, peraturan perusahaan, perselisihan hubungan industrial, hingga PHK." },
  { title: "Hukum Properti & Real Estate", description: "Membantu dalam transaksi jual beli properti, sewa-menyewa, sengketa tanah, dan perizinan terkait properti." },
  { title: "Hak Kekayaan Intelektual", description: "Pendaftaran dan perlindungan merek dagang, hak cipta, dan paten untuk melindungi aset tak berwujud Anda." },
  { title: "Hukum Keluarga", description: "Menangani masalah hukum terkait waris, wasiat, perkawinan, dan perceraian dengan pendekatan yang sensitif dan solutif." }
];

const Services = () => {
  return (
    <section id="layanan">
      <div className="container">
        <h2>Cakupan Layanan Hukum</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;