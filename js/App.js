function App() {
  const hash = useHashRoute();
  const projectMatch = hash.match(/^#project-(\d+)/);
  const projectIndex = projectMatch ? parseInt(projectMatch[1], 10) : null;
  const project = projectIndex !== null ? PROJECTS[projectIndex] : null;
  const isPrivacyPage = hash.startsWith("#privacy");

  /* When coming BACK from a project detail page, the target section only just mounted,
     so the browser's native anchor jump has nothing to scroll to yet — jump to it
     manually (instantly, not smooth, since we're really switching "pages"). Ordinary
     nav-link clicks on the main page are untouched and keep their native smooth scroll. */
  const wasOnDetailRef = useRef(false);
  useEffect(() => {
    const onDetailPage = !!project || isPrivacyPage;
    const cameFromDetail = wasOnDetailRef.current && !onDetailPage;
    wasOnDetailRef.current = onDetailPage;
    if (onDetailPage || !cameFromDetail) return;
    const id = hash.replace(/^#/, "") || "home";
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      const prevBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      if (el) el.scrollIntoView({ block: "start" });
      else window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = prevBehavior;
    }, 0);
    return () => clearTimeout(t);
  }, [hash, project, isPrivacyPage]);

  if (project) {
    return (
      <React.Fragment>
        <ProjectDetail project={project} index={projectIndex} />
        <ThemeToggle />
      </React.Fragment>
    );
  }

  if (isPrivacyPage) {
    return (
      <React.Fragment>
        <PrivacyPolicy />
        <ThemeToggle />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Nav />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <ThemeToggle />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
