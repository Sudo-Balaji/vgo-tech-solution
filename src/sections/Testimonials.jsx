import SectionTitle from "../components/SectionTitle";

const quotes = [
  { name:"Anika R.", role:"Product Lead", text:"VGO shipped on time with excellent quality and clear communication." },
  { name:"Rahul S.", role:"CTO", text:"Their architecture guidance saved months and reduced costs significantly." }
];

export default function Testimonials(){
  return (
    <div className="container">
      <SectionTitle eyebrow="Testimonials" title="Results clients feel" description="Teams trust VGO to deliver measurable outcomes, not just code." />
      <div className="grid grid-2" style={{marginTop:24}}>
        {quotes.map(q=>(
          <div key={q.name} className="card">
            <p style={{fontStyle:"italic"}}>“{q.text}”</p>
            <div className="p" style={{marginTop:8,fontSize:14}}>{q.name} — {q.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
