import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Services /></section>
        <section id="qualification"><Qualification /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
