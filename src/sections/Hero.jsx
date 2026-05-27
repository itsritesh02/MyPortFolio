import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let mouse = { x: -1000, y: -1000 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const spacing = 40;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const x = c * spacing;
          const y = r * spacing;
          const dist = Math.hypot(x - mouse.x, y - mouse.y);
          const influence = Math.max(0, 1 - dist / 160);
          const size = 1 + influence * 3;
          const alpha = 0.08 + influence * 0.5;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
          ctx.fill();
        }
      }
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="container hero-content">
        <div className="hero-intro">
          <span className="hero-greeting">Hi, I'm</span>
          <h1 className="hero-name">
            Ritesh Kumar<span className="hero-dot">.</span>
          </h1>
          <h2 className="hero-role">
            <span className="hero-role-prefix">I build</span>{" "}
            things for the web.
          </h2>
          <p className="hero-bio">
            Full-stack developer based in India. I craft clean, performant, and
            accessible digital experiences — from backend APIs to pixel-perfect
            frontend.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">6+</span>
            <span className="hero-stat-label">months Exp.</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">6+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat-divider" />
          {/* <div className="hero-stat">
            <span className="hero-stat-num">10+</span>
            <span className="hero-stat-label">Happy Clients</span>
          </div> */}
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">scroll</span>
      </div>
    </section>
  );
}