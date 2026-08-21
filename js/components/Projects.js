function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Projects</div>
          <TypewriterTitle prefix="Things I've " marked="built" />
        </Reveal>
        <div className="proj-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} base="reveal-lg" className="proj" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="proj-top">
                <div>
                  <div className="proj-index">{String(i + 1).padStart(2, "0")}</div>
                  <div className="proj-title"><BlockTextReveal text={p.title} startDelay={150 + i * 120} /></div>
                  <div className="proj-role">{p.role}</div>
                </div>
                <div className="tag tag-black">{p.type}</div>
              </div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-bottom">
                <div className="proj-stack">
                  {p.stack.map((s) => <span key={s} className="tag tag-green">{s}</span>)}
                </div>
                <a href={`#project-${i}`} className="proj-more" aria-label={`View details for ${p.title}`}>
                  View Project <span className="proj-more-arrow">{ICONS.arrow}</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
