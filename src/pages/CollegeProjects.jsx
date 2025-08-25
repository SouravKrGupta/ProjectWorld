import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const CollegeProjects = () => {
  const { theme } = useContext(ThemeContext);
  const cn = (...c) => c.filter(Boolean).join(" ");
  const isDark = theme === "dark";

  const included = [
    { title: "PowerPoint (PPT)", desc: "Clean, faculty-friendly slides with problem, approach, modules & results." },
    { title: "Detailed Report (DOC/PDF)", desc: "Abstract, SRS, architecture, modules, testing & conclusion." },
    { title: "Diagrams Pack", desc: "ER, DFD (Lvl 0/1/2), UML (Use-Case, Class, Sequence) as images & draw.io." },
    { title: "Source Code", desc: "Complete, well-structured code with env/sample data where needed." },
    { title: "Setup & README", desc: "One-click steps to install, run & demo; common fixes included." },
    { title: "Customization Notes", desc: "What to rename/tweak for your college format & viva questions." },
    { title: "Demo Script", desc: "2–3 minute walkthrough script + module explanations." },
    { title: "Support", desc: "Chat/email support for running & minor tweaks." },
  ];

  const steps = [
    {
      title: "Choose a Project",
      desc: "Browse projects and pick one that fits your domain & tech. Check features and demo (if available).",
      badge: "Step 1",
    },
    {
      title: "Confirm & Share Details",
      desc: "Fill the request form with your name, course/semester & any college formatting rules.",
      badge: "Step 2",
    },
    {
      title: "We Prepare Your Package",
      desc: "We bundle PPT, report, diagrams & code with instructions—organized in a versioned folder.",
      badge: "Step 3",
    },
    {
      title: "Delivery",
      desc: "You receive a zip via email + backup Drive link. Unzip and follow README to run locally.",
      badge: "Step 4",
    },
    {
      title: "Post-Delivery Help",
      desc: "Need edits for college guidelines? Minor changes & viva prep pointers are included.",
      badge: "Step 5",
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen py-10",
        theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"
      )}
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* HERO / INTRO */}
        <section
          className={cn(
            "relative overflow-hidden rounded-2xl border p-6 md:p-10 mb-8 animate-fade-in glass-effect hover-shimmer",
            theme === "dark"
              ? "bg-gray-900/70 border-gray-800 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]"
              : "bg-white/90 border-gray-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
          )}
        >
          <div className="absolute -top-20 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 pointer-events-none"
               style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)" }} />
          <div className="absolute -bottom-16 -left-24 h-56 w-56 rounded-full blur-3xl opacity-20 pointer-events-none"
               style={{ background: "linear-gradient(135deg,#34d399,#60a5fa)" }} />

          <div className="relative">
            <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full ${isDark ? "bg-blue-900/30 text-blue-300" : "bg-blue-600 text-white"} animate-pop`}>
              Final Year Ready • Documentation + Code
            </span>

            <h1 className="mt-4 text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Final Year College Projects — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Complete & Submission-ready</span>
            </h1>

            <p className={cn(
              "mt-3 md:mt-4 text-sm md:text-base max-w-3xl",
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            )}>
              We deliver everything you need to submit and demo confidently: PPT, report, diagrams, source code, setup guide, and viva prep notes—organized and easy to customize for your institute’s format.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                  bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover-shimmer"
              >
                Browse Projects
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf5EGUr-B_J0AlhU8cggOuhM6KX7R6CeWvD09q93FpNlvZStw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold transition-all duration-300 border transform hover:-translate-y-1 hover:shadow-lg hover-shimmer",
                  theme === "dark"
                    ? "border-blue-400 text-blue-300 hover:bg-blue-900/30 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    : "border-blue-600 text-blue-700 hover:bg-blue-50 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                )}
              >
                Request Customization
              </a>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">What you’ll receive</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {included.map((it, idx) => (
              <div
                key={it.title}
                className={cn(
                  "rounded-xl p-4 md:p-5 border group relative overflow-hidden animate-rise hover-shimmer transition-all hover:shadow-lg",
                  theme === "dark" ? "bg-gray-900/70 border-gray-800" : "bg-white border-gray-200"
                )}
                style={{ 
                  animationDelay: `${0.03 * (idx + 1)}s`,
                  '--index': idx 
                }}
              >
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-10 group-hover:opacity-20 transition"
                     style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 60%)" }} />
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 rounded-lg p-2 border
                    bg-gradient-to-br from-blue-500/10 to-purple-500/10
                    border-blue-200/40 dark:border-blue-400/20">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" />
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 12l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{it.title}</h3>
                    <p className={cn("text-sm mt-1", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
                      {it.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DELIVERY PROCESS (TIMELINE) */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">How delivery works (step-by-step)</h2>

          <div className="relative pl-6 md:pl-8">
            {/* timeline line */}
            <div className={cn(
              "absolute left-2 md:left-3 top-0 w-[3px] rounded-full animate-grow",
              theme === "dark" ? "bg-blue-500/40" : "bg-blue-500/30"
            )} style={{ height: "100%" }} />

            <div className="space-y-5">
              {steps.map((s, i) => (
                <div key={s.title} className="relative flex items-start gap-4 animate-rise" style={{ animationDelay: `${0.05 * (i + 1)}s` }}>
                  {/* node */}
                  <div className="absolute -left-[2px] md:-left-[3px] mt-2">
                    <div className="h-4 w-4 rounded-full ring-4 ring-blue-500/20 bg-blue-600 animate-pop" />
                  </div>

                  <div
                    className={cn(
                      "w-full rounded-xl border p-4 md:p-5 transition-all hover:translate-x-1 hover:shadow-lg hover-shimmer",
                      theme === "dark" ? "bg-gray-900/70 border-gray-800" : "bg-white border-gray-200"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={cn(
                        "text-xs font-semibold inline-flex px-2 py-0.5 rounded-full",
                        isDark ? "bg-blue-900/30 text-blue-300" : "bg-blue-600 text-white"
                      )}>
                        {s.badge}
                      </span>
                      <h3 className="text-base md:text-lg font-semibold">{s.title}</h3>
                    </div>
                    <p className={cn("text-sm md:text-[15px] leading-relaxed",
                      theme === "dark" ? "text-gray-300" : "text-gray-600")}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* delivery formats */}
          <div
            className={cn(
              "mt-6 rounded-xl border p-4 md:p-6",
              theme === "dark" ? "bg-gray-900/70 border-gray-800" : "bg-white border-gray-200"
            )}
          >
            <h3 className="font-semibold mb-2">Delivery format</h3>
            <ul className={cn("text-sm list-disc pl-5 space-y-1",
              theme === "dark" ? "text-gray-300" : "text-gray-600")}
            >
              <li>Zip file via email + backup Google Drive link.</li>
              <li>Folders: <code>01_PPT</code>, <code>02_Report</code>, <code>03_Diagrams</code>, <code>04_Source_Code</code>, <code>05_Readme</code>.</li>
              <li><strong>README</strong> explains prerequisites, setup & run commands for quick demo.</li>
            </ul>
          </div>
        </section>

        {/* FAQ / NOTES */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Notes & FAQs</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                q: "Can you align to my college template?",
                a: "Yes—share the format (cover page, fonts, margins, sequence). We’ll adjust the report & PPT accordingly."
              },
              {
                q: "Will you help me run it on my laptop?",
                a: "Absolutely—README covers it, and we provide support if you face issues during setup."
              },
              {
                q: "Can I request minor feature changes?",
                a: "Small renames, screenshots, and text edits are covered. Bigger features can be scoped separately."
              },
              {
                q: "Do I get viva questions?",
                a: "Yes—module-wise talking points and common Q&A are included in the package."
              }
            ].map((f, i) => (
              <details
                key={f.q}
                className={cn(
                  "group rounded-xl border p-4 open:shadow-sm transition",
                  theme === "dark" ? "bg-gray-900/70 border-gray-800" : "bg-white border-gray-200"
                )}
              >
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-semibold">{f.q}</span>
                  <svg className="w-5 h-5 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className={cn("mt-2 text-sm", theme === "dark" ? "text-gray-300" : "text-gray-600")}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA BAR */}
        <section
          className={cn(
            "sticky bottom-4 rounded-xl border p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-3",
            theme === "dark" ? "bg-gray-900/80 border-gray-800 backdrop-blur" : "bg-white/90 border-gray-200 backdrop-blur"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-blue-600 text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Ready to pick a project?</p>
              <p className={cn("text-xs", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
                Explore all categories and choose what fits your syllabus best.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-semibold
                bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View All Projects
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5EGUr-B_J0AlhU8cggOuhM6KX7R6CeWvD09q93FpNlvZStw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-semibold border transition",
                theme === "dark" ? "border-gray-700 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"
              )}
            >
              Custom Request
            </a>
          </div>
        </section>
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

        /* Improved transitions */
        .transition-all {
          transition-duration: 300ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced hover states */
        .group:hover .group-hover\:scale-105 {
          transform: scale(1.05);
          transition-duration: 300ms;
        }
      `}</style>
    </div>
  );
};

export default CollegeProjects;
