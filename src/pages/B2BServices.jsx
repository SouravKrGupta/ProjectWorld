// B2BPages.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const B2BPages = () => {
  const { theme } = useContext(ThemeContext);

  const cn = (...c) => c.filter(Boolean).join(" ");

  const bgClass =
    theme === "dark"
      ? "bg-gray-950 text-gray-100"
      : "bg-gradient-to-b from-blue-50 via-white to-white text-gray-900";

  const sectionBg =
    theme === "dark" ? "bg-gray-900/70" : "bg-white/90";

  const cardBg =
    theme === "dark" ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200";

  const textPrimary = theme === "dark" ? "text-white" : "text-gray-900";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-600";

  const strengths = [
    { title: "Proven Track Record", desc: "95%+ client satisfaction with on-time, on-budget delivery.", icon: "🏆" },
    { title: "Scalable Architecture", desc: "Cloud-ready builds that scale without rewrites.", icon: "📈" },
    { title: "Full-Stack Expertise", desc: "Frontend, backend, DevOps, QA—handled in-house.", icon: "💻" },
    { title: "Transparent Delivery", desc: "Weekly demos, sprint reports, and direct Slack access.", icon: "📢" },
  ];

  const services = [
    "Custom Web Applications",
    "Mobile App Development",
    "E-commerce Platforms",
    "Cloud & DevOps",
    "UI/UX Design & Branding",
    "Data & AI Integrations",
  ];

  const deliverables = [
    { t: "Solution Blueprint", d: "Architecture doc, ER/UML, user flows, effort estimate." },
    { t: "Design System", d: "UX flows, wireframes, clickable prototype, UI kit." },
    { t: "Source Code", d: "Clean, modular code with commit history & PR reviews." },
    { t: "DevOps & CI/CD", d: "Pipelines, env configs, infra-as-code (where applicable)." },
    { t: "QA & Test Artifacts", d: "Test plan, cases, bug reports, load/security checks." },
    { t: "Documentation", d: "API docs, setup guide, handover & runbooks." },
    { t: "Training & Handover", d: "KT sessions, recordings, admin/user manuals." },
    { t: "Post-Launch Support", d: "SLA-bound L1/L2 support & maintenance options." },
  ];

  const timeline = [
    { badge: "Step 1", title: "Discovery & Strategy", desc: "Deep-dive on business goals, users, constraints, KPIs. We suggest scope trims & quick wins.", eta: "2–5 days" },
    { badge: "Step 2", title: "Proposal & SOW", desc: "Share a tailored SOW: milestones, tech stack, commercials, risks, and assumptions.", eta: "1–3 days" },
    { badge: "Step 3", title: "Kickoff & Planning", desc: "Define RACI, sprint cadence, Git/branching, environments, and acceptance criteria.", eta: "1–2 days" },
    { badge: "Step 4", title: "UX & Prototyping", desc: "Wireframes → clickable prototype → UI kit. Validate flows with your stakeholders.", eta: "1–3 weeks" },
    { badge: "Step 5", title: "Agile Development", desc: "Sprint-based delivery with weekly demos. CI/CD, code reviews, and continuous QA.", eta: "Depends on scope" },
    { badge: "Step 6", title: "QA, UAT & Hardening", desc: "Functional, regression, perf & security checks. UAT sign-off & release candidate.", eta: "1–3 weeks" },
    { badge: "Step 7", title: "Launch & Handover", desc: "Production rollout, monitoring, runbooks, and KT sessions for your team.", eta: "2–5 days" },
    { badge: "Step 8", title: "Support & Growth", desc: "SLA-based support, analytics reviews, and a roadmap for iteration.", eta: "Ongoing" },
  ];

  const engagement = [
    { t: "Fixed-Price", d: "Best for well-defined scope & timelines. Milestone-based payments." },
    { t: "Time & Material", d: "Flexible scope with transparent timesheets. Ideal for evolving products." },
    { t: "Dedicated Team", d: "Long-term squad embedded with your team. Predictable velocity." },
  ];

  const slas = [
    "Response: Critical < 1h, High < 4h, Normal < 1 business day",
    "Uptime targets & monitoring dashboards (Grafana/CloudWatch/Datadog)",
    "Weekly sprint reports & monthly executive summaries",
    "Risk registry and change-request log tracked in project board",
  ];

  const security = [
    "Secure SDLC: code reviews, dependency scans, secrets management",
    "Role-based access, audit logs, least-privilege environments",
    "Compliance-friendly workflows (GDPR-ready practices, SOC2-style controls where needed)",
    "Backups, DR strategy & incident playbooks",
  ];

  const tech = [
    "React / Next.js", "Vue / Nuxt", "Node.js / Express / Nest",
    "Python / Django / FastAPI", "Java / Spring", "Go",
    "Postgres / MySQL / MongoDB", "Redis / RabbitMQ / Kafka",
    "Docker / K8s", "AWS / GCP / Azure", "Terraform / GitHub Actions"
  ];

  return (
    <div className={cn("min-h-screen", bgClass)}>
      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-8 text-center relative overflow-hidden">
        <div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "linear-gradient(135deg,#34d399,#60a5fa)" }}
        />

        <div className="relative animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Zypject B2B Web Development Solutions
          </h1>
          <p className={cn("text-lg max-w-3xl mx-auto", textSecondary)}>
            We partner with businesses to deliver scalable, secure, high-performance products—transparent, sprint-by-sprint.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeshbdduIfxS0Pnpj7PuWJ_-q_WAOFmhCZXlzInW12zkgHEoQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover-shimmer"
            >
              Book a Discovery Call
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </a>
            <a
              href="#services"
              className={cn(
                "inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold transition border",
                theme === "dark" ? "border-blue-300/40 text-blue-300 hover:bg-blue-900/30" : "border-blue-600 text-blue-700 hover:bg-blue-50"
              )}
            >
              View Services
            </a>
          </div>
        </div>
      </header>

      {/* WHY CHOOSE US */}
      <section className={cn("py-10 px-6", sectionBg)}>
        <div className="max-w-6xl mx-auto">
          <h2 className={cn("text-2xl font-bold mb-8 text-center", textPrimary)}>Why Leading Companies Prefer Zypject</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-xl p-6 border shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] animate-rise hover-shimmer gradient-border",
                  cardBg
                )}
                style={{ 
                  animationDelay: `${0.03 * (i + 1)}s`,
                  '--index': i 
                }}
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-1.5">{s.title}</h3>
                <p className={textSecondary}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={cn("text-2xl font-bold mb-6 text-center", textPrimary)}>What You Get (Every Engagement)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((d, i) => (
              <div
                key={d.t}
                className={cn("rounded-xl p-5 border animate-rise", cardBg)}
                style={{ animationDelay: `${0.02 * (i + 1)}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 rounded-lg p-2 border bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-200/40 dark:border-blue-400/20">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z"/><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 12l9-5-9-5-9 5 9 5z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{d.t}</h3>
                    <p className={cn("text-sm mt-1", textSecondary)}>{d.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={cn("py-12 px-6", sectionBg)}>
        <div className="max-w-6xl mx-auto">
          <h2 className={cn("text-2xl font-bold mb-8 text-center", textPrimary)}>Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={cn("p-5 rounded-lg border shadow-md hover:shadow-xl transition-transform hover:scale-[1.02] text-center animate-rise", cardBg)}
                style={{ animationDelay: `${0.02 * (index + 1)}s` }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={cn("text-2xl font-bold mb-6 text-center", textPrimary)}>How We Deliver (Step by Step)</h2>

          <div className="relative max-w-5xl mx-auto pl-6 md:pl-8">
            {/* vertical line */}
            <div className={cn("absolute left-2 md:left-3 top-0 w-[3px] rounded-full animate-grow", theme === "dark" ? "bg-blue-500/40" : "bg-blue-500/30")} style={{ height: "100%" }} />
            <div className="space-y-5">
              {timeline.map((s, i) => (
                <div key={s.title} className="relative flex items-start gap-4 animate-rise" style={{ animationDelay: `${0.04 * (i + 1)}s`, '--index': i }}>
                  {/* node */}
                  <div className="absolute -left-[2px] md:-left-[3px] mt-2">
                    <div className="h-4 w-4 rounded-full ring-4 ring-blue-500/20 bg-gradient-to-r from-blue-600 to-purple-600 animate-pop transition-transform hover:scale-125" />
                  </div>

                  <div className={cn("w-full rounded-xl border p-4 md:p-5 transition hover:translate-x-0.5", cardBg)}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={cn(
                        "text-xs font-semibold inline-flex px-2 py-0.5 rounded-full",
                        theme === "dark"
                          ? "bg-blue-900/40 text-blue-300"
                          : "bg-blue-100 text-blue-900"
                      )}>{s.badge}</span>
                      <h3 className="text-base md:text-lg font-semibold">{s.title}</h3>
                      <span className={cn("ml-auto text-xs px-2 py-0.5 rounded-full", theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600")}>{s.eta}</span>
                    </div>
                    <p className={cn("text-sm md:text-[15px] leading-relaxed", textSecondary)}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLAs + Security */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className={cn("rounded-xl border p-5", cardBg)}>
              <h3 className="font-semibold mb-2">Communication & SLAs</h3>
              <ul className={cn("text-sm list-disc pl-5 space-y-1", textSecondary)}>
                {slas.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
            <div className={cn("rounded-xl border p-5", cardBg)}>
              <h3 className="font-semibold mb-2">Security & Compliance</h3>
              <ul className={cn("text-sm list-disc pl-5 space-y-1", textSecondary)}>
                {security.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS + TECH */}
      <section className={cn("py-12 px-6", sectionBg)}>
        <div className="max-w-6xl mx-auto">
          <h2 className={cn("text-2xl font-bold mb-8 text-center", textPrimary)}>Engagement Models & Tech</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {engagement.map((e, i) => (
              <div key={e.t} className={cn("rounded-xl border p-5 animate-rise", cardBg)} style={{ animationDelay: `${0.03 * (i + 1)}s` }}>
                <h3 className="font-semibold mb-1.5">{e.t}</h3>
                <p className={cn("text-sm", textSecondary)}>{e.d}</p>
              </div>
            ))}
          </div>

          <div className={cn("rounded-xl border p-5", cardBg)}>
            <h3 className="font-semibold mb-3">Preferred Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className={cn("text-xs px-2.5 py-1 rounded-full border", theme === "dark" ? "bg-gray-900/60 border-gray-700 text-gray-200" : "bg-white border-gray-200 text-gray-700")}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Transform Your Business?</h2>
          <p className="mb-6 text-blue-100">Let’s collaborate to build scalable products with measurable impact.</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeshbdduIfxS0Pnpj7PuWJ_-q_WAOFmhCZXlzInW12zkgHEoQ/viewform?usp=header" // replace with your actual form link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition"
          >
            Start Your B2B Project
          </a>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="sticky bottom-4 px-4">
        <div className={cn(
          "max-w-6xl mx-auto rounded-xl border p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 backdrop-blur",
          theme === "dark" ? "bg-gray-900/85 border-gray-800" : "bg-white/95 border-gray-200"
        )}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-blue-600 text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" /></svg>
            </div>
            <div>
              <p className="font-semibold">Have a roadmap in mind?</p>
              <p className={cn("text-xs", textSecondary)}>Share requirements—get a tailored SOW within 48–72 hours.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeshbdduIfxS0Pnpj7PuWJ_-q_WAOFmhCZXlzInW12zkgHEoQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get Proposal
            </a>
            <a
              href="#services"
              className={cn("inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-semibold border transition",
                theme === "dark" ? "border-gray-700 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100")}
            >
              See Services
            </a>
          </div>
        </div>
      </div>

      {/* Lightweight CSS animations */}
      <style>{`
        @keyframes fade-in { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade-in { 
          animation: fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: calc(var(--index, 0) * 0.1s);
        }

        @keyframes pop { 
          0% { transform: scale(0.95); opacity: 0; } 
          50% { transform: scale(1.02); }
          100% { transform: scale(1); opacity: 1; } 
        }
        .animate-pop { 
          animation: pop 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: calc(var(--index, 0) * 0.1s);
        }

        @keyframes rise { 
          0% { opacity:0; transform: translateY(15px); } 
          100% { opacity:1; transform: translateY(0); } 
        }
        .animate-rise { 
          animation: rise 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: calc(var(--index, 0) * 0.1s);
        }

        @keyframes growLine { 
          0% { height: 0; opacity: 0; } 
          100% { height: 100%; opacity: 1; } 
        }
        .animate-grow { 
          animation: growLine 1.4s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .hover-shimmer {
          position: relative;
          overflow: hidden;
        }
        .hover-shimmer:hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 1.5s ease;
        }

        /* Glass effect for cards */
        .glass-effect {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* Enhanced hover states */
        .group:hover .group-hover\:scale-105 {
          transform: scale(1.05);
          transition-duration: 300ms;
        }

        /* Improved transitions */
        .transition-all {
          transition-duration: 300ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Gradient borders */
        .gradient-border {
          position: relative;
          background-clip: padding-box;
          border: 2px solid transparent;
        }
        .gradient-border:before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
          margin: -2px;
          border-radius: inherit;
          background: linear-gradient(
            to right,
            rgba(96, 165, 250, 0.5),
            rgba(167, 139, 250, 0.5)
          );
        }
      `}</style>
    </div>
  );
};

export default B2BPages;
