/* ============ EDIT YOUR DATA HERE ============ */

const PROFILE_IMAGE = "assets/profile.png";
const CONTACT_IMAGE = "assets/contact.png";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/prathameshamone", icon: "github" },       
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prathamesh-amone-835606413/", icon: "linkedin" },    
  { label: "Instagram", href: "https://www.instagram.com/prathameshh.inc/", icon: "instagram" },  
  { label: "Email", href: "mailto:prathameshamone07@gmail.com", icon: "mail" },
];

/* ---------- EmailJS ----------
   1. Create a free account at https://www.emailjs.com
   2. Add an Email Service (e.g. Gmail) -> copy its Service ID below
   3. Create an Email Template with {{from_name}}, {{from_email}}, {{message}} variables -> copy its Template ID below
   4. Account > General > copy your Public Key below
*/
const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

/* Add a new education entry by copying this block into the EDUCATION array (most recent first):
  {
    tag: "College" or "School",   // shown as the pill label on the card
    icon: "cap" or "school",      // which icon to show — see ICONS in icons.js
    title: "Institute Name",
    subtitle: "Course · Status",
    desc: "One or two sentences about it.",
  },
*/
const EDUCATION = [
  {
    tag: "College",
    icon: "cap",
    title: "Government Polytechnic Solapur",
    subtitle: "Diploma in Computer Science · 3rd Year",
    desc: "Studying under MSBTE standards, building a strong foundation in programming, data structures, and systems, while working on real-world projects alongside coursework.",
  },
  {
    tag: "School",
    icon: "school",
    title: "Model Public School, Jule, Solapur",
    subtitle: "Secondary School · Passed 10th",
    desc: "Completed secondary schooling and passed the 10th standard at Model Public School, Jule, Solapur — where the fundamentals that everything since has been built on came together.",
  },
];


/* Add a new skill by copying this block into the right category's items array:
  { name: "Skill Name", desc: "One short line on how you use it." },
*/
const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Java", desc: "Object-oriented programming for backend logic and core CS fundamentals." },
      { name: "Python", desc: "Scripting, automation, and rapid backend prototyping." },
      { name: "JavaScript", desc: "Interactive UIs and full-stack web logic." },
      { name: "C", desc: "Low-level programming and foundational problem solving." },
      { name: "C++", desc: "Performance-focused programming and data structures." },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "React Native", desc: "Cross-platform mobile apps built and shipped with Expo." },
      { name: "FastAPI", desc: "Fast, typed REST APIs powering production backends." },
      { name: "Supabase", desc: "Postgres-backed auth, storage, and realtime data." },
      { name: "Firebase", desc: "Push notifications, hosting, and NoSQL data storage." },
      { name: "Git & GitHub", desc: "Version control and collaborative development workflows." },
    ],
  },
  {
    category: "Focus Areas",
    items: [
      { name: "Authentication", desc: "Secure login flows, JWT sessions, and OTP verification." },
      { name: "REST APIs", desc: "Designing clean, predictable, well-structured endpoints." },
      { name: "Mobile Dev", desc: "Building and shipping native-feeling mobile apps." },
      { name: "Backend Architecture", desc: "Structuring scalable, maintainable server-side code." },
      { name: "UI/UX Design", desc: "Crafting interfaces that feel intuitive and polished." },
    ],
  },
];

/* Add a new experience item by copying this block into the EXPERIENCE array:
  {
    period: "Month Year — Month Year",
    role: "Role / Title",
    org: "Company / Organization",
    desc: "What you did, in a sentence or two.",
    tags: ["Tag1", "Tag2"],
  },
*/
const EXPERIENCE = [
  {
    period: "2025 — Present",
    role: "Authentication Specialist",
    org: "Central Railway DRM office, Solapur",
    desc: "I worked as an Authentication Specialist and built secure endpoints and OTP logins for the Kaarya-Siddhi app",
    tags: ["Python", "React Native"],
  },
];

