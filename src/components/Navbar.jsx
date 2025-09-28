export default function Navbar() {
  const items = [
    { href: "#services", label: "Services" },
    { href: "#advisory", label: "Advisory" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="nav nav-wide">
      <div className="nav-inner-modern">
        <a href="#" className="nav-brand-modern">
          <img
            src="https://cdn.sanity.io/images/zyi2tsap/production/822a0084f94e3acf106e96149bf681768735feb2-1170x650.jpg"
            alt="VGO Tech Solution"
            width="40"
            height="40"
            style={{ borderRadius: 10 }}
          />
          <span className="brand-name">VGO Tech Solution</span>
        </a>
        <nav className="nav-links-modern">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="nav-link-pill">
              {i.label}
            </a>
          ))}
          <a href="#contact" className="btn nav-quote-green">
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
