import React from 'react';
// Simpan gambar tim di src/assets/ dan import seperti di bawah
import teamMember1 from '../assets/profil.png';

const Team = () => {
  return (
    <section id="tim">
      <div className="container">
        <h2>Kenali Tim Profesional Kami</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={teamMember1} alt="Abdul Hodir Matubarda" />
            <h3>Abdul Hodir Matubarda, S.H., M.H.</h3>
            <p className="title">Managing Partner & Founder</p>
            <p>Ahli dalam bidang litigasi komersial dan hukum korporat.</p>
          </div>
          <div className="team-card">
            <img src={teamMember1} alt="Nama Rekan" />
            <h3>Nama Rekan, S.H.</h3>
            <p className="title">Senior Partner</p>
            <p>Fokus pada hukum ketenagakerjaan dan hubungan industrial.</p>
          </div>
          <div className="team-card">
            <img src={teamMember1} alt="Nama Rekan Lain" />
            <h3>Nama Rekan Lain, S.H.</h3>
            <p className="title">Associate Advocate</p>
            <p>Mengkhususkan diri pada hukum properti dan sengketa pertanahan.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;