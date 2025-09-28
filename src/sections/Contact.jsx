import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [status, setStatus] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const errors = {};
    if (!data.name || data.name.trim().length < 2) errors.name = "Name is required";
    if (!data.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(data.email)) errors.email = "Enter a valid email";
    if (!data.phone || data.phone.replace(/\D/g, "").length < 7) errors.phone = "Phone looks too short";
    if (!data.requirements || data.requirements.trim().length < 10) errors.requirements = "Add a bit more detail";
    if (Object.keys(errors).length) {
      setStatus({ ok: false, errors });
      return;
    }
    console.log("Contact submission:", data);
    setStatus({ ok: true });
    e.currentTarget.reset();
  }

  const errs = (status && !status.ok && status.errors) || {};

  return (
    <div className="container">
      <SectionTitle eyebrow="Contact" title="Tell us your requirements" description="Fill in a few details and the team will respond with timelines and estimates." />
      <div className="grid grid-2" style={{ marginTop: 24, alignItems: "start" }}>
        <div>
          <img src="/src/assets/contact-placeholder.jpg" alt="Contact" style={{ height: 320, objectFit: "cover", width: "100%", borderRadius: 12 }} />
        </div>
        <form className="form" onSubmit={onSubmit} noValidate>
          <div>
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Full name" />
            {errs.name && <div className="error">{errs.name}</div>}
          </div>
          <div>
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="name@example.com" />
            {errs.email && <div className="error">{errs.email}</div>}
          </div>
          <div>
            <label className="label">Phone</label>
            <input name="phone" type="tel" className="input" placeholder="+91 9XXXX XXXXX" />
            {errs.phone && <div className="error">{errs.phone}</div>}
          </div>
          <div>
            <label className="label">Requirements</label>
            <textarea name="requirements" rows="5" className="textarea" placeholder="Briefly describe your project, timeline, and budget range"></textarea>
            {errs.requirements && <div className="error">{errs.requirements}</div>}
          </div>
          <button type="submit" className="btn primary" style={{ width: "100%" }}>
            Submit
          </button>
          {status?.ok && <div className="success">Thank you! Your request has been captured.</div>}
        </form>
      </div>
    </div>
  );
}
