import SectionTitle from "../components/SectionTitle";

const advisory = [
  { title:"IT Consulting", points:["Technology roadmaps and modernization","Cloud, DevOps, and security guidance","Cost optimization and ROI analysis"], img:"/src/assets/advisory-consulting.jpg" },
  { title:"Document Preparation", points:["BRD, SRS, user stories, and acceptance criteria","Process docs, SOPs, diagrams","RFP/RFQ responses and proposals"], img:"/src/assets/advisory-docs.jpg" }
];

export default function Advisory(){
  return (
    <div className="container">
      <SectionTitle eyebrow="Advisory" title="Strategic guidance" description="Reduce risk and accelerate outcomes with expert consulting and clear documentation." />
      <div className="grid grid-2" style={{marginTop:24}}>
        {advisory.map(a=>(
          <div key={a.title} className="card">
            <img className="thumb" src={a.img} alt={a.title} />
            <h3 style={{margin:"8px 0 4px"}}>{a.title}</h3>
            <ul className="list">
              {a.points.map(p=> <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
