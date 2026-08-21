/* Simple static page, reached via #privacy — update the copy below if what you
   collect changes (e.g. if you swap EmailJS or add analytics beyond GA). */
function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = "Privacy Policy — Prathamesh Amone";
    return () => { document.title = prevTitle; };
  }, []);

  return (
    <section id="privacy-detail" className="project-detail">
      <div className="container">
        <a href="#contact" className="back-link fade-in-up"><span className="back-link-arrow">{ICONS.arrow}</span> Back to Site</a>

        <div className="pd-top">
          <h1 className="pd-title fade-in-up">Privacy Policy</h1>
          <FadeIn className="pd-meta" delay={150}>
            <span className="pd-role">Last updated: August 2026</span>
          </FadeIn>
        </div>

        <Reveal base="reveal-lg">
          <div className="privacy-body">
            <p>This portfolio belongs to Prathamesh Amone. This page explains what information is collected when you visit, and how it's used.</p>

            <h3>Contact form</h3>
            <p>If you use the contact form, the name, email address, and message you enter are sent via EmailJS directly to my inbox so I can reply to you. That information isn't sold, shared with third parties, or used for anything beyond responding to your message.</p>

            <h3>Analytics</h3>
            <p>This site may use Google Analytics to understand visits at a high level — pages viewed, approximate location, and device type. This data is aggregated and isn't used to personally identify you. You can opt out using a browser extension like Google Analytics Opt-out, or by blocking cookies in your browser settings.</p>

            <h3>Cookies</h3>
            <p>This site doesn't set its own cookies. Analytics, if enabled, may use cookies to distinguish visitors — see the Analytics section above.</p>

            <h3>Third-party links</h3>
            <p>Links to GitHub, LinkedIn, Instagram, and individual project repositories take you to third-party sites with their own privacy policies, which this policy doesn't cover.</p>

            <h3>Contact</h3>
            <p>Questions about this policy can be sent to <a href="mailto:prathameshamone07@gmail.com">prathameshamone07@gmail.com</a>.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
