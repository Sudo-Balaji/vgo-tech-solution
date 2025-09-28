import SectionTitle from "../components/SectionTitle";

const items = [
  { title: "Software Design", desc: "Architecture, domain modeling, and scalable patterns for robust systems.", img: "/src/assets/service-design.jpg" },
  { title: "Software Development", desc: "Backend, APIs, and integrations using modern stacks and CI/CD.", img: "/src/assets/service-dev.jpg" },
  { title: "Web Development", desc: "Responsive, SEO-friendly websites and web apps built for speed.", img: "/src/assets/service-web.jpg" },
  { title: "Mobile App Development", desc: "Native and cross‑platform apps with smooth UX and offline-first.", img: "/src/assets/service-mobile.jpg" },
  { title: "UI/UX Design", desc: "Research-led interfaces, design systems, and rapid prototyping.", img: "/src/assets/service-uiux.jpg" },
  { title: "Software Testing & QA", desc: "Automation, manual testing, and performance audits for quality.", img: "/src/assets/service-qa.jpg" }
];

export default function Services() {
  return (
    <div className="container">
      <SectionTitle eyebrow="Services" title="End-to-end delivery" description="From planning to production, expert teams ship secure, maintainable software." />
      <div className="grid grid-3" style={{ marginTop: 24 }}>
        {items.map((s) => (
          <div key={s.title} className="card">
            <img className="thumb" src={s.img} alt={s.title} />
            <h3 style={{ margin: "8px 0 4px" }}>{s.title}</h3>
            <p className="p">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
