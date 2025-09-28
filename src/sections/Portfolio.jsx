import SectionTitle from "../components/SectionTitle";

const items = [
  { title:"FinTech Web App", img:"/src/assets/portfolio-1.jpg", tag:"Web" },
  { title:"Retail Mobile App", img:"/src/assets/portfolio-2.jpg", tag:"Mobile" },
  { title:"SaaS Dashboard", img:"/src/assets/portfolio-3.jpg", tag:"UI/UX" },
  { title:"Healthcare Platform", img:"/src/assets/portfolio-4.jpg", tag:"Backend" }
];

export default function Portfolio(){
  return (
    <div className="container">
      <SectionTitle eyebrow="Work" title="Selected projects" description="A snapshot of recent engagements across industries and platforms." />
      <div className="grid grid-3" style={{marginTop:24}}>
        {items.map(it=>(
          <div key={it.title} className="card" style={{padding:0,overflow:"hidden"}}>
            <img src={it.img} alt={it.title} style={{height:190,width:"100%",objectFit:"cover"}} />
            <div style={{padding:16}}>
              <div className="badge">{it.tag}</div>
              <div style={{fontWeight:600,marginTop:6}}>{it.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
