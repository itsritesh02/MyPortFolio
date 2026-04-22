import { skills } from "../data/skilldata";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-label">-- what I know</p>
        <h2 className="section-title">
          My <span className="accent">Skills</span>
        </h2>

        <div className="skills-grid">
          {skills.map((group, gi) => (
            <div key={gi} className="skills-group">
              <h3 className="skills-group-title">{group.category}</h3>
              <div className="skills-bars">
                {group.items.map((skill, si) => (
                  <div key={si} className="skills-bar-item">
                    <div className="skills-bar-meta">
                      <span className="skills-skill-name">{skill.name}</span>
                      {/* <span className="skills-skill-level">{skill.level}%</span> */}
                    </div>
                    <div className="skills-bar-track">
                      <div
                        className="skills-bar-fill"
                        style={{ "--target-width": `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}