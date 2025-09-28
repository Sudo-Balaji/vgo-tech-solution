import SectionTitle from "../components/SectionTitle";

export default function About(){
  return (
    <div className="container">
      <SectionTitle eyebrow="About" title="Partner for modern software" description="VGO Tech Solution designs, builds, and tests reliable software with a focus on user experience and business impact." />
      <div className="grid grid-2" style={{alignItems:"center",marginTop:24}}>
        <img src="https://fastpayltd.co.uk/wp-content/uploads/2020/01/starting-a-software-company.jpg" alt="VGO team" style={{borderRadius:20,boxShadow:"var(--shadow)"}} />
        <div>
          <h3>Design + Engineering + QA</h3>
          <p className="p" style={{marginTop:12}}>Cross-functional squads deliver faster through clear requirements, strong architecture, and continuous testing.</p>
          <div className="grid grid-2" style={{marginTop:16}}>
            <div className="card">
              <div style={{fontWeight:600}}>Branding & Collateral</div>
              <p className="p">Logos, brochures, and visual systems to support launches.</p>
            </div>
            <div className="card">
              <div style={{fontWeight:600}}>Ongoing Support</div>
              <p className="p">Enhancements, maintenance, and performance tuning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
