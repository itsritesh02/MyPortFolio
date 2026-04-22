import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text-col">
            <p className="section-label">-- about me</p>
            <h2 className="section-title">
              Who I <span className="accent">Am</span>
            </h2>
            <div className="about-paragraphs">
              <p>
                I'm a full-stack developer with a passion for building elegant,
                functional products. My journey started with tinkering on HTML
                pages in school, and it's grown into a serious craft.
              </p>
              <p>
                I specialize in modern JavaScript ecosystems — React on the
                frontend and Node.js on the backend. I care deeply about
                performance, accessibility, and writing code that other
                developers enjoy reading.
              </p>
              <p>
                When I'm not coding, you'll find me hiking, experimenting with
                open-source tools, or reading about distributed systems.
              </p>
            </div>

            <div className="about-highlights">
              {[
                "Available for freelance",
                "Open to full-time roles",
                "Based in India",
              ].map((item, i) => (
                <div key={i} className="about-highlight">
                  <span className="about-checkmark">▸</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="about-image-col">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <span className="about-placeholder-text">YOUR</span>
                <span className="about-placeholder-text">PHOTO</span>
              </div>
              <div className="about-image-frame" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}