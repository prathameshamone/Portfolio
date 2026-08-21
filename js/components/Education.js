function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Education</div>
          <TypewriterTitle prefix="School & " marked="college" />
        </Reveal>
        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.title} base="reveal-lg" className="edu-card" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="edu-card-top">
                <div className="edu-icon">{ICONS[e.icon]}</div>
                <div className="tag tag-green">{e.tag}</div>
              </div>
              <div className="edu-title">{e.title}</div>
              <div className="edu-subtitle">{e.subtitle}</div>
              <p className="edu-desc">{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
