export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <div className="eyebrow"></div>
          <h1>Building reliable software that moves business forward</h1>
          <p>End-to-end software design, development, and QA—plus advisory services—to ship fast with confidence.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn primary">Get a Free Quote</a>
            <a href="#services" className="btn ghost">Explore Services</a>
          </div>
        </div>
        <div>
          <img
            src="/src/assets/hero-placeholder.jpg"
            alt="Team collaborating"
            style={{ borderRadius: "20px", boxShadow: "var(--shadow)" }}
          />
        </div>
      </div>
    </section>
  );
}
