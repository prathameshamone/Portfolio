function Home() {
  return (
    <section id="home">
      <div className="dots-bg"></div>
      <div className="container home-grid">
        <div>
          <div className="tag tag-green greeting-tag"><GreetingCycle /></div>
          <h1 className="home-name">
            <RevealWords text="Prathamesh" /><br />
            <RevealWords text="Amone" startDelay={90} />
            <span className="highlight">Full Stack Developer ME aahe </span>
          </h1>
          <p className="home-bio">I build secure, thoughtful software — through innovation. Currently a diploma student who ships real products, not just class assignments.</p>
          <div className="home-cta">
            <a href="#projects" className="btn btn-black">View Projects</a>
            <a href="#contact" className="btn btn-green">Contact Me</a>
          </div>
          <div className="social-row">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} className="social-icon" target={s.icon === "mail" ? undefined : "_blank"} rel="noreferrer">
                {ICONS[s.icon]}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="home-photo-wrap">
          <div className="home-photo">
            <img src={PROFILE_IMAGE} alt="Prathamesh Amone" />
          </div>
          <div className="home-photo-badge">Solapur, India</div>
        </div>
      </div>
    </section>
  );
}
