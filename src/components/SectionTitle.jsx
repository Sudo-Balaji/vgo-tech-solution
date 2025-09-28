export default function SectionTitle({ eyebrow, title, description, align = "center" }) {
  return (
    <div className="container" style={{ textAlign: align }}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="h2">{title}</h2>
      {description && <p className="p">{description}</p>}
    </div>
  );
}
