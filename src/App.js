import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/Whyus';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <About />
        <Team />
        <Articles />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;