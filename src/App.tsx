import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, Monitor, Smartphone, Globe, Sun, Moon, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  <div className={`relative mx-auto border-[#1c1c1e] bg-[#1c1c1e] border-[8px] rounded-[2.5rem] h-[580px] w-[270px] ${isCenter ? 'shadow-2xl shadow-indigo-900/20 dark:shadow-black/50' : 'shadow-lg dark:shadow-black/30'} overflow-hidden ring-1 ring-slate-900/5 transition-shadow duration-500`}>
    <div className="w-[100px] h-[22px] bg-[#1c1c1e] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] z-30 flex items-center justify-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-slate-800/50"></div>
      <div className="w-8 h-1.5 rounded-full bg-slate-800/50"></div>
    </div>
    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden relative z-20 transition-colors">
      {children}
    </div>
    <div className="absolute inset-0 rounded-[2.2rem] ring-1 ring-white/10 pointer-events-none z-40 block"></div>
  </div>
);

const SprintMockup = () => {
  const { t } = useTranslation();
  return (
  <div className="w-full h-full bg-[#f8fafc] dark:bg-slate-950 flex flex-col pt-8 transition-colors">
    <div className="px-4 py-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div>
        <div className="font-extrabold text-slate-800 dark:text-white text-sm leading-tight">{t('mockups.sprint_title')}</div>
        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{t('mockups.sprint_sub')}</div>
      </div>
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="18" fill="none" stroke="#e9ecef" strokeWidth="4" className="dark:stroke-slate-800" />
          <circle cx="22" cy="22" r="18" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="113" strokeDashoffset="35" strokeLinecap="round" transform="rotate(-90 22 22)" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300 text-[10px]">42</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="grid grid-cols-4 gap-2 mb-8 opacity-90 p-4 bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl w-full justify-items-center border border-slate-100 dark:border-slate-800 transition-colors">
        {[...Array(12)].map((_, i) => <circle key={i} className="w-2.5 h-2.5 rounded-full bg-brand-yellow shrink-0"></circle>)}
      </div>
      <div className="text-[9px] text-slate-400 font-bold tracking-widest mb-1 uppercase">{t('mockups.sprint_was_ist')}</div>
      <div className="text-4xl font-black text-slate-800 dark:text-white leading-none mb-6">4 &times; 3</div>
      <div className="w-full border-4 border-[#5DD23C] bg-[#F0FBF0] dark:bg-[#1E3A20] dark:border-[#4AA930] rounded-2xl py-2.5 text-center text-3xl font-black text-[#2D8137] dark:text-[#5DD23C] mb-6 shadow-inner tracking-widest transition-colors">12</div>
      <div className="grid grid-cols-3 gap-2 w-full">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-2 text-center shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
          <div className="text-[#3b82f6] dark:text-blue-400 font-black text-base">14</div>
          <div className="text-[8px] text-slate-400 font-bold uppercase">{t('mockups.sprint_correct')}</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-2 text-center shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
          <div className="text-[#eab308] font-black text-base">18.6</div>
          <div className="text-[8px] text-slate-400 font-bold uppercase">{t('mockups.sprint_score')}</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-2 text-center shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
          <div className="text-[#5DD23C] dark:text-green-400 font-black text-base">93%</div>
          <div className="text-[8px] text-slate-400 font-bold uppercase">{t('mockups.sprint_acc')}</div>
        </div>
      </div>
    </div>
  </div>
)};

