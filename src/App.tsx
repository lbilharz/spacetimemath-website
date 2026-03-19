import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, Monitor, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <svg width="34" height="34" viewBox="0 0 190 190" className={className}>
    <rect x="5" y="5" width="56" height="56" rx="10" fill="#5DD23C" />
    <rect x="67" y="5" width="56" height="56" rx="10" fill="#5DD23C" />
    <rect x="129" y="5" width="56" height="56" rx="10" fill="#facc15" />
    <rect x="5" y="67" width="56" height="56" rx="10" fill="#5DD23C" />
    <rect x="67" y="67" width="56" height="56" rx="10" fill="#facc15" />
    <rect x="129" y="67" width="56" height="56" rx="10" fill="#4FA7FF" />
    <rect x="5" y="129" width="56" height="56" rx="10" fill="#4FA7FF" />
    <rect x="67" y="129" width="56" height="56" rx="10" fill="#E8391D" />
    <rect x="129" y="129" width="56" height="56" rx="10" fill="#E9E9E9" />
  </svg>
);

const DotGrid = ({ className = "" }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 100 100" className={className}>
    {[0, 1, 2].map(x => [0, 1, 2, 3].map(y => (
      <circle key={`${x}-${y}`} cx={20 + x * 30} cy={12.5 + y * 25} r="8" fill="#facc15" />
    )))}
  </svg>
);

const AppleSVG = () => (
  <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 24 184.8 8.8 245.8c-26 102.6 30.9 256.4 81.3 256.4 23.4 0 32.5-14.7 61.2-14.7 28.5 0 36.3 14.7 62 14.7 51 0 114.2-143.6 114.2-143.6-47.1-26.3-46.7-84.9-9-90zm-101.4-177.3c15.4-20.1 23.2-46.6 20.2-71.4-23.2 1.3-51.4 17.5-67.6 36.6-13.8 16-23.3 43-20.3 68.6 26.6 2 52.8-13.6 67.7-33.8z" />
  </svg>
);

