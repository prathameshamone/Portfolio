function ProjectDetail({ project, index }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = `${project.title} — Prathamesh Amone`;
    return () => { document.title = prevTitle; };
  }, [project]);

  const hasImages = project.images && project.images.length > 0;

  return (
    <section id="project-detail" className="project-detail">
      <div className="container">
        <a href="#projects" className="back-link fade-in-up"><span className="back-link-arrow">{ICONS.arrow}</span> Back to Projects</a>

        <div className="pd-top">
          <FadeIn className="proj-index" delay={70}>{String(index + 1).padStart(2, "0")}</FadeIn>
          <h1 className="pd-title"><BlockTextReveal text={project.title} startDelay={120} /></h1>
          <FadeIn delay={200}>
            <a href={project.repo || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-black pd-github-btn">
              <span className="pd-github-icon">{ICONS.github}</span> View on GitHub
            </a>
          </FadeIn>
          <FadeIn className="pd-meta" delay={260}>
            <span className="tag tag-black">{project.type}</span>
            <span className="pd-role">{project.role}</span>
          </FadeIn>
        </div>

        {hasImages ? (
          <div className="pd-gallery">
            {project.images.map((src, i) => (
              <Reveal key={i} base="reveal-lg" className="pd-gallery-item" style={{ transitionDelay: `${i * 100}ms` }}>
                <img src={src} alt={`${project.title} screenshot ${i + 1}`} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal base="reveal-lg" className="pd-gallery-empty">
            No images yet — add paths to <code>PROJECTS[{index}].images</code> in <code>js/data.js</code> to show a gallery here.
          </Reveal>
        )}

        <Reveal base="reveal-lg">
          <p className="pd-desc">{project.longDesc || project.desc}</p>
        </Reveal>

        <Reveal base="reveal-lg" className="proj-stack">
          {project.stack.map((s) => <span key={s} className="tag tag-green">{s}</span>)}
        </Reveal>
      </div>
    </section>
  );
}
