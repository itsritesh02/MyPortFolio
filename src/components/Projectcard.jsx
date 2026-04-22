import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, tags, liveUrl, githubUrl, year } = project;

  return (
    <div className="pc-card">
      <div className="pc-card-top">
        <div className="pc-icon-row">
          <div className="pc-folder-icon">
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
              <path d="M2 4C2 2.9 2.9 2 4 2H10L13 6H24C25.1 6 26 6.9 26 8V20C26 21.1 25.1 22 24 22H4C2.9 22 2 21.1 2 20V4Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="pc-action-links">
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="pc-icon-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href={liveUrl} target="_blank" rel="noreferrer" aria-label="Live Demo" className="pc-icon-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        <span className="pc-year">{year}</span>
        <h3 className="pc-title">{title}</h3>
        <p className="pc-desc">{description}</p>
      </div>

      <div className="pc-tags">
        {tags.map((tag, i) => (
          <span key={i} className="pc-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}