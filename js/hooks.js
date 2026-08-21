const { useState, useEffect, useRef } = React;

/* Tracks whether an element has scrolled into view; used to trigger reveal/typewriter animations. */
function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setInView(true); io.unobserve(el); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

/* Reads the URL hash to decide whether to show the full site or a single project's
   detail page — a lightweight router since this build has no react-router dependency. */
function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    function onHashChange() { setHash(window.location.hash); }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}
