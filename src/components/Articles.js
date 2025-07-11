import React from 'react';

const Articles = () => {
  return (
    <section id="artikel">
      <div className="container">
        <h2>Artikel & Wawasan Hukum Terkini</h2>
        <div className="articles-grid">
          <div className="article-card">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Article 1" />
            <div className="article-content">
              <h3>Memahami Dampak Omnibus Law Cipta Kerja</h3>
              <p>Analisis mendalam tentang perubahan kunci dalam regulasi bisnis...</p>
              <a href="#">Baca Selengkapnya &rarr;</a>
            </div>
          </div>
          <div className="article-card">
            <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1776&auto=format&fit=crop" alt="Article 2" />
            <div className="article-content">
              <h3>Mediasi: Solusi Efektif Sengketa</h3>
              <p>Kapan mediasi menjadi pilihan yang lebih baik daripada litigasi? ...</p>
              <a href="#">Baca Selengkapnya &rarr;</a>
            </div>
          </div>
          <div className="article-card">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="Article 3" />
            <div className="article-content">
              <h3>Langkah Penting Transaksi Properti</h3>
              <p>Dari uji tuntas hukum hingga penandatanganan akta, pastikan...</p>
              <a href="#">Baca Selengkapnya &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;