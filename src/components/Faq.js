import React, { useState } from 'react';

// Data untuk pertanyaan dan jawaban
const faqData = [
  {
    question: "Bagaimana cara memulai konsultasi hukum dengan firma Anda?",
    answer: "Anda dapat memulai dengan menghubungi kami melalui telepon di (021) 1234 5678 atau mengisi formulir kontak di situs web kami. Tim kami akan segera menjadwalkan sesi konsultasi awal dengan salah satu advokat kami untuk membahas kebutuhan Anda."
  },
  {
    question: "Bidang hukum apa saja yang menjadi spesialisasi Anda?",
    answer: "Kami memiliki spesialisasi di berbagai bidang, termasuk Hukum Korporat & Komersial, Penyelesaian Sengketa (Litigasi & Mediasi), Hukum Ketenagakerjaan, Properti, dan Hak Kekayaan Intelektual. Silakan kunjungi halaman 'Layanan' untuk detail lebih lanjut."
  },
  {
    question: "Bagaimana struktur biaya jasa hukum ditentukan?",
    answer: "Struktur biaya kami bervariasi tergantung pada kompleksitas dan jenis kasus. Kami menawarkan beberapa skema, termasuk biaya per jam (hourly rate) dan biaya borongan (lump sum). Kami akan membahasnya secara transparan pada sesi konsultasi awal Anda."
  },
  {
    question: "Apakah informasi kasus saya akan dijaga kerahasiaannya?",
    answer: "Tentu saja. Kerahasiaan klien adalah prioritas utama kami. Semua informasi yang Anda berikan, baik dalam konsultasi maupun selama penanganan kasus, akan kami jaga kerahasiaannya sesuai dengan kode etik profesi advokat."
  }
];

const Faq = () => {
  // State untuk melacak item FAQ mana yang sedang terbuka
  const [openIndex, setOpenIndex] = useState(null);

  // Fungsi untuk membuka/menutup item
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <h2>Pertanyaan Umum (FAQ)</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => handleToggle(index)}>
                <span>{item.question}</span>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;