/* Add a new achievement by copying this block into the ACHIEVEMENTS array:
  {
    title: "Achievement Title",
    meta: "Issuer / Date",
    desc: "One line about the achievement.",
    icon: "★",
  },
*/
const ACHIEVEMENTS = [
  { title: "Debate Runner Up", meta: "2024", desc: "I was a debate runner up at Technotsava 2024", icon: "" },
  { title: "Many more to go", meta: "", desc: "", icon: "" },
];

/* Add a new project by copying this block into the PROJECTS array.
   - desc:      short description shown on the project card.
   - longDesc:  fuller description shown on that project's own detail page (falls back to desc if left out).
   - images:    paths to images for the detail page gallery — drop files into the assets folder
                (e.g. assets/projects/my-project-1.png) and list their paths here. Leave as [] for none.
   - repo:      link to the GitHub repo for this project — shown as a button on its detail page.
                Leave as "#" (or delete the line) to hide the button for that project.
*/
const PROJECTS = [
  {
    title: "Kaarya Siddhi",
    type: "Internship Project",
    role: "Authentication Specialist",
    desc: "Mobile task management app built during my Central Railway internship. Owned the full authentication system end-to-end, OTP verification via Brevo, JWT sessions, secure token storage, and hardened the backend against BOLA and role-injection vulnerabilities.",
    longDesc: "Mobile task management app built during my Central Railway internship. Owned the full authentication system end-to-end: OTP verification via Brevo, JWT-based sessions, secure token storage, and hardening the backend against BOLA and role-injection vulnerabilities. Edit this paragraph with more detail — the problem it solved, your process, and any challenges you tackled.",
    stack: ["FastAPI", "Supabase", "PyJWT", "React Native"],
    images: [],
    repo: "https://github.com/shlokpunjal/Kaarya-Siddhi", 
  },
  {
    title: "Universal Agencies",
    type: "Freelance Build",
    role: "Founder & Developer",
    desc: "Full website for my own brand marketing business, with Firebase Firestore integration and separate admin and client dashboards, hosted on GitHub Pages.",
    longDesc: "Full website for my own brand marketing business, with Firebase Firestore integration and separate admin and client dashboards, hosted on GitHub Pages. Edit this paragraph with more detail about the build.",
    stack: ["Firebase", "Firestore", "GitHub Pages"],
    images: [],
    repo: "https://github.com/universalagencies0103/universalagencies0103.github.io",
  },

  // {
  //   title: "Shop Stock Management App",
  //   type: "Client Project",
  //   role: "Developer",
  //   desc: "Stock and service management app for a friend's electrical goods and repair shop, structured around the auth and backend patterns from Kaarya Siddhi.",
  //   longDesc: "Stock and service management app for a friend's electrical goods and repair shop, structured around the auth and backend patterns from Kaarya Siddhi. Edit this paragraph with more detail about the build.",
  //   stack: ["FastAPI", "Supabase", "React Native"],
  //   images: [],
  //   repo: "#",
  // },

  {
    title: "Weather App",
    type: "Personal Project",
    role: "Developer",
    desc: "Native weather application built while learning React Native fundamentals, navigation, component structure, and live API data handling.",
    longDesc: "Native weather application built while learning React Native fundamentals, navigation, component structure, and live API data handling. Edit this paragraph with more detail about the build.",
    stack: ["React Native", "Expo"],
    images: [],
    repo: "https://github.com/prathameshamone/WeatherWell",
  },
  {
    title: "Truth & Dare Game",
    type: "Personal Project",
    role: "Developer",
    desc: "Command-line Truth and Dare game written in C, an early project exploring control flow, randomization, and core programming logic.",
    longDesc: "Command-line Truth and Dare game written in C, an early project exploring control flow, randomization, and core programming logic. Edit this paragraph with more detail about the build.",
    stack: ["C"],
    images: [],
    repo: "#",
  },
];

/* ============ END OF EDITABLE DATA ============ */
