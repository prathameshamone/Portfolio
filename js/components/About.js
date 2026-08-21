/* Paragraph whose highlighted phrases fade in once it scrolls into view */
function AboutParagraph() {
  const [ref, inView] = useReveal();
  return (
    <p ref={ref} className={`about-text ${inView ? "in-view" : ""}`}>
      My interest in building things started with <strong>C and C++</strong> in my early diploma years, and grew into shipping full products — a mobile app's authentication system used during a real internship, a business website with live dashboards, and a handful of personal experiments along the way. I care about the parts of development most people skip: secure auth flows, clean APIs, and interfaces that stay out of the user's way. I finished school at <strong>Model Public School, Jule, Solapur</strong>, and I'm currently a <strong>3rd-year Computer Science Diploma student</strong> at Government Polytechnic Solapur, and an Ex-Intern at Central Railway, Solapur — still building, still learning.
    </p>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div>
          <Reveal>
            <div className="eyebrow">About Me</div>
            <TypewriterTitle prefix="A bit " marked="about me" />
            <AboutParagraph />
          </Reveal>
        </div>
        <Reveal>
          <div className="about-photo">
            <img src={PROFILE_IMAGE} alt="Prathamesh Amone" />
          </div>
          <div className="stat-strip">
            <div className="stat-box"><StatNumber end={5} suffix="+" /><div className="stat-label">Projects</div></div>
            <div className="stat-box"><StatNumber end={1} suffix="" /><div className="stat-label">Internship</div></div>
            <div className="stat-box"><StatNumber end={3} suffix="rd" /><div className="stat-label">Year</div></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
