// About.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const detailedFeatures = [
  {
    icon: "📦",
    title: "Full Source Code",
    description:
      "Well-structured source code with comments, environment examples, and sample data — ready to run and customize.",
  },
  {
    icon: "📝",
    title: "Documentation & README",
    description:
      "Step-by-step README, setup commands, dependency list, and troubleshooting notes so you never get stuck.",
  },
  {
    icon: "🎓",
    title: "College Project Pack",
    description:
      "PPT, detailed report, ER/DFD/UML diagrams, demo script and customization notes for final year submissions.",
  },
  {
    icon: "📚",
    title: "MNC Prep Guides",
    description:
      "Company-wise aptitude and coding round breakdowns, sample questions and a single master pack to practice from.",
  },
  {
    icon: "🏢",
    title: "B2B Solutions",
    description:
      "End-to-end product engineering for enterprises: discovery, SOW, agile delivery, CI/CD, and SLA-backed support.",
  },
  {
    icon: "🔒",
    title: "Security & Best Practices",
    description:
      "Secure SDLC, code reviews, dependency scans and deployment hardening included in every delivery.",
  },
  {
    icon: "⚡",
    title: "Quick Delivery",
    description:
      "Instant email + Drive link delivery for ready projects and predictable timelines for custom work.",
  },
  {
    icon: "🤝",
    title: "Post-Delivery Support",
    description:
      "Minor customizations, setup help, and viva / demo prep — we help until you're comfortable with the project.",
  },
];

const pagesOverview = [
  {
    id: "projects",
    title: "Projects",
    subtitle: "All available ready-to-use projects",
    bullets: [
      "Browse by category (Mini/Major/Advanced).",
      "View details, preview demo (if available), and get the full package.",
    ],
    link: "/projects",
  },
  {
    id: "college",
    title: "College Projects",
    subtitle: "Submission-ready final-year project packages",
    bullets: [
      "PPT, detailed report, diagrams, source code and README.",
      "Customization notes & demo script for viva preparation.",
    ],
    link: "/college-projects",
  },
  {
    id: "mnc",
    title: "MNC Prep",
    subtitle: "Company-wise placement guides",
    bullets: [
      "Aptitude topics, coding topics, sample questions, and a master Drive pack.",
      "Searchable and filtered to avoid hopping between sites.",
    ],
    link: "/mnc-questions",
  },
  {
    id: "b2b",
    title: "B2B Services",
    subtitle: "Custom enterprise-grade solutions",
    bullets: [
      "Discovery, SOW, agile sprints, CI/CD, monitoring and SLAs.",
      "Engagement models: Fixed-price, T&M, Dedicated Team.",
    ],
    link: "/b2b-pages",
  },
  {
    id: "dsa",
    title: "DSA Sheets",
    subtitle: "Curated DSA sheets from top creators",
    bullets: [
      "Apna College, Love Babbar, Striver, Arsh Goyal and more in one place.",
      "Master pack link and step-by-step study plan included.",
    ],
    link: "/dsa-sheets",
  },
];

