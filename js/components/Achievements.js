function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Achievements</div>
          <TypewriterTitle prefix="Wins worth " marked="sharing" />
        </Reveal>
        <div className="ach-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} className="ach-card" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="ach-icon">{a.icon}</div>
              <div className="ach-title" style={{ "--ach-delay": `${250 + i * 90}ms` }}>{a.title}</div>
              <div className="ach-meta">{a.meta}</div>
              <p className="ach-desc">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
