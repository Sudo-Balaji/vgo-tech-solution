import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Advisory from "./sections/Advisory";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section id="services" className="section"><Services /></section>
        <section id="advisory" className="section alt"><Advisory /></section>
        <section id="about" className="section"><About /></section>
        <section id="portfolio" className="section alt"><Portfolio /></section>
        <section className="section"><Testimonials /></section>
        <section className="section"><CTA /></section>
        <section id="contact" className="section alt"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
