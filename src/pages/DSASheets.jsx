import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const getProviderFromTitle = (title = "") => {
  const t = title.toLowerCase();
  if (/apna/i.test(title)) return "Apna College";
  if (/love\s?babbar/i.test(title)) return "Love Babbar";
  if (/striver|takeuforward/i.test(title)) return "Striver";
  if (/siddharth/i.test(title)) return "Siddharth Singh";
  if (/leadcoding|fraz/i.test(title)) return "LeadCoding (Fraz)";
  if (/arsh|arsh goyal/i.test(title)) return "Arsh Goyal";
  if (/code skool|codeskool/i.test(title)) return "The Code Skool";
  if (/company[-\s]?wise/i.test(title)) return "Company-Wise Pack";
  // fallback: first two words as provider-like hint
  const firstWords = title.split(" ").slice(0, 2).join(" ");
  return firstWords || "Various";
};

const SkeletonCard = ({ theme }) => (
  <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl shadow-sm overflow-hidden`}>
    <div className="p-4 sm:p-6 animate-pulse">
      <div className="h-6 sm:h-8 bg-gray-200 rounded-lg w-3/4 mb-3 sm:mb-4"></div>
      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
        <div className="h-3 sm:h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-3 sm:h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="h-8 sm:h-10 bg-gray-200 rounded-lg w-32 sm:w-40"></div>
    </div>
  </div>
);

const DSASheets = () => {
  const { theme } = useContext(ThemeContext);
  const [dsaSheets, setDsaSheets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [providerFilter, setProviderFilter] = useState("All");

  useEffect(() => {
    fetch("/dsasheets.json")
      .then((res) => res.json())
      .then((data) => {
        const list = (data && data.dsaSheets) ? data.dsaSheets : [];
        // augment each sheet with inferred provider
        const enriched = list.map((s) => ({ ...s, provider: getProviderFromTitle(s.title) }));
        setDsaSheets(enriched);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading DSA sheets:", error);
        setDsaSheets([]);
        setLoading(false);
      });
  }, []);

  // derive provider list
  const providers = Array.from(
    new Set(dsaSheets.map((s) => s.provider).filter(Boolean))
  ).sort();

  // find a sensible "master pack" (Company-Wise Pack or last item)
  const masterPack = dsaSheets.find((s) => /company[-\s]?wise/i.test(s.title)) || dsaSheets[dsaSheets.length - 1];

  const filtered = dsaSheets.filter((s) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      s.title.toLowerCase().includes(q) ||
      (s.description && s.description.toLowerCase().includes(q)) ||
      (s.provider && s.provider.toLowerCase().includes(q));
    const matchesProvider = providerFilter === "All" || s.provider === providerFilter;
    return matchesQuery && matchesProvider;
  });

  return (
    <div className={theme === "dark" ? "bg-gray-900 text-gray-100 min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* HERO */}
        <header className="text-center mb-8 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-20 pointer-events-none"
            style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)" }}
          />
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Ultimate DSA Sheets — Top YouTubers in One Place
          </h1>
          <p className={theme === "dark" ? "text-gray-300 max-w-2xl mx-auto" : "text-gray-600 max-w-2xl mx-auto"}>
            Curated DSA sheets from Apna College, Love Babbar, Striver, Arsh Goyal, LeadCoding and more — practice, track progress, and follow a step-by-step plan without switching tabs.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={masterPack ? masterPack.link : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition"
            >
              Get Master Pack
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

            <a
              href="#how-to-use"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${theme === "dark" ? "border-gray-700 text-gray-200 hover:bg-gray-800/50" : "border-gray-200 text-gray-700 hover:bg-white"} transition`}
            >
              How to use (Step-by-step)
            </a>
          </div>

          {/* Search & Provider filter */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} w-full sm:w-80`}>
              <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 18a8 8 0 110-16 8 8 0 010 16z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sheets, topics or creator..."
                className={`w-full bg-transparent outline-none text-sm ${theme === "dark" ? "placeholder-gray-400" : "placeholder-gray-500"}`}
              />
            </div>

            <select
              value={providerFilter}
              onChange={(e) => setProviderFilter(e.target.value)}
              className={`px-3 py-2 rounded-lg border ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-gray-200 text-gray-700"}`}
            >
              <option value="All">All Creators</option>
              {providers.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </header>

        {/* HOW TO USE (STEP-BY-STEP) */}
        <section id="how-to-use" className={`mb-8 p-6 rounded-xl ${theme === "dark" ? "bg-gray-800/60 border border-gray-700" : "bg-white border border-gray-200"}`}>
          <h2 className="text-xl font-semibold mb-3">How to use these DSA sheets — Step by step</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Plan", desc: "Choose a sheet (by creator) and set a weekly target (e.g., 10 problems/week)." , tip: "Start with easy → medium → hard."},
              { title: "Learn", desc: "Watch topic videos from the sheet's creator and read brief notes before solving." , tip: "Use one creator per topic to avoid confusion."},
              { title: "Practice", desc: "Solve problems in the sheet, write clean code, and maintain a tracker." , tip: "Prefer writing on an editor, not just reading solutions."},
              { title: "Mock", desc: "Take time-bound mocks using the same topics to build speed and accuracy." , tip: "Simulate real assessment constraints."},
              { title: "Review", desc: "Revise wrong attempts, write short notes, and reattempt after 1 week." , tip: "Maintain a 'mistakes.md' for quick revision."},
              { title: "Polish", desc: "Focus on system design basics & behavioural Qs before interviews." , tip: "Prepare 5 project & 5 experience stories for HR."},
            ].map((s, i) => (
              <div key={s.title} className={`p-4 rounded-lg border ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200"} animate-rise`} style={{ animationDelay: `${0.03 * (i + 1)}s` }}>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold">{i+1}</div>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className={`text-sm mt-1 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{s.desc}</p>
                    <p className="text-xs mt-2 italic opacity-80">{s.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SHEETS GRID */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">All Sheets</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} theme={theme} />)
            ) : filtered.length ? (
              filtered.map((sheet) => (
                <article
                  key={sheet.id}
                  className={`group relative rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"} group-hover:text-blue-600 transition-colors`}>
                          {sheet.title}
                        </h3>
                        <p className={`text-sm mt-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{sheet.description}</p>
                        <div className="mt-3 flex items-center gap-2 flex-wrap">
                          <span className={`text-xs px-2 py-1 rounded-full ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"}`}>
                            {sheet.provider || getProviderFromTitle(sheet.title)}
                          </span>
                          {/* optional extract: number of questions if title contains digits */}
                          {(/\d{2,4}/.test(sheet.title)) && (
                            <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">
                              { (sheet.title.match(/\d{2,4}/) || [])[0] } questions
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex-shrink-0 flex flex-col items-end gap-2">
                        <a
                          href={sheet.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                        >
                          Access Sheet
                        </a>
                        <a
                          href={masterPack ? masterPack.link : sheet.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs underline opacity-80"
                        >
                          Open Master Pack
                        </a>
                      </div>
                    </div>

                    {/* small inline sample (first 3 items from description not available - so show helpful CTA) */}
                    <div className="mt-4 text-xs text-gray-400">
                      Tip: Follow the sheet top-to-bottom. Start by solving easy problems, then reattempt medium/hard after 1 week.
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full p-6 rounded-xl border text-center">
                <p className="font-medium">No sheets match your filter.</p>
                <p className="text-sm mt-2 text-gray-500">Try clearing search or selecting a different creator.</p>
              </div>
            )}
          </div>
        </section>

        {/* FOOTNOTE */}
        <footer className="text-center text-xs opacity-70">
          <p>All links open in new tabs. These sheets are curated from creators and public resources — use responsibly and practice consistently.</p>
        </footer>
      </div>

      {/* lightweight CSS animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in .45s ease both; }
        @keyframes rise { 0% { opacity:0; transform: translateY(10px); } 100% { opacity:1; transform: translateY(0); } }
        .animate-rise { animation: rise .45s ease both; }
        @keyframes pop { 0% { transform: scale(.96); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-pop { animation: pop .35s ease both; }
        @keyframes growLine { 0% { height: 0; } 100% { height: 100%; } }
        .animate-grow { animation: growLine 1s ease-out both; }
      `}</style>
    </div>
  );
};

export default DSASheets;
