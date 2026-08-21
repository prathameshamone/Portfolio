function Reveal({ children, className = "", style, base = "reveal" }) {
  const [ref, inView] = useReveal();
  return <div ref={ref} className={`${base} ${inView ? "in" : ""} ${className}`} style={style}>{children}</div>;
}

/* A calm, originkit-inspired word-by-word reveal — used once, for the hero name only */
function RevealWords({ text, startDelay = 0 }) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="word-reveal" style={{ animationDelay: `${startDelay + i * 90}ms` }}>
      {word}{"\u00A0"}
    </span>
  ));
}

/* originkit-style block text reveal: a solid block sits over each word and clears off, word by word */
function BlockTextReveal({ text, startDelay = 0, gap = 90 }) {
  const [ref, inView] = useReveal();
  const words = text.split(" ");
  return (
    <span ref={ref}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="block-reveal-word">
            {word}
            <span
              className={`block-reveal-cover ${inView ? "wipe" : ""}`}
              style={{ animationDelay: `${startDelay + i * gap}ms` }}
            ></span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </span>
  );
}

/* originkit-style typewriter heading: types prefix, then the accent-marked word, with a blinking cursor */
function TypewriterTitle({ prefix, marked, as: Tag = "h2", className = "sec-title" }) {
  const [ref, inView] = useReveal();
  const full = prefix + marked;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || count >= full.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 34);
    return () => clearTimeout(t);
  }, [inView, count, full.length]);

  const shown = full.slice(0, count);
  const prefixShown = shown.slice(0, prefix.length);
  const markedShown = shown.slice(prefix.length);
  const done = count >= full.length;

  return (
    <Tag ref={ref} className={className}>
      {prefixShown}
      {markedShown && <mark>{markedShown}</mark>}
      <span className={`type-cursor ${inView ? (done ? "blink" : "") : ""}`} aria-hidden="true">_</span>
    </Tag>
  );
}

/* Counts up once when it scrolls into view, then stays put */
function StatNumber({ end, suffix = "", duration = 600 }) {
  const [ref, inView] = useReveal();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    let frame;
    function step(ts) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.round(progress * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView]);
  return <div ref={ref} className="stat-num">{val}{suffix}</div>;
}

/* A continuous typewriter greeting for the hero tag — types each greeting out,
   pauses, deletes it, then moves to the next, looping forever. */
const GREETINGS = ["Hello", "Namaste", "Hola", "Bonjour", "Konnichiwa", "Ciao"];
function GreetingCycle() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = GREETINGS[wordIndex];
    let delay = deleting ? 40 : 90;
    if (!deleting && charIndex === current.length) delay = 1100;
    else if (deleting && charIndex === 0) delay = 300;

    const t = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) setCharIndex((c) => c + 1);
        else setDeleting(true);
      } else {
        if (charIndex > 0) setCharIndex((c) => c - 1);
        else {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % GREETINGS.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="greeting-cycle">
      {GREETINGS[wordIndex].slice(0, charIndex)}
      <span className="greeting-cursor" aria-hidden="true"></span>
    </span>
  );
}

/* Small entrance fade for elements that are already in view the moment a page mounts
   (scroll-triggered Reveal wouldn't fire reliably here since there's nothing to scroll past). */
function FadeIn({ children, delay = 0, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`fade-in-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
