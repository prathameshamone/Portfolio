function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Experience</div>
          <TypewriterTitle prefix="Where I've " marked="worked" />
        </Reveal>
        <div className="exp-list">
          {EXPERIENCE.map((e, i) => (
            <Reveal
              key={e.role + i}
              base="reveal-lg"
              className="exp-item"
              style={{ ...(i === 0 ? { borderTop: "3px solid var(--fg)" } : {}), transitionDelay: `${i * 100}ms` }}
            >
              <div className="exp-period"><span className="dot"></span>{e.period}</div>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-org">at <span>{e.org}</span></div>
                <p className="exp-desc">{e.desc}</p>
                <div className="exp-tags">
                  {e.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