const TapMockup = () => {
  const { t } = useTranslation();
  return (
  <div className="w-full h-full bg-[#f8fafc] dark:bg-slate-950 flex flex-col pt-8 transition-colors">
    <div className="px-4 py-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div>
        <div className="font-extrabold text-slate-800 dark:text-white text-sm leading-tight">{t('mockups.sprint_title')}</div>
        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{t('mockups.tap_sub')}</div>
      </div>
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="18" fill="none" stroke="#e9ecef" strokeWidth="4" className="dark:stroke-slate-800" />
          <circle cx="22" cy="22" r="18" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="113" strokeDashoffset="75" strokeLinecap="round" transform="rotate(-90 22 22)" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300 text-[10px]">19</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col items-center px-4 pt-10 pb-6 w-full">
      <div className="text-[9px] text-slate-400 font-bold tracking-widest mb-1 uppercase">{t('mockups.sprint_was_ist')}</div>
      <div className="text-4xl font-black text-slate-800 dark:text-white leading-none mb-10 w-full text-center">7 &times; 8</div>
      
      <div className="grid grid-cols-2 gap-3 w-full mt-auto">
        {[48, 54, 56, 64].map((opt, i) => (
          <div key={i} className="bg-brand-yellow/10 dark:bg-brand-yellow/5 border-2 border-brand-yellow/30 dark:border-brand-yellow/20 rounded-2xl py-6 flex items-center justify-center font-black text-2xl text-slate-800 dark:text-brand-yellow shadow-sm">
            {opt}
          </div>
        ))}
      </div>
    </div>
  </div>
)};

