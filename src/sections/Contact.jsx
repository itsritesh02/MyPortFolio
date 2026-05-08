import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section-label">-- get in touch</p>
        <h2 className="section-title">
          Contact <span className="accent">Me</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-info-col">
            <p className="contact-tagline">
              Have a project in mind or just want to say hello?
              My inbox is always open.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-ci-label">Email</span>
                <a href="mailto:yourname@email.com" className="contact-ci-value">
                  itsritesh02@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-ci-label">Location</span>
                <span className="contact-ci-value">Banur, Punjab, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-ci-label">Availability</span>
                <span className="contact-ci-value contact-available">
                  <span className="contact-dot" />
                  Open to opportunities
                </span>
              </div>
            </div>

            <div className="contact-socials">
              {[
                { label: "GitHub", href: "https://github.com/itsritesh02" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/ritesh-kumar-3379ba399/" },
                // { label: "Twitter", href: "https://twitter.com" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="contact-social-link"
                  target="_blank" rel="noreferrer">
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-col">
            {status === "sent" ? (
              <div className="contact-success-msg">
                <span className="contact-success-icon">✓</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-outline" onClick={() => setStatus(null)}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      required
                      className="contact-input"
                    />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi, I'd like to talk about..."
                    rows={6}
                    required
                    className="contact-textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary contact-submit-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}