/* Contact form that sends messages via EmailJS (see EMAILJS_CONFIG in data.js) */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: "error", msg: "Please fill in every field." });
      return;
    }
    if (typeof emailjs === "undefined") {
      setStatus({ state: "error", msg: "EmailJS failed to load. Check your connection and try again." });
      return;
    }
    if (EMAILJS_CONFIG.serviceId.startsWith("YOUR_")) {
      setStatus({ state: "error", msg: "EmailJS isn't configured yet — add your Service ID, Template ID, and Public Key in the code." });
      return;
    }
    setStatus({ state: "sending", msg: "" });
    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_CONFIG.publicKey
      )
      .then(() => {
        setStatus({ state: "success", msg: "Message sent — thanks for reaching out! I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({ state: "error", msg: "Something went wrong sending that. Try again, or email me directly." });
      });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} />
        </div>
        <div className="contact-field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" placeholder="What's on your mind?" value={form.message} onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="contact-submit" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status.msg && (
        <div className={`contact-status ${status.state === "success" ? "success" : "error"}`}>{status.msg}</div>
      )}
    </form>
  );
}

function ContactIllustration() {
  return (
    <div className="contact-illustration-frame">
      <img className="contact-illustration" src={CONTACT_IMAGE} alt="Illustration of a developer working at a laptop" />
    </div>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-box">
            <div>
              <div className="eyebrow" style={{ color: "var(--bg)" }}>Contact</div>
              <TypewriterTitle prefix="Let's " marked="talk" />
              <p className="contact-text">Open to opportunities in full-stack development, mobile apps, and backend engineering.</p>
              <div className="contact-links">
                <a href="mailto:prathameshamone07@gmail.com" className="contact-pill">✉ prathameshamone07@gmail.com</a>
                <a href="tel:8261876508" className="contact-pill">📞 +91 82618 76508</a>
              </div>
              <ContactForm />
            </div>
            <ContactIllustration />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
