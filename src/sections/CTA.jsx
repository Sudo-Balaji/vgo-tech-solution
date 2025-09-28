export default function CTA(){
  return (
    <div className="container">
      <div className="card" style={{background:"var(--brand-700)",color:"#fff",display:"flex",gap:16,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}}>
        <div>
          <div style={{color:"#dbeafe",fontSize:12,letterSpacing:".04em"}}>Start today</div>
          <h3 style={{margin:"6px 0"}}>Have a project in mind?</h3>
          <p style={{margin:0,color:"#e2e8f0"}}>Share requirements and get a tailored proposal.</p>
        </div>
        <a href="#contact" className="btn" style={{background:"#fff",color:"var(--brand-700)"}}>Get a Free Quote</a>
      </div>
    </div>
  );
}
