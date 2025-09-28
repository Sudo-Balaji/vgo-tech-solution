export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-cols">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <img src="https://cdn.sanity.io/images/zyi2tsap/production/822a0084f94e3acf106e96149bf681768735feb2-1170x650.jpg" alt="VGO" width="36" height="36" style={{ borderRadius: 8 }} />
              <h4 style={{ margin: 0 }}>VGO Tech Solution</h4>
            </div>
            <p className="p">
              Software design, development, testing, and advisory—crafted to accelerate business growth.
            </p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Work</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li>Software Design</li>
              <li>Software Development</li>
              <li>Web & Mobile</li>
              <li>UI/UX Design</li>
              <li>Testing & QA</li>
              <li>IT Consulting</li>
              <li>Document Prep</li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <p className="p">Email: hello@vgotechsolution.com</p>
            <p className="p">Phone: +91 90000 00000</p>
            <p className="p">Chennai, India</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "16px 0", color: "#64748b", fontSize: 12 }}>
        © {new Date().getFullYear()} VGO Tech Solution. All rights reserved.
      </div>
    </footer>
  );
}
