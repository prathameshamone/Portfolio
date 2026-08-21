function Nav() {
  const ids = ["home", "about", "education", "skills", "experience", "projects", "achievements", "contact"];
  const [active, setActive] = useState(ids[0]);
  const suppressRef = useRef(false);
  const rafRef = useRef(null);
  const fallbackRef = useRef(null);
  const headerRef = useRef(null);

  /* Keep the header's real height in sync with the CSS scroll offset, so clicking a
     nav link always lands the section just below the header instead of half-hidden. */
  useEffect(() => {
    function syncHeaderHeight() {
      const h = headerRef.current ? headerRef.current.offsetHeight : 90;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    }
    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);
    return () => window.removeEventListener("resize", syncHeaderHeight);
  }, []);

  useEffect(() => {
    function computeActive() {
      const offset = (headerRef.current ? headerRef.current.offsetHeight : 90) + 24;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (nearBottom) current = ids[ids.length - 1];
      return current;
    }
    function onScroll() {
      if (suppressRef.current) return;
      setActive(computeActive());
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    setActive(computeActive());
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Instead of guessing how long the smooth scroll will take, watch the page until it
     actually stops moving before handing control back to the scroll-spy. This is what
     was making the active link (and landing position) drift on longer sections. */
  function handleClick(id) {
    setActive(id);
    suppressRef.current = true;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (fallbackRef.current) clearTimeout(fallbackRef.current);

    let lastY = window.scrollY;
    let stableFrames = 0;
    function watch() {
      const y = window.scrollY;
      stableFrames = Math.abs(y - lastY) < 1 ? stableFrames + 1 : 0;
      lastY = y;
      if (stableFrames > 6) {
        suppressRef.current = false;
        return;
      }
      rafRef.current = requestAnimationFrame(watch);
    }
    rafRef.current = requestAnimationFrame(watch);
    /* Safety net in case the scroll-settle check is ever skipped (e.g. tab loses focus) */
    fallbackRef.current = setTimeout(() => { suppressRef.current = false; }, 2000);
  }

  return (
    <header ref={headerRef}>
      <div className="container nav-inner">
        <div className="logo">Prathamesh Amone</div>
        <ul className="nav-links">
          {ids.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={() => handleClick(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
