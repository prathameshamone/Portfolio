function Skills() {
  const [active, setActive] = useState(SKILLS[0].category);
  const activeGroup = SKILLS.find((s) => s.category === active);
  const [gridRef, gridInView] = useReveal();

  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Skills</div>
          <TypewriterTitle prefix="Skills & " marked="stack" />
          <div className="skill-tabs">
            {SKILLS.map((group) => (
              <button
                key={group.category}
                className={`skill-tab ${active === group.category ? "active" : ""}`}
                onClick={() => setActive(group.category)}
              >
                {group.category}
              </button>
            ))}
          </div>
        </Reveal>
        <div ref={gridRef} className={`skill-grid ${gridInView ? "in-view" : ""}`} key={active}>
          {activeGroup.items.map((item, i) => (
            <div key={item.name} className="skill-card" style={{ animationDelay: `${i * 70}ms` }}>
              <div className="skill-card-name">{item.name}</div>
              <div className="skill-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