const deliverySteps = [
  {
    step: "01",
    title: "Discovery & Requirements",
    detail:
      "We discuss scope, college guidelines (if any), business KPIs or placement goals. Deliverables & timelines are agreed here.",
    eta: "1–3 days",
  },
  {
    step: "02",
    title: "Proposal & SOW",
    detail:
      "You get a clear SOW with milestones, tech stack, pricing and acceptance criteria. Sign-off moves the project forward.",
    eta: "1–2 days",
  },
  {
    step: "03",
    title: "Initial Payment & Kickoff",
    detail:
      "Pay the initial 30–50% (per plan) and we start. We set up repo, branching, and sprint cadence.",
    eta: "Immediate",
  },
  {
    step: "04",
    title: "Development & Demos",
    detail:
      "Sprint delivery with weekly demos, code reviews, and continuous QA. You can request small changes during sprints.",
    eta: "Depends on scope",
  },
  {
    step: "05",
    title: "QA, UAT & Finalization",
    detail:
      "Full testing, UAT sign-off, and final packaging: PPT, report, diagrams, source, and README for college projects or SRE runbooks for B2B.",
    eta: "1–2 weeks (typical)",
  },
  {
    step: "06",
    title: "Delivery & Handover",
    detail:
      "You receive zip + Drive link, demo recordings, and a KT session. Minor fixes and setup assistance provided post-delivery.",
    eta: "24–72 hrs",
  },
  {
    step: "07",
    title: "Support & Iteration",
    detail:
      "SLA-bound support for production issues or extra customization—choose an hourly plan or dedicated team model.",
    eta: "Ongoing",
  },
];

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const bgClass = isDark ? "bg-gray-950 text-gray-100" : "bg-gradient-to-b from-blue-50 via-white to-white text-gray-900";
  const cardBg = isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const subtle = isDark ? "text-gray-300" : "text-gray-600";
  const lead = isDark ? "text-white" : "text-gray-900";

  return (
    <div className={`min-h-screen ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* HERO */}
          <section className={`relative rounded-2xl p-6 md:p-10 mb-8 ${isDark ? "bg-gray-900/60 border border-gray-800" : "bg-white/90 border border-gray-200"}`}>
            <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)" }} />
            <div className="relative">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${isDark ? "bg-blue-900/30 text-blue-300" : "bg-blue-600 text-white"}`}>Zypject • 2025</span>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About Zypject</span>
              </h1>
              <p className={`mt-3 max-w-3xl ${subtle}`}>
                We provide ready-to-use projects, placement guides, DSA sheets and enterprise-grade development services — all designed to help students and businesses ship faster and with confidence.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition transform hover:-translate-y-0.5">
            Browse Projects
                </Link>
                <Link to="/b2b-pages" className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${isDark ? "border-gray-700 text-blue-300" : "border-gray-200 text-blue-700"} font-semibold hover:bg-blue-50 transition`}>
            B2B Services
                </Link>
              </div>
            </div>
          </section>

          {/* FEATURES */}
        <section className="mb-10">
          <h2 className={`text-2xl font-bold mb-4 ${lead}`}>What we provide — feature details</h2>
          <p className={`${subtle} mb-6`}>Each project or service comes with clear deliverables and support — below are the core features explained.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedFeatures.map((f, i) => (
              <article key={f.title} className={`rounded-xl p-5 border ${cardBg} shadow-sm hover:shadow-lg transform transition hover:-translate-y-1`} style={{ animation: `rise .45s ease both`, animationDelay: `${0.03 * i}s` }}>
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{f.icon}</div>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className={`text-sm mt-1 ${subtle}`}>{f.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PAGES OVERVIEW */}
        <section className="mb-10">
          <h2 className={`text-2xl font-bold mb-4 ${lead}`}>Site sections & what they do</h2>
          <p className={`${subtle} mb-6`}>Quick overview of the new pages we added and how they help you.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pagesOverview.map((p, i) => (
              <div key={p.id} className={`rounded-lg p-5 border ${cardBg} shadow-sm hover:shadow-lg transition transform hover:-translate-y-1`} style={{ animation: `rise .45s ease both`, animationDelay: `${0.03 * i}s` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className={`text-sm mt-1 ${subtle}`}>{p.subtitle}</p>
                    <ul className="list-disc pl-5 mt-3 text-sm text-gray-500">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="mb-1">{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-end gap-2">
                    <Link to={p.link} className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">
                      Open
                    </Link>
                    <a href={p.link} className="text-xs underline opacity-80 hidden" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STEP-BY-STEP DELIVERY (TIMELINE) */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${lead}`}>How we work — step-by-step</h2>

          <div className="relative pl-6 md:pl-10">
            <div className={`absolute left-3 top-0 w-[4px] rounded-full ${isDark ? "bg-blue-500/30" : "bg-blue-500/20"} animate-grow`} style={{ height: "100%" }} />
            <div className="space-y-5">
              {deliverySteps.map((s, i) => (
                <div key={s.step} className="relative flex items-start gap-4" style={{ animation: `rise .45s ease both`, animationDelay: `${0.04 * i}s` }}>
                  <div className="absolute -left-5 mt-2">
                    <div className="h-5 w-5 rounded-full ring-4 ring-blue-200/60 bg-blue-600 animate-pop" />
                  </div>
                  <div className={`w-full rounded-xl p-4 border ${cardBg} shadow-sm`}>
                    <div className="flex items-start gap-3">
                      <div>
                        <div className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">{s.step}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{s.title}</h3>
                          <span className="ml-auto text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">{s.eta}</span>
                        </div>
                        <p className={`text-sm mt-2 ${subtle}`}>{s.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT & CTA */}
        <section className={`rounded-xl p-6 ${isDark ? "bg-gray-900/60 border border-gray-800" : "bg-white/90 border border-gray-200"}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Need a custom project or company SOW?</h3>
              <p className={`text-sm mt-1 ${subtle}`}>Fill the form or book a discovery call — we'll prepare a tailored SOW with timelines and pricing.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/contact" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Contact Us</Link>
              <Link to="/projects" className={`px-4 py-2 rounded-lg border ${isDark ? "border-gray-700 text-white" : "border-gray-200 text-gray-700"}`}>Browse Projects</Link>
            </div>
          </div>
        </section>

      </div>

      {/* Lightweight CSS animations */}
      <style>{`
        @keyframes rise { 0% { opacity:0; transform: translateY(8px); } 100% { opacity:1; transform: translateY(0); } }
        @keyframes pop { 0% { transform: scale(.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes growLine { 0% { height: 0; } 100% { height: 100%; } }
        .animate-pop { animation: pop .35s ease both; }
        .animate-grow { animation: growLine 1s ease-out both; }
        .animate-rise { animation: rise .45s ease both; }
      `}</style>
    </div>
  );
};

export default About;