const PlaySVG = () => (
  <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

const DeviceFrame = ({ children, isCenter }: { children: React.ReactNode, isCenter: boolean }) => (
  <div className={`relative mx-auto border-[#1c1c1e] bg-[#1c1c1e] border-[8px] rounded-[2.5rem] h-[580px] w-[270px] ${isCenter ? 'shadow-2xl shadow-indigo-900/20' : 'shadow-lg'} overflow-hidden ring-1 ring-slate-900/5 transition-shadow duration-500`}>
    <div className="w-[100px] h-[22px] bg-[#1c1c1e] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] z-30 flex items-center justify-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-slate-800/50"></div>
      <div className="w-8 h-1.5 rounded-full bg-slate-800/50"></div>
    </div>
    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative z-20">
      {children}
    </div>
    <div className="absolute inset-0 rounded-[2.2rem] ring-1 ring-white/10 pointer-events-none z-40 block"></div>
  </div>
);

const SprintMockup = () => (
  <div className="w-full h-full bg-[#f8fafc] flex flex-col pt-8">
    <div className="px-4 py-4 flex items-center justify-between border-b border-slate-100 bg-white">
      <div>
        <div className="font-extrabold text-slate-800 text-sm leading-tight">1UP</div>
        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Solo Sprint</div>
      </div>
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="18" fill="none" stroke="#e9ecef" strokeWidth="4" />
          <circle cx="22" cy="22" r="18" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="113" strokeDashoffset="35" strokeLinecap="round" transform="rotate(-90 22 22)" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-bold text-slate-700 text-[10px]">42</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="grid grid-cols-4 gap-2 mb-8 opacity-90 p-4 bg-slate-50/50 rounded-2xl w-full justify-items-center border border-slate-100">
        {[...Array(12)].map((_, i) => <circle key={i} className="w-2.5 h-2.5 rounded-full bg-brand-yellow shrink-0"></circle>)}
      </div>
      <div className="text-[9px] text-slate-400 font-bold tracking-widest mb-1">WAS IST</div>
      <div className="text-4xl font-black text-slate-800 leading-none mb-6">4 &times; 3</div>
      <div className="w-full border-4 border-[#5DD23C] bg-[#F0FBF0] rounded-2xl py-2.5 text-center text-3xl font-black text-[#2D8137] mb-6 shadow-inner tracking-widest">12</div>
      <div className="grid grid-cols-3 gap-2 w-full">
        <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-slate-100">
          <div className="text-[#3b82f6] font-black text-base">14</div>
          <div className="text-[8px] text-slate-400 font-bold uppercase">richtig</div>
        </div>
        <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-slate-100">
          <div className="text-[#eab308] font-black text-base">18.6</div>
          <div className="text-[8px] text-slate-400 font-bold uppercase">score</div>
        </div>
        <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-slate-100">
          <div className="text-[#5DD23C] font-black text-base">93%</div>
          <div className="text-[8px] text-slate-400 font-bold uppercase">genau</div>
        </div>
      </div>
    </div>
  </div>
);

const LernuebersichtMockup = () => {
  const getCellDesign = (r: number, c: number) => {
    let type = "unattempted";
    let dot = false;
    if (r === 1 && [1, 2, 3, 4, 5, 6, 7, 10].includes(c)) type = "mastered";
    if (r === 2 && [1, 2, 4, 5, 8, 9].includes(c)) type = "mastered";
    if (r === 3 && [1, 2, 4, 5, 7, 10].includes(c)) type = "mastered";
    if (r === 4 && [1, 2, 3, 10].includes(c)) type = "mastered";
    if (r === 5 && [1, 2, 3, 10].includes(c)) type = "mastered";
    if (r === 6 && [1, 2, 10].includes(c)) type = "mastered";
    if (r === 7 && [1, 2, 3, 10].includes(c)) type = "mastered";
    if (r === 8 && [1, 10].includes(c)) type = "mastered";
    if (r === 9 && [1, 2, 10].includes(c)) type = "mastered";
    if (r === 10 && [1, 2, 5, 6, 7, 8, 9].includes(c)) type = "mastered";
    if ((r === 2 && c === 3) || (r === 8 && c === 2) || (r === 10 && c === 3)) type = "learning";
    if (r === 2 && c === 10) type = "difficult";
    if (r >= 6 && r <= 9 && c >= 6 && c <= 9) {
      if (!(r === 7 && c === 7) && !(r === 8 && c === 8) && !(r === 9 && c === 9)) {
        dot = true;
      }
    }
    switch (type) {
      case "mastered": return { color: "bg-green-50 border-green-300 text-green-600", dot };
      case "learning": return { color: "bg-amber-50 border-amber-300 text-amber-500", dot };
      case "difficult": return { color: "bg-red-50 border-red-300 text-red-500", dot };
      case "unattempted":
      default: return { color: "bg-slate-50 border-transparent text-slate-200", dot };
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col pt-8">
      <div className="px-5 py-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
        <div>
          <div className="font-extrabold text-slate-800 text-sm leading-tight">Dein Profil</div>
          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Sprint beendet</div>
        </div>
        <div className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-[9px] font-bold shadow-sm border border-green-200">+12xp</div>
      </div>
      <div className="flex-1 flex flex-col bg-white overflow-y-auto px-4 py-6 scrollbar-hide">
        <div className="text-left mb-5">
          <div className="text-xl font-black text-slate-800 mb-0.5 tracking-tight">Lernübersicht</div>
          <div className="text-[10px] text-slate-500 font-medium leading-snug">Dein Einmaleins auf einen Blick.</div>
        </div>
        <div className="grid grid-cols-[auto_repeat(10,1fr)] gap-[2px] w-full mb-6">
          <div className="flex items-center justify-center text-slate-400 font-bold text-[8px] pb-1">&times;</div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(c => (
            <div key={`h-${c}`} className="flex items-center justify-center text-slate-600 font-black text-[9px] pb-1">{c}</div>
          ))}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(r => (
            <React.Fragment key={`row-${r}`}>
              <div className="flex items-center justify-center text-slate-600 font-black text-[9px] pr-1">{r}</div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(c => {
                const { color, dot } = getCellDesign(r, c);
                return (
                  <div key={`${r}-${c}`} className={`relative flex items-center justify-center rounded-[3px] border text-[8px] font-black h-[18px] ${color}`}>
                    {r * c}
                    {dot && <span className="absolute top-[1.5px] right-[1.5px] w-[3px] h-[3px] bg-red-400 rounded-full"></span>}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-start gap-y-2.5 gap-x-2.5 text-[8.5px] font-semibold text-slate-600 mt-auto">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] border border-green-300 bg-green-50"></div> beherrscht</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] border border-amber-300 bg-amber-50"></div> lernend</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] border border-red-300 bg-red-50"></div> schwierig</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] border border-transparent bg-slate-50"></div> unversucht</div>
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> schwer (&ge;1.5&times;)</div>
        </div>
      </div>
    </div>
  );
};

const LeaderboardMockup = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col pt-8">
    <div className="px-5 py-4 border-b border-slate-100 bg-white flex items-center justify-between shrink-0">
      <div>
        <div className="font-extrabold text-slate-800 text-sm leading-tight">Live Klasse</div>
        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">3a (24/24 aktiv)</div>
      </div>
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
    </div>
    <div className="p-4 flex-1 space-y-2.5 overflow-y-auto bg-slate-50/50">
      {[
        { name: "Emma", score: "28.4", rank: 1, c: "bg-brand-yellow", initials: "E", color: "text-amber-600 bg-amber-100" },
        { name: "Leon", score: "24.2", rank: 2, c: "bg-slate-300", initials: "L", color: "text-sky-600 bg-sky-100" },
        { name: "Mia", score: "21.0", rank: 3, c: "bg-orange-300", initials: "M", color: "text-emerald-600 bg-emerald-100" },
        { name: "Noah", score: "18.5", rank: 4, c: "bg-slate-200", initials: "N", color: "text-purple-600 bg-purple-100" },
        { name: "Lina", score: "15.2", rank: 5, c: "bg-slate-200", initials: "L", color: "text-pink-600 bg-pink-100" },
        { name: "Emil", score: "12.8", rank: 6, c: "bg-slate-200", initials: "E", color: "text-blue-600 bg-blue-100" }
      ].map((student) => (
        <div key={student.rank} className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-3 font-black text-slate-300 text-right text-[10px]">#{student.rank}</div>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px] ${student.color}`}>{student.initials}</div>
          <div className="flex-1">
            <div className="font-bold text-[11px] text-slate-800">{student.name}</div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full mt-1.5 overflow-hidden">
              <div className={`h-full ${student.c}`} style={{ width: `${(parseFloat(student.score) / 30) * 100}%` }}></div>
            </div>
          </div>
          <span className="font-black text-slate-600 text-[10px]">{student.score}</span>
        </div>
      ))}
    </div>
  </div>
);

const InteractiveHeroMockups = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const mockups = [
    { id: 'sprint', comp: <SprintMockup />, label: "60s Sprint" },
    { id: 'matrix', comp: <LernuebersichtMockup />, label: "Ergebnisse" },
    { id: 'leaderboard', comp: <LeaderboardMockup />, label: "Klasse Live" }
  ];

  return (
    <div
      className="relative w-full max-w-[300px] sm:max-w-lg mx-auto h-[620px] flex items-center justify-center mt-12 lg:mt-0 perspective-[1000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {mockups.map((m, idx) => {
        let offset = idx - activeIndex;
        if (offset < -1) offset += 3;
        if (offset > 1) offset -= 3;
        const isCenter = offset === 0;
        const isLeft = offset === -1;
        const isRight = offset === 1;

        const xBase = isLeft ? -90 : isRight ? 90 : 0;
        const yBase = isCenter ? 0 : 30;
        const scaleBase = isCenter ? 1 : 0.85;
        const rotateY = isLeft ? 15 : isRight ? -15 : 0;
        const rotateZ = isLeft ? -4 : isRight ? 4 : 0;
        const zIndex = isCenter ? 40 : 20;

        return (
          <motion.div
            key={m.id}
            onClick={() => setActiveIndex(idx)}
            className={`absolute cursor-pointer transition-colors duration-300 pointer-events-auto w-[270px] ${!isCenter && 'hover:brightness-110'}`}
            animate={{
              x: xBase, y: yBase, scale: scaleBase, rotateY, rotateZ, zIndex, opacity: isCenter ? 1 : 0.4
            }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <DeviceFrame isCenter={isCenter}>
              {m.comp}
            </DeviceFrame>
          </motion.div>
        )
      })}
      <div className="absolute -bottom-12 sm:-bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 shadow-xl">
        {mockups.map((m, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`text-xs font-bold transition-all px-4 pt-1.5 pb-2 leading-none rounded-full ${activeIndex === idx ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  )
}

const LandingPage = () => (
  <>
    <section className="pt-32 pb-20 px-6 overflow-hidden relative min-h-[900px] lg:min-h-0 flex items-center">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-yellow/10 rounded-full blur-[120px] -z-10 absolute pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
        <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0 z-10 w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 text-sm font-bold text-slate-600">
              <span className="flex h-2 w-2 rounded-full bg-brand-yellow-hover"></span>
              Neu für smarte Klassenzimmer
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.05]">
              Mathe üben, das sich wie ein <span className="text-brand-yellow-hover relative inline-block">
                Spiel
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-brand-yellow/40 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" /></svg>
              </span> anfühlt.
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Die motivierendste Art, das kleine Einmaleins zu meistern. Entwickelt für moderne Lehrer:innen, die weniger korrigieren und mehr begeistern wollen.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center">
                <button onClick={() => window.open('https://better-1up.vercel.app', '_blank')} className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow-hover text-slate-900 font-bold text-lg py-4 px-8 rounded-full shadow-xl shadow-brand-yellow/30 transition-all hover:scale-105 flex items-center justify-center gap-3">
                  <Monitor size={22} strokeWidth={2.5} />
                  Klasse anlegen (Web)
                </button>
              </div>
              <div className="flex justify-center lg:justify-start gap-4 items-center flex-wrap">
                <button className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20">
                  <AppleSVG />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] text-slate-300 font-semibold tracking-wider">Download on the</div>
                    <div className="font-bold text-sm">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20">
                  <PlaySVG />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] text-slate-300 font-semibold tracking-wider">GET IT ON</div>
                    <div className="font-bold text-sm">Google Play</div>
                  </div>
                </button>
              </div>
              <span className="text-slate-400 font-medium text-sm text-center lg:text-left mt-2 block w-full">100% kostenlos. Keine Accounts für Schüler nötig.</span>
            </div>
          </FadeIn>
        </div>
        <div className="flex-1 w-full relative h-[700px] flex items-center justify-center -z-0">
          <FadeIn delay={0.2} className="w-full">
            <InteractiveHeroMockups />
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="py-24 bg-white px-6 mt-16 md:mt-0 relative z-20">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 tracking-tight">
            Pädagogisch wertvoll. <br /><span className="text-slate-400">Wahnsinnig motivierend.</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group h-full">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap className="text-brand-yellow-hover" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">60-Sekunden Sprints</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Ultrakurze Übungsphasen, die perfekt in jede Stunde passen. Konzentration bleibt hoch, Frustration bleibt aus.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group h-full">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <DotGrid />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visuelles Verständnis</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Weg vom reinen Auswendiglernen. Mit interaktiven Punkte-Rastern verstehen Kinder die Logik hinter der Multiplikation.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group h-full">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform overflow-hidden">
                <Logo className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mastery Grid</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Ein klares 10x10 Progressions-Raster. Sieh sofort auf einen Blick, welche Aufgaben sitzen und wo noch geübt werden muss.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden mt-12 mb-12 rounded-[3rem] mx-4 md:mx-10 shadow-2xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-yellow/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 p-2 rounded-2xl">
              <Logo className="w-12 h-12" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            Bereit für die nächste <br /> Mathe-Stunde?
          </h2>
          <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
            Probier es aus. Es dauert genau 1 Minute, um deine erste Klasse im Web zu erstellen. Oder lade die App direkt herunter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <button onClick={() => window.open('https://better-1up.vercel.app', '_blank')} className="bg-brand-yellow hover:bg-brand-yellow-hover text-slate-900 font-black text-lg py-4 flex-1 sm:w-auto px-8 rounded-xl shadow-2xl shadow-brand-yellow/20 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-3">
              <Monitor size={22} strokeWidth={2.5} />
              Sofort ausprobieren
            </button>
            <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 w-full sm:w-auto rounded-xl hover:-translate-y-1 transition-all outline outline-1 outline-white/20">
              <Smartphone size={22} strokeWidth={2.5} />
              <span className="text-left font-bold text-lg">Mobile App laden</span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  </>
);

const Impressum = () => (
  <section className="pt-32 pb-20 px-6 w-full max-w-3xl mx-auto">
    <FadeIn>
      <h1 className="text-4xl font-black mb-8">Impressum</h1>
      <div className="text-slate-600 space-y-4 font-medium">
        <h3 className="text-xl font-bold text-slate-800">Angaben gemäß § 5 TMG</h3>
        <p>
          Lars Bilharz<br/>
          Boppstraße 3<br/>
          10967 Berlin<br/>
          Germany
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-8">Kontakt</h3>
        <p>
          Telefon: +49 170 43 610 17<br/>
          E-Mail: <a href="mailto:info@lars-bilharz.de" className="text-blue-600 hover:underline">info@lars-bilharz.de</a>
        </p>

        <h3 className="text-xl font-bold text-slate-800 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>
          Lars Bilharz<br/>
          (Anschrift wie oben)
        </p>

        <p className="text-sm text-slate-400 mt-12">
          Diese Website dient als Landingpage für die Bildungs-App "Better 1UP". 
        </p>
      </div>
    </FadeIn>
  </section>
);

const Datenschutz = () => (
  <section className="pt-32 pb-20 px-6 w-full max-w-3xl mx-auto">
    <FadeIn>
      <h1 className="text-4xl font-black mb-8">Datenschutzerklärung (Privacy Policy)</h1>
      <div className="text-slate-600 space-y-6 font-medium leading-relaxed">
        <p><strong>Stand: März 2026</strong></p>
        <p>Der Schutz von Kindern und sämtlichen Nutzern steht bei "Better 1UP" an oberster Stelle. Diese Datenschutzerklärung informiert Sie über die Verarbeitung von Daten in der App und auf dieser Landingpage.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Grundsatz: Keine Datensammlung bei Schüler:innen</h3>
        <p>Wir haben Better 1UP explizit so entwickelt, dass <strong>absolut keine personenbezogenen Daten (PII) von Kindern</strong> erhoben werden.</p>
        <ul className="list-disc pl-5 space-y-2">
           <li>Es werden <strong>keine Schüler-Accounts</strong> angelegt oder gefordert.</li>
           <li>Es werden <strong>keine Namen, Geräte-IDs, E-Mail-Adressen oder Standortdaten</strong> von Kindern abgefragt oder gespeichert.</li>
           <li>Der Lernfortschritt in der App wird ausschließlich per gerätegebundener, anonymer Session verarbeitet.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Nutzung durch Lehrkräfte</h3>
        <p>Auch Lehrkräfte benötigen für die App <strong>keinen klassischen Account</strong>. Optional kann eine E-Mail-Adresse hinterlegt werden, um sich einen Wiederherstellungs-Code (Recovery Code) per E-Mail zusenden zu lassen (technischer Versand über den Dienstleister Resend), um den Zugang zum eigenen Klassenraum wiederherzustellen. Diese E-Mail-Adresse wird vertraulich behandelt und niemals für Marketing-Zwecke verwendet.</p>

        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. Strikt Werbefrei und "No Tracking"</h3>
        <p>Better 1UP ist ein Bildungsprodukt für den Unterricht. Wir garantieren:</p>
        <ul className="list-disc pl-5 space-y-2">
           <li><strong>Keine Tracking-Algorithmen:</strong> Wir nutzen keine Analysedienste (wie Google Analytics) in der App.</li>
           <li><strong>Keine Werbung:</strong> Wir zeigen keinerlei In-App-Werbung oder gesponserte Inhalte.</li>
           <li><strong>Kein Datenverkauf:</strong> Daten werden niemals an Dritte verkauft oder für Marketing-Zwecke missbraucht.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Hosting dieser Website</h3>
        <p>Unsere Infrastruktur für diese Landingpage wird über Vercel Inc. bereitgestellt. Beim Aufruf der Seite werden zwangsläufig technische Verbindungsdaten (z.B. IP-Adresse) verarbeitet, um die Seite auszuliefern. Dies ist technisch erforderlich und DSGVO-konform (Art. 6 Abs. 1 lit. f DSGVO).</p>

        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. Kontakt für Datenschutzanfragen</h3>
        <p>
          Verantwortlicher im Sinne der DSGVO:<br/>
          Lars Bilharz<br/>
          Boppstraße 3<br/>
          10967 Berlin<br/>
          E-Mail: <a href="mailto:info@lars-bilharz.de" className="text-blue-600 hover:underline">info@lars-bilharz.de</a>
        </p>
      </div>
    </FadeIn>
  </section>
);

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (currentPath === '/impressum') return <Impressum />;
    if (currentPath === '/datenschutz') return <Datenschutz />;
    return <LandingPage />;
  };

  return (
    <div className="min-h-screen text-slate-800 selection:bg-brand-yellow/30 bg-brand-bg pb-10 flex flex-col">
      <nav className="fixed top-0 w-full bg-slate-50/80 backdrop-blur-xl z-[100] border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3 font-extrabold text-2xl tracking-tight cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
              <Logo className="w-7 h-7" />
            </div>
            Better <span className="text-brand-yellow-hover">1UP</span>
          </div>
          <button className="bg-brand-yellow hover:bg-brand-yellow-hover text-slate-900 font-bold py-2 px-5 sm:py-2.5 sm:px-6 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm sm:text-base pointer-events-auto" onClick={() => window.open('https://better-1up.vercel.app', '_blank')}>
            <span className="hidden sm:inline">Sofort üben</span>
            <span className="inline sm:hidden">Üben</span>
            <ArrowRight size={18} strokeWidth={3} />
          </button>
        </div>
      </nav>

      <main className="flex-1 w-full">
        {renderContent()}
      </main>

      <footer className="py-12 bg-brand-bg text-slate-500 text-center text-sm font-medium border-t border-slate-200 mt-auto">
        <div className="flex items-center justify-center gap-2 mb-4 text-xl font-bold text-slate-800 cursor-pointer" onClick={() => navigate('/')}>
          <Logo className="w-6 h-6 grayscale opacity-80" />
          Better <span className="text-brand-yellow">1UP</span>
        </div>
        <p>Entwickelt mit ♥️ für Lehrer:innen in Berlin und überall.</p>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <span onClick={() => navigate('/impressum')} className="hover:text-slate-900 cursor-pointer transition-colors">Impressum</span>
          <span onClick={() => navigate('/datenschutz')} className="hover:text-slate-900 cursor-pointer transition-colors">Datenschutz &amp; Kids Privacy</span>
          <span onClick={() => window.open('https://better-1up.vercel.app', '_blank')} className="hover:text-slate-900 cursor-pointer transition-colors">Web Login</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