const LernuebersichtMockup = () => {
  const { t } = useTranslation();
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
      case "mastered": return { color: "bg-green-50 border-green-300 text-green-600 dark:bg-green-900/30 dark:border-green-700/50 dark:text-green-400", dot };
      case "learning": return { color: "bg-amber-50 border-amber-300 text-amber-500 dark:bg-amber-900/30 dark:border-amber-700/50 dark:text-amber-400", dot };
      case "difficult": return { color: "bg-red-50 border-red-300 text-red-500 dark:bg-red-900/30 dark:border-red-700/50 dark:text-red-400", dot };
      case "unattempted":
      default: return { color: "bg-slate-50 border-transparent text-slate-200 dark:bg-slate-800/10 dark:text-slate-600", dot };
    }
  };

  return (
    <div className="w-full h-full bg-white dark:bg-slate-900 flex flex-col pt-8 transition-colors">
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between shrink-0 transition-colors">
        <div>
          <div className="font-extrabold text-slate-800 dark:text-white text-sm leading-tight">{t('mockups.matrix_title')}</div>
          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{t('mockups.matrix_sub')}</div>
        </div>
        <div className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-md text-[9px] font-bold shadow-sm border border-green-200 dark:border-green-800 transition-colors">+12xp</div>
      </div>
      <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 overflow-y-auto px-4 py-6 scrollbar-hide transition-colors">
        <div className="text-left mb-5">
          <div className="text-xl font-black text-slate-800 dark:text-white mb-0.5 tracking-tight">{t('mockups.matrix_main')}</div>
          <div className="text-[10px] text-slate-500 font-medium leading-snug">{t('mockups.matrix_desc')}</div>
        </div>
        <div className="grid grid-cols-[auto_repeat(10,1fr)] gap-[2px] w-full mb-6">
          <div className="flex items-center justify-center text-slate-400 font-bold text-[8px] pb-1">&times;</div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(c => (
            <div key={`h-${c}`} className="flex items-center justify-center text-slate-600 dark:text-slate-400 font-black text-[9px] pb-1">{c}</div>
          ))}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(r => (
            <React.Fragment key={`row-${r}`}>
              <div className="flex items-center justify-center text-slate-600 dark:text-slate-400 font-black text-[9px] pr-1">{r}</div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(c => {
                const { color, dot } = getCellDesign(r, c);
                return (
                  <div key={`${r}-${c}`} className={`relative flex items-center justify-center rounded-[3px] border text-[8px] font-black h-[18px] transition-colors ${color}`}>
                    {r * c}
                    {dot && <span className="absolute top-[1.5px] right-[1.5px] w-[3px] h-[3px] bg-red-400 dark:bg-red-500 rounded-full"></span>}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-start gap-y-2.5 gap-x-2.5 text-[8.5px] font-semibold text-slate-600 dark:text-slate-400 mt-auto">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] border border-green-300 bg-green-50 dark:border-green-700/50 dark:bg-green-900/30 transition-colors"></div> {t('mockups.matrix_mastered')}</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] border border-amber-300 bg-amber-50 dark:border-amber-700/50 dark:bg-amber-900/30 transition-colors"></div> {t('mockups.matrix_learning')}</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] border border-red-300 bg-red-50 dark:border-red-700/50 dark:bg-red-900/30 transition-colors"></div> {t('mockups.matrix_hard')}</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] border border-transparent bg-slate-50 dark:bg-slate-800/10 transition-colors"></div> {t('mockups.matrix_unattempted')}</div>
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400 dark:bg-red-500"></span> {t('mockups.matrix_very_hard')}</div>
        </div>
      </div>
    </div>
  );
};

const LeaderboardMockup = () => {
  const { t } = useTranslation();
  return (
  <div className="w-full h-full bg-slate-50 dark:bg-slate-950 flex flex-col pt-8 transition-colors">
    <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between shrink-0 transition-colors">
      <div>
        <div className="font-extrabold text-slate-800 dark:text-white text-sm leading-tight">{t('mockups.live_title')}</div>
        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{t('mockups.live_sub')}</div>
      </div>
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
    </div>
    <div className="p-4 flex-1 space-y-2.5 overflow-y-auto bg-slate-50/50 dark:bg-slate-900/50 transition-colors">
      {[
        { name: "Emma", score: "28.4", rank: 1, c: "bg-brand-yellow", initials: "E", color: "text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400" },
        { name: "Leon", score: "24.2", rank: 2, c: "bg-slate-300", initials: "L", color: "text-sky-600 bg-sky-100 dark:bg-sky-900/30 dark:text-sky-400" },
        { name: "Mia", score: "21.0", rank: 3, c: "bg-orange-300", initials: "M", color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400" },
        { name: "Noah", score: "18.5", rank: 4, c: "bg-slate-200 dark:bg-slate-600", initials: "N", color: "text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400" },
        { name: "Lina", score: "15.2", rank: 5, c: "bg-slate-200 dark:bg-slate-600", initials: "L", color: "text-pink-600 bg-pink-100 dark:bg-pink-900/30 dark:text-pink-400" },
        { name: "Emil", score: "12.8", rank: 6, c: "bg-slate-200 dark:bg-slate-600", initials: "E", color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400" }
      ].map((student) => (
        <div key={student.rank} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
          <div className="w-3 font-black text-slate-300 dark:text-slate-500 text-right text-[10px]">#{student.rank}</div>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px] transition-colors ${student.color}`}>{student.initials}</div>
          <div className="flex-1">
            <div className="font-bold text-[11px] text-slate-800 dark:text-slate-200">{student.name}</div>
            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full mt-1.5 overflow-hidden transition-colors">
              <div className={`h-full ${student.c}`} style={{ width: `${(parseFloat(student.score) / 30) * 100}%` }}></div>
            </div>
          </div>
          <span className="font-black text-slate-600 dark:text-slate-400 text-[10px]">{student.score}</span>
        </div>
      ))}
    </div>
  </div>
)};

const InteractiveHeroMockups = () => {
  const { t } = useTranslation();
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
    { id: 'sprint', comp: <SprintMockup />, label: t('mockups.tab_sprint') },
    { id: 'tap', comp: <TapMockup />, label: t('mockups.tab_tap') },
    { id: 'matrix', comp: <LernuebersichtMockup />, label: t('mockups.tab_matrix') },
    { id: 'leaderboard', comp: <LeaderboardMockup />, label: t('mockups.tab_live') }
  ];

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((curr) => (curr + 1) % mockups.length); // Next slide
    } else if (isRightSwipe) {
      setActiveIndex((curr) => (curr - 1 + mockups.length) % mockups.length); // Prev slide
    }
  };

  return (
    <div
      className="relative w-full max-w-[300px] sm:max-w-lg mx-auto h-[620px] flex items-center justify-center mt-12 lg:mt-0 perspective-[1000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      {mockups.map((m, idx) => {
        let offset = idx - activeIndex;
        if (offset < -2) offset += 4;
        if (offset > 1) offset -= 4;
        
        const isCenter = offset === 0;
        const isLeft = offset === -1;
        const isRight = offset === 1;
        const isBack = offset === -2;

        const xBase = isLeft ? -100 : isRight ? 100 : isBack ? 0 : 0;
        const yBase = isCenter ? 0 : isBack ? 60 : 30;
        const scaleBase = isCenter ? 1 : isBack ? 0.7 : 0.85;
        const rotateY = isLeft ? 15 : isRight ? -15 : 0;
        const rotateZ = isLeft ? -4 : isRight ? 4 : 0;
        const zIndex = isCenter ? 40 : isBack ? 10 : 20;

        return (
          <motion.div
            key={m.id}
            onClick={() => setActiveIndex(idx)}
            className={`absolute cursor-pointer transition-colors duration-500 pointer-events-auto w-[270px] ${!isCenter && 'hover:brightness-110'}`}
            animate={{
              x: xBase, y: yBase, scale: scaleBase, rotateY, rotateZ, zIndex, opacity: isCenter ? 1 : isBack ? 0 : 0.4
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
      <div className="absolute -bottom-12 sm:-bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 bg-white/60 dark:bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 shadow-xl transition-colors">
        {mockups.map((m, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`text-xs font-bold transition-all px-4 pt-1.5 pb-2 leading-none rounded-full whitespace-nowrap ${activeIndex === idx ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700'}`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  )
}

const LandingPage = () => {
  const { t } = useTranslation();
  return (
  <>
    <section className="pt-32 pb-20 px-6 overflow-hidden relative min-h-[900px] lg:min-h-0 flex items-center transition-colors">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-yellow/10 dark:bg-brand-yellow/5 rounded-full blur-[120px] -z-10 absolute pointer-events-none transition-colors" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
        <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0 z-10 w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6 text-sm font-bold text-slate-600 dark:text-slate-300 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-brand-yellow-hover"></span>
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.05] text-slate-800 dark:text-white transition-colors">
              {t('hero.title_1')} <span className="text-brand-yellow-hover relative inline-block">
                {t('hero.title_2')}
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-brand-yellow/40 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" /></svg>
              </span> {t('hero.title_3')}
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed transition-colors">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center">
                <button onClick={() => window.open('https://better-1up.vercel.app', '_blank')} className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow-hover text-slate-900 font-bold text-lg py-4 px-8 rounded-full shadow-xl shadow-brand-yellow/30 dark:shadow-brand-yellow/10 transition-all hover:scale-105 flex items-center justify-center gap-3">
                  <Monitor size={22} strokeWidth={2.5} />
                  {t('hero.cta_web')}
                </button>
              </div>
              <div className="flex justify-center lg:justify-start gap-4 items-center flex-wrap">
                <button className="flex items-center gap-3 bg-slate-900 dark:bg-slate-800 text-white px-5 py-3 rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20 dark:hover:shadow-black/50 border border-transparent dark:border-slate-700">
                  <AppleSVG />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] text-slate-300 dark:text-slate-400 font-semibold tracking-wider">{t('hero.app_store_dl')}</div>
                    <div className="font-bold text-sm">{t('hero.app_store_name')}</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-slate-900 dark:bg-slate-800 text-white px-5 py-3 rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20 dark:hover:shadow-black/50 border border-transparent dark:border-slate-700">
                  <PlaySVG />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] text-slate-300 dark:text-slate-400 font-semibold tracking-wider">{t('hero.play_store_dl')}</div>
                    <div className="font-bold text-sm">{t('hero.play_store_name')}</div>
                  </div>
                </button>
              </div>
              <span className="text-slate-400 dark:text-slate-500 font-medium text-sm text-center lg:text-left mt-2 block w-full transition-colors">{t('hero.disclaimer')}</span>
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

    <section className="py-24 bg-white dark:bg-slate-900 px-6 mt-16 md:mt-0 relative z-20 transition-colors">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 tracking-tight text-slate-800 dark:text-white transition-colors">
            {t('features.title_1')} <br /><span className="text-slate-400">{t('features.title_2')}</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all group h-full">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap className="text-brand-yellow-hover" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white transition-colors">{t('features.f1_title')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors">
                {t('features.f1_desc')}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all group h-full">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <DotGrid />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white transition-colors">{t('features.f2_title')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors">
                {t('features.f2_desc')}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} className="h-full">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all group h-full">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform overflow-hidden">
                <Logo className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white transition-colors">{t('features.f3_title')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors">
                {t('features.f3_desc')}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4} className="h-full">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all group h-full">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Brain className="text-indigo-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white transition-colors">{t('features.f4_title')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors">
                {t('features.f4_desc')}
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
            {t('cta.title_1')} <br /> {t('cta.title_2')}
          </h2>
          <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <button onClick={() => window.open('https://better-1up.vercel.app', '_blank')} className="bg-brand-yellow hover:bg-brand-yellow-hover text-slate-900 font-black text-lg py-4 flex-1 sm:w-auto px-8 rounded-xl shadow-2xl shadow-brand-yellow/20 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-3">
              <Monitor size={22} strokeWidth={2.5} />
              {t('cta.button_try')}
            </button>
            <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 w-full sm:w-auto rounded-xl hover:-translate-y-1 transition-all outline outline-1 outline-white/20">
              <Smartphone size={22} strokeWidth={2.5} />
              <span className="text-left font-bold text-lg">{t('cta.button_app')}</span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  </>
)};

const Impressum = ({ navigate }: { navigate: (path: string) => void }) => {
  const { t } = useTranslation();
  return (
  <section className="pt-32 pb-20 px-6 w-full max-w-3xl mx-auto">
    <FadeIn>
      <button onClick={() => navigate('/')} className="mb-8 group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-bold transition-colors">
        <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={18} strokeWidth={3} /> 
        {t('legal.back')}
      </button>
      <h1 className="text-4xl font-black mb-8 text-slate-800 dark:text-white transition-colors">{t('legal.impressum_title')}</h1>
      <div className="text-slate-600 dark:text-slate-400 space-y-4 font-medium transition-colors">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{t('legal.impressum_tmg')}</h3>
        <p>
          Lars Bilharz<br/>
          Boppstraße 3<br/>
          10967 Berlin<br/>
          Germany
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8">{t('legal.impressum_contact')}</h3>
        <p>
          Telefon: +49 170 43 610 17<br/>
          E-Mail: <a href="mailto:info@lars-bilharz.de" className="text-blue-600 dark:text-blue-400 hover:underline">info@lars-bilharz.de</a>
        </p>

        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8">{t('legal.impressum_responsible')}</h3>
        <p>
          Lars Bilharz<br/>
          (Anschrift wie oben)
        </p>

        <p className="text-sm text-slate-400 dark:text-slate-500 mt-12">
          {t('legal.impressum_disclaimer')}
        </p>
      </div>
    </FadeIn>
  </section>
)};

const Datenschutz = ({ navigate }: { navigate: (path: string) => void }) => {
  const { t } = useTranslation();
  return (
  <section className="pt-32 pb-20 px-6 w-full max-w-3xl mx-auto">
    <FadeIn>
      <button onClick={() => navigate('/')} className="mb-8 group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-bold transition-colors">
        <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={18} strokeWidth={3} /> 
        {t('legal.back')}
      </button>
      <h1 className="text-4xl font-black mb-8 text-slate-800 dark:text-white transition-colors">{t('legal.privacy_title')}</h1>
      <div className="text-slate-600 dark:text-slate-400 space-y-6 font-medium leading-relaxed transition-colors">
        <p><strong>{t('legal.privacy_date')}</strong></p>
        <p>{t('legal.privacy_intro')}</p>
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-4">{t('legal.p1_title')}</h3>
        <p>{t('legal.p1_desc')}</p>
        <ul className="list-disc pl-5 space-y-2">
           <li>{t('legal.p1_li1')}</li>
           <li>{t('legal.p1_li2')}</li>
           <li>{t('legal.p1_li3')}</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-4">{t('legal.p2_title')}</h3>
        <p>{t('legal.p2_desc')}</p>

        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-4">{t('legal.p3_title')}</h3>
        <p>{t('legal.p3_desc')}</p>
        <ul className="list-disc pl-5 space-y-2">
           <li>{t('legal.p3_li1')}</li>
           <li>{t('legal.p3_li2')}</li>
           <li>{t('legal.p3_li3')}</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-4">{t('legal.p4_title')}</h3>
        <p>{t('legal.p4_desc')}</p>

        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-4">{t('legal.p5_title')}</h3>
        <p>
          {t('legal.p5_desc')}<br/>
          Lars Bilharz<br/>
          Boppstraße 3<br/>
          10967 Berlin<br/>
          E-Mail: <a href="mailto:info@lars-bilharz.de" className="text-blue-600 dark:text-blue-400 hover:underline">info@lars-bilharz.de</a>
        </p>
      </div>
    </FadeIn>
  </section>
)};

function App() {
  const { t, i18n } = useTranslation();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  
  useEffect(() => {
    // Check initial system preference if no class is set
    if (!document.documentElement.classList.contains('dark') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       document.documentElement.classList.add('dark');
       // eslint-disable-next-line react-hooks/set-state-in-effect
       setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language.startsWith('de') ? 'en' : 'de');
  };

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
    if (currentPath === '/impressum') return <Impressum navigate={navigate} />;
    if (currentPath === '/datenschutz') return <Datenschutz navigate={navigate} />;
    return <LandingPage />;
  };

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100 selection:bg-brand-yellow/30 bg-brand-bg dark:bg-slate-950 pb-10 flex flex-col transition-colors duration-300">
      <nav className="fixed top-0 w-full bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl z-[100] border-b border-slate-200/50 dark:border-slate-800/50 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3 font-extrabold text-2xl tracking-tight cursor-pointer text-slate-800 dark:text-white transition-colors" onClick={() => navigate('/')}>
            <div className="bg-white dark:bg-slate-800 p-1.5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center transition-colors">
              <Logo className="w-7 h-7" />
            </div>
            Better <span className="text-brand-yellow-hover">1UP</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <button onClick={toggleDark} className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Dark Mode">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleLang} className="px-2 py-1 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider">
              <Globe size={16} /> <span className="hidden sm:inline">{i18n.language.substring(0,2)}</span>
            </button>
            <button className="bg-brand-yellow hover:bg-brand-yellow-hover text-slate-900 font-bold py-2 px-4 sm:py-2.5 sm:px-6 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm sm:text-base pointer-events-auto" onClick={() => window.open('https://better-1up.vercel.app', '_blank')}>
              <span className="hidden sm:inline">{t('nav.practice')}</span>
              <span className="inline sm:hidden">{t('nav.practice_short')}</span>
              <ArrowRight size={18} strokeWidth={3} />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full pt-[72px]">
        {renderContent()}
      </main>

      <footer className="py-12 bg-brand-bg dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-center text-sm font-medium border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors">
        <div className="flex items-center justify-center gap-2 mb-4 text-xl font-bold text-slate-800 dark:text-white cursor-pointer transition-colors" onClick={() => navigate('/')}>
          <Logo className="w-6 h-6 grayscale opacity-80" />
          Better <span className="text-brand-yellow">1UP</span>
        </div>
        <p>{t('footer.made_with')}</p>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <span onClick={() => navigate('/impressum')} className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{t('footer.impressum')}</span>
          <span onClick={() => navigate('/datenschutz')} className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{t('footer.privacy')}</span>
          <span onClick={() => window.open('https://better-1up.vercel.app', '_blank')} className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{t('footer.login')}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
