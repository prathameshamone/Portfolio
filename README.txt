Prathamesh Amone Portfolio — Distributed Structure

Files:
- index.html            Main HTML shell (loads every js/ file below in order)
- 404.html               Custom "page not found" page
- robots.txt             Search-engine crawl rules
- sitemap.xml             Search-engine URL listing
- css/styles.css         All portfolio styles and animations
- js/data.js             All editable content — social links, EmailJS config,
                          education, skills, experience, achievements, projects
- js/icons.js             Inline SVG icon set
- js/hooks.js             Shared hooks: useReveal (scroll-in-view), useHashRoute (routing)
- js/animations.js        Shared animation components: Reveal, RevealWords,
                          BlockTextReveal, TypewriterTitle, StatNumber, GreetingCycle, FadeIn
- js/components/          One file per page section (ThemeToggle, Nav, Home, About,
                          Education, Skills, Experience, Projects, ProjectDetail,
                          Achievements, Contact, Footer, PrivacyPolicy)
- js/App.js               Root component (hash-based routing) + the ReactDOM render call
- assets/profile.jpg     Profile image extracted from the original HTML
- assets/contact.png     Contact illustration extracted from the original HTML
- assets/og-image.png    Social share preview image (Open Graph / Twitter card)

Run:
1. Keep the folder structure unchanged — index.html loads the js/ files in a specific
   order (data → icons → hooks → animations → components → App.js) since there's no
   bundler; each file relies on the ones before it already being loaded.
2. Open index.html in a modern browser.
3. For best results, serve the folder with a local web server.

The portfolio still uses React 18 + Babel Standalone + EmailJS from CDNs.
EmailJS credentials remain as placeholders exactly as in the original file.

To edit content: everything you're likely to change day-to-day (projects, skills,
education, experience, achievements, social links, EmailJS keys) lives in js/data.js.
You shouldn't need to touch the component files unless you're changing layout/behavior.

What changed in this update:
- About page: the old Education/Experience/Focus tabs are gone. Experience still has
  its own section (unchanged). Education is now its own section too (id="education"),
  right after About, listing School and College — edit the EDUCATION array in
  js/data.js to update either entry.
- Nav / scroll: clicking a nav link now lands each section correctly below the sticky
  header (offset is computed from the header's real height instead of a hardcoded
  guess), and the active-link highlight no longer drifts on longer scrolls.
- Projects: every project card now has a "View Project" button that opens a full
  detail page for that project, including a "View on GitHub" button (set each
  project's `repo` field in js/data.js). Edit each project's `longDesc`
  (heading/description) and `images` (paths to screenshots, e.g.
  assets/projects/my-project-1.png) in the PROJECTS array in js/data.js — drop the
  image files into an assets/projects folder you create. Leave `images: []` for a
  project with no gallery yet.
- Contact page: the illustration is now framed in a proper bordered box sized to fit,
  instead of floating unstyled — no code changes needed to use it.
- SEO/meta: added meta description, Open Graph/Twitter card tags, robots.txt,
  sitemap.xml, a custom 404.html, and a Privacy Policy page (#privacy, linked from
  the footer). A commented-out Google Analytics snippet is in index.html's <head> —
  uncomment and add your Measurement ID once the site is live.
- Codebase: the old single js/script.js was split into the files listed above, one
  concern/section per file, to make it easier to find and edit things.

