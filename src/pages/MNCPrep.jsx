import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import mncPrepData from "../../public/mncData.json";

const MNCPrep = () => {
  const { theme } = useContext(ThemeContext);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  // Single-source Google Drive pack (replace with your real link)
  const masterDriveLink =
    "https://drive.google.com/drive/folders/your-drive-folder-id";

  useEffect(() => {
    setTimeout(() => {
      setCompanies(mncPrepData);
      setLoading(false);
    }, 800);
  }, []);

  const bgClass =
    theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900";
  const cardBg =
    theme === "dark"
      ? "bg-gray-800 border border-gray-700"
      : "bg-white border border-gray-200";
  const aptHeading = theme === "dark" ? "text-blue-400" : "text-blue-600";
  const codingHeading = theme === "dark" ? "text-green-400" : "text-green-700";
  const subtleText = theme === "dark" ? "text-gray-300" : "text-gray-600";

  // Fallback content so students see questions even if JSON has only topics/links
  const defaultAptitudeSamples = [
    "Simplify: 1/2 + 1/3 + 1/6",
    "Time & Work: A finishes in 12 days, B in 18. Together?",
    "Profit/Loss: Marked price & discount to find SP",
    "Permutations: Arrange letters of 'BANANA'",
    "DI: Read a bar graph & answer % change",
    "Probability: Draw 2 reds from a deck (without replacement)",
    "Ratio: Split ₹1200 in ratio 2:3:5",
    "Speed/Distance: Train crossing a pole problem",
  ];
  const defaultCodingSamples = [
    "Reverse a linked list (iterative)",
    "Check if two strings are anagrams",
    "Find missing number in 1…n array",
    "Binary search on a sorted array",
    "Fibonacci (iterative vs DP)",
    "Implement QuickSort partition",
    "Detect cycle in linked list (Floyd’s)",
    "Balanced parentheses using stack",
  ];

  const defaultRounds = [
    {
      name: "Online Assessment",
      details:
        "Aptitude (quant, logical, verbal) + basic coding. Sometimes split into Foundation/Advanced sections.",
      tip: "Practice timed tests; aim for accuracy > speed initially.",
    },
    {
      name: "Technical Interview",
      details:
        "Data structures/algorithms, OOPs, DBMS, OS, basic networking; 1–2 coding questions on a whiteboard/editor.",
      tip: "Explain approach & complexity before coding; think aloud.",
    },
    {
      name: "HR Interview",
      details:
        "Behavioral fit, communication, relocation, salary, project discussion.",
      tip: "Use STAR format (Situation–Task–Action–Result).",
    },
  ];

  const SkeletonCard = () => (
    <div className={`${cardBg} p-6 rounded-xl shadow-lg animate-pulse`}>
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-4" />
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2" />
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6 mb-4" />
      <div className="grid grid-cols-2 gap-4">
        <div className="h-24 bg-gray-300 dark:bg-gray-600 rounded" />
        <div className="h-24 bg-gray-300 dark:bg-gray-600 rounded" />
      </div>
    </div>
  );

  const filtered = companies.filter((c) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.process.toLowerCase().includes(q) ||
      (c.aptitudeTopics || []).some((t) => t.toLowerCase().includes(q)) ||
      (c.codingTopics || []).some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className={`${bgClass} min-h-screen p-6`}>
      {/* Header + Global CTA */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-col items-center gap-4 text-center">
        <h1 className={`text-3xl sm:text-4xl font-extrabold ${aptHeading} animate-fade-in`}>
          MNC Placement Guide
        </h1>
        <p className={`max-w-2xl ${subtleText} animate-rise`}>
          One place for aptitude & coding rounds—company-specific process, sample
          questions, and trusted resources. No more tab-hopping.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <a
            href={masterDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition transform hover:-translate-y-[1px] animate-pop"
          >
            Get Master Prep Pack (Google Drive)
            <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <span className="px-3 py-1 text-xs bg-green-600 text-white rounded-full animate-pulse">
            Last updated: Aug 2025
          </span>
        </div>

        {/* Search */}
        <div className="w-full max-w-md mt-2">
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
          >
            <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 110-16 8 8 0 010 16z" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search company, topic, or round…"
              className={`w-full bg-transparent outline-none text-sm ${theme === "dark" ? "placeholder-gray-400" : "placeholder-gray-500"}`}
            />
          </div>
        </div>
      </div>

      {/* Company Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          : filtered.map((company, idx) => (
              <CompanyCard
                key={idx}
                theme={theme}
                cardBg={cardBg}
                subtleText={subtleText}
                aptHeading={aptHeading}
                codingHeading={codingHeading}
                company={company}
                defaultRounds={defaultRounds}
                defaultAptitudeSamples={defaultAptitudeSamples}
                defaultCodingSamples={defaultCodingSamples}
              />
            ))}
      </div>

      <p className="text-center text-xs opacity-60 mt-8">
        Sources: official company tests & trusted prep portals. Links open in new tabs.
      </p>

      {/* Lightweight CSS animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in .5s ease both; }
        @keyframes rise { 0% { opacity:0; transform: translateY(10px); } 100% { opacity:1; transform: translateY(0); } }
        .animate-rise { animation: rise .5s ease both; }
        @keyframes pop { 0% { transform: scale(.96); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-pop { animation: pop .35s ease both; }
        @keyframes growLine { 0% { height: 0; } 100% { height: 100%; } }
        .animate-grow { animation: growLine 1s ease-out both; }
      `}</style>
    </div>
  );
};

const CompanyCard = ({
  theme,
  cardBg,
  subtleText,
  aptHeading,
  codingHeading,
  company,
  defaultRounds,
  defaultAptitudeSamples,
  defaultCodingSamples,
}) => {
  const [openRounds, setOpenRounds] = useState(false);
  const [showAllApt, setShowAllApt] = useState(false);
  const [showAllCode, setShowAllCode] = useState(false);

  // If you later add per-company rounds/samples in JSON, these will auto‑use them
  const rounds = company.rounds && company.rounds.length ? company.rounds : defaultRounds;
  const aptitudeSamples = company.aptitudeSamples?.length
    ? company.aptitudeSamples
    : defaultAptitudeSamples;
  const codingSamples = company.codingSamples?.length
    ? company.codingSamples
    : defaultCodingSamples;

  const textSecondary = subtleText;

  const visibleApt = showAllApt ? aptitudeSamples : aptitudeSamples.slice(0, 5);
  const visibleCode = showAllCode ? codingSamples : codingSamples.slice(0, 5);

  return (
    <div className={`${cardBg} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-rise`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <span className="inline-block w-2 h-7 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full" />
          {company.name}
        </h2>
        <a
          href={company.companyDriveLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs px-2.5 py-1 rounded-md border ${theme === "dark" ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-100"} transition`}
          onClick={(e) => {
            if (!company.companyDriveLink) e.preventDefault();
          }}
          title={company.companyDriveLink ? "Open company-specific Drive pack" : "Drive pack not added yet"}
        >
          Company Drive Pack
        </a>
      </div>

      {/* Process summary */}
      <p className={`mt-2 text-sm leading-relaxed ${textSecondary}`}>{company.process}</p>

      {/* Rounds (timeline) */}
      <div className="mt-4">
        <button
          onClick={() => setOpenRounds((v) => !v)}
          className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-left border ${
            theme === "dark" ? "border-gray-700 hover:bg-gray-700/50" : "border-gray-200 hover:bg-gray-50"
          } transition`}
        >
          <span className="font-medium">View Step-by-Step Rounds</span>
          <svg
            className={`w-5 h-5 transition-transform ${openRounds ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {openRounds && (
          <div className="relative mt-4 pl-6 md:pl-8">
            <div
              className={`absolute left-2 md:left-3 top-0 w-[3px] rounded-full animate-grow ${
                theme === "dark" ? "bg-blue-500/40" : "bg-blue-500/30"
              }`}
              style={{ height: "100%" }}
            />
            <div className="space-y-4">
              {rounds.map((r, i) => (
                <div key={i} className="relative flex items-start gap-4 animate-rise" style={{ animationDelay: `${0.03 * (i + 1)}s` }}>
                  <div className="absolute -left-[4px] md:-left-[5px] mt-2">
                    <div className="h-4 w-4 rounded-full ring-4 ring-blue-500/20 bg-blue-600 animate-pop" />
                  </div>
                  <div
                    className={`w-full rounded-lg border p-3 md:p-4 ${
                      theme === "dark" ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          theme === "dark" ? "bg-blue-900/40 text-blue-300" : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        Step {i + 1}
                      </span>
                      <h4 className="font-semibold">{r.name}</h4>
                    </div>
                    <p className={`mt-1 text-sm ${textSecondary}`}>{r.details}</p>
                    {r.tip && <p className="mt-1 text-xs italic opacity-80">Tip: {r.tip}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Two-column: Aptitude & Coding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Aptitude */}
        <div>
          <h3 className={`text-lg font-semibold mb-1 ${aptHeading}`}>Aptitude Round</h3>
          {/* Topics */}
          <div className="flex flex-wrap gap-2 mb-3">
            {(company.aptitudeTopics || []).map((t, i) => (
              <span
                key={i}
                className={`text-xs px-2.5 py-1 rounded-full border ${
                  theme === "dark" ? "border-blue-800/50 bg-blue-900/30 text-blue-200" : "border-blue-200 bg-blue-50 text-blue-700"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Sample Questions */}
          <div
            className={`rounded-lg border p-3 mb-3 ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
          >
            <p className={`text-xs uppercase tracking-wide mb-2 ${textSecondary}`}>Quick Sample Questions</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {visibleApt.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
            {aptitudeSamples.length > 5 && (
              <button
                onClick={() => setShowAllApt((v) => !v)}
                className="mt-2 text-xs underline hover:opacity-80"
              >
                {showAllApt ? "Show fewer" : "Show more"}
              </button>
            )}
          </div>

          {/* Resources */}
          <div className="flex flex-wrap gap-2">
            <a
              href={company.aptitudeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Practice Aptitude
            </a>
            <a
              href="https://www.indiabix.com/aptitude/questions-and-answers/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-3 py-2 text-sm rounded-lg border ${
                theme === "dark" ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-100"
              } transition`}
            >
              IndiaBIX (Apt)
            </a>
          </div>
        </div>

        {/* Coding */}
        <div>
          <h3 className={`text-lg font-semibold mb-1 ${codingHeading}`}>Coding Round</h3>
          {/* Topics */}
          <div className="flex flex-wrap gap-2 mb-3">
            {(company.codingTopics || []).map((t, i) => (
              <span
                key={i}
                className={`text-xs px-2.5 py-1 rounded-full border ${
                  theme === "dark" ? "border-green-800/50 bg-green-900/30 text-green-200" : "border-green-200 bg-green-50 text-green-700"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Sample Questions */}
          <div
            className={`rounded-lg border p-3 mb-3 ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
          >
            <p className={`text-xs uppercase tracking-wide mb-2 ${textSecondary}`}>Quick Sample Questions</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {visibleCode.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
            {codingSamples.length > 5 && (
              <button
                onClick={() => setShowAllCode((v) => !v)}
                className="mt-2 text-xs underline hover:opacity-80"
              >
                {showAllCode ? "Show fewer" : "Show more"}
              </button>
            )}
          </div>

          {/* Resources */}
          <div className="flex flex-wrap gap-2">
            <a
              href={company.codingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Practice Coding
            </a>
            <a
              href="https://leetcode.com/explore/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-3 py-2 text-sm rounded-lg border ${
                theme === "dark" ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-100"
              } transition`}
            >
              LeetCode Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MNCPrep;
