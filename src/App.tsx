import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuienesSomos from './components/QuienesSomos';
import AreasDeAccion from './components/AreasDeAccion';
import Historias from './components/Historias';
import ComoColaborar from './components/ComoColaborar';
import Agenda from './components/Agenda';
import Testimonios from './components/Testimonios';
import Equipo from './components/Equipo';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll as EventListener);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <QuienesSomos />
        <AreasDeAccion />
        <Historias />
        <ComoColaborar />
        <Agenda />
        <Testimonios />
        <Equipo />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;