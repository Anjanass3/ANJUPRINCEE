import type React from 'react';

// Ornate Latin Christian Cross with budded trefoil tips and radiant center
export const ChristianCross: React.FC<{ className?: string; size?: number; gold?: boolean }> = ({
  className = "w-8 h-8",
  size = 32,
  gold = true,
}) => (
  <svg
    width={size}
    height={size * 1.3}
    viewBox="0 0 60 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <defs>
      <linearGradient id="crossGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E6BA" />
        <stop offset="45%" stopColor="#D4AF37" />
        <stop offset="85%" stopColor="#97742D" />
        <stop offset="100%" stopColor="#C5A059" />
      </linearGradient>
    </defs>
    {/* Shadow / outline */}
    <path
      d="M30 6 L30 74 M14 26 L46 26"
      stroke={gold ? "url(#crossGoldGrad)" : "currentColor"}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Ornate flourishes */}
    <circle cx="30" cy="26" r="6" stroke={gold ? "url(#crossGoldGrad)" : "currentColor"} strokeWidth="1.5" fill="none" />
    <circle cx="30" cy="26" r="2" fill={gold ? "#D4AF37" : "currentColor"} />
    {/* Tips */}
    <circle cx="30" cy="6" r="2.5" fill={gold ? "url(#crossGoldGrad)" : "currentColor"} />
    <circle cx="30" cy="74" r="2.5" fill={gold ? "url(#crossGoldGrad)" : "currentColor"} />
    <circle cx="14" cy="26" r="2.5" fill={gold ? "url(#crossGoldGrad)" : "currentColor"} />
    <circle cx="46" cy="26" r="2.5" fill={gold ? "url(#crossGoldGrad)" : "currentColor"} />
  </svg>
);

// Intertwined Golden Wedding Rings (💍)
export const WeddingRings: React.FC<{ className?: string; size?: number }> = ({
  className = "w-6 h-6",
  size = 28,
}) => (
  <svg
    width={size}
    height={size * 0.75}
    viewBox="0 0 48 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <defs>
      <linearGradient id="ringGold1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF1C2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6B22" />
      </linearGradient>
      <linearGradient id="ringGold2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F5E6BA" />
        <stop offset="50%" stopColor="#C5A059" />
        <stop offset="100%" stopColor="#6E5014" />
      </linearGradient>
    </defs>
    {/* Left Ring (Groom's Band) */}
    <ellipse cx="18" cy="18" rx="12" ry="12" stroke="url(#ringGold1)" strokeWidth="3.2" fill="none" />
    <ellipse cx="18" cy="18" rx="10" ry="10" stroke="#FFF7D6" strokeWidth="0.8" fill="none" opacity="0.6" />
    {/* Right Ring (Bride's Band) */}
    <ellipse cx="30" cy="18" rx="12" ry="12" stroke="url(#ringGold2)" strokeWidth="3.2" fill="none" />
    <ellipse cx="30" cy="18" rx="10" ry="10" stroke="#FFF7D6" strokeWidth="0.8" fill="none" opacity="0.6" />
    {/* Diamond Solitaire on Bride's Ring */}
    <path d="M30 3 L33 6 L30 9 L27 6 Z" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="0.8" />
    <circle cx="30" cy="6" r="1.5" fill="#EBF4FF" />
    {/* Sparkle */}
    <path d="M30 1 L30.5 4 L33.5 4.5 L30.5 5 L30 8 L29.5 5 L26.5 4.5 L29.5 4 Z" fill="#FFEAA7" opacity="0.9" />
  </svg>
);

// Tasteful Bride & Groom Cameo Emblem
export const BrideGroomEmblem: React.FC<{ className?: string }> = ({ className = "my-2" }) => (
  <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sage-50/90 border border-gold-300/60 shadow-sm ${className}`}>
    <span className="text-base select-none" role="img" aria-label="Groom">🤵🏻</span>
    <WeddingRings size={22} className="text-gold-500" />
    <span className="text-base select-none" role="img" aria-label="Bride">👰🏻‍♀️</span>
    <span className="text-[11px] font-cinzel tracking-wider text-sage-900 uppercase font-semibold ml-1">
      Holy Matrimony
    </span>
  </div>
);

// Elegant Gold Botanical Divider with central floral crest & cross
export const GoldDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center space-x-3 ${className}`}>
    <div className="h-[1px] w-14 sm:w-28 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059] opacity-70" />
    <div className="flex items-center space-x-1.5 text-[#C5A059]">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3C8 8 3 12 3 12C8 12 12 16 12 21C12 16 16 12 21 12C16 12 12 8 12 3Z" fill="#C5A059" fillOpacity="0.25" />
      </svg>
      <circle cx="2" cy="2" r="1.5" className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
    </div>
    <div className="h-[1px] w-14 sm:w-28 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059] opacity-70" />
  </div>
);

// Delicate White Rose & Olive Botanical Garland Spray
export const BotanicalGarland: React.FC<{ className?: string }> = ({ className = "w-full max-w-md mx-auto my-3" }) => (
  <div className={`flex items-center justify-center pointer-events-none select-none ${className}`}>
    <svg viewBox="0 0 320 30" fill="none" className="w-full h-auto">
      {/* Center White Rose Blossom */}
      <circle cx="160" cy="15" r="7" fill="#FFFDF8" stroke="#D4AF37" strokeWidth="1" />
      <path d="M157 13 C 158 10, 162 10, 163 13 C 165 14, 164 18, 160 19 C 156 18, 155 14, 157 13 Z" fill="#F8F3E6" stroke="#C5A059" strokeWidth="0.8" />
      <circle cx="160" cy="15" r="2" fill="#D4AF37" />

      {/* Left Olive Branch with Leaves */}
      <path d="M152 15 C 130 15, 90 12, 40 18" stroke="#8DA88C" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M136 12 C 132 7, 124 9, 126 14 C 129 17, 137 15, 136 12 Z" fill="#6E8B6D" fillOpacity="0.75" />
      <path d="M112 16 C 108 21, 100 19, 102 14 C 105 11, 113 13, 112 16 Z" fill="#567155" fillOpacity="0.75" />
      <path d="M88 12 C 84 8, 76 10, 78 15 C 81 18, 89 16, 88 12 Z" fill="#6E8B6D" fillOpacity="0.75" />
      <circle cx="145" cy="11" r="1.8" fill="#D4AF37" />
      <circle cx="98" cy="10" r="1.8" fill="#D4AF37" />
      <circle cx="60" cy="16" r="1.5" fill="#FAF8F2" stroke="#D4AF37" strokeWidth="0.8" />

      {/* Right Olive Branch with Leaves */}
      <path d="M168 15 C 190 15, 230 12, 280 18" stroke="#8DA88C" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M184 12 C 188 7, 196 9, 194 14 C 191 17, 183 15, 184 12 Z" fill="#6E8B6D" fillOpacity="0.75" />
      <path d="M208 16 C 212 21, 220 19, 218 14 C 215 11, 207 13, 208 16 Z" fill="#567155" fillOpacity="0.75" />
      <path d="M232 12 C 236 8, 244 10, 242 15 C 239 18, 231 16, 232 12 Z" fill="#6E8B6D" fillOpacity="0.75" />
      <circle cx="175" cy="11" r="1.8" fill="#D4AF37" />
      <circle cx="222" cy="10" r="1.8" fill="#D4AF37" />
      <circle cx="260" cy="16" r="1.5" fill="#FAF8F2" stroke="#D4AF37" strokeWidth="0.8" />
    </svg>
  </div>
);

// Botanical Corner Ornament for luxury card frames
export const BotanicalCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = "w-14 h-14 text-gold-500 opacity-60" }) => {
  const transforms = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]',
  };

  return (
    <div className={`absolute pointer-events-none select-none ${className} ${transforms[position]}`}>
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        {/* Corner vine */}
        <path d="M5 95 C 10 40, 40 10, 95 5" stroke="#C5A059" strokeWidth="1.5" />
        <path d="M15 95 C 20 50, 50 20, 95 15" stroke="#C5A059" strokeWidth="0.8" strokeDasharray="3 3" />
        {/* Olive Leaves */}
        <path d="M22 68 C 12 60, 16 48, 28 55 C 28 55, 30 65, 22 68 Z" fill="#6E8B6D" fillOpacity="0.35" stroke="#C5A059" />
        <path d="M42 42 C 34 30, 44 22, 52 32 C 52 32, 50 42, 42 42 Z" fill="#6E8B6D" fillOpacity="0.35" stroke="#C5A059" />
        <path d="M68 22 C 60 12, 72 16, 75 28 C 75 28, 65 30, 68 22 Z" fill="#6E8B6D" fillOpacity="0.35" stroke="#C5A059" />
        {/* White Rosebud Details */}
        <circle cx="32" cy="48" r="3" fill="#FFFDF9" stroke="#C5A059" strokeWidth="0.8" />
        <circle cx="58" cy="28" r="3" fill="#FFFDF9" stroke="#C5A059" strokeWidth="0.8" />
        <circle cx="82" cy="12" r="3.5" fill="#FAF8F2" stroke="#C5A059" strokeWidth="1" />
        <circle cx="12" cy="82" r="3.5" fill="#FAF8F2" stroke="#C5A059" strokeWidth="1" />
      </svg>
    </div>
  );
};

// Wax Seal Component with embossed monogram & rings
export const WaxSeal: React.FC<{
  monogram?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}> = ({ monogram = "P & A", onClick, className = "", label = "Tap to Open" }) => (
  <button
    onClick={onClick}
    type="button"
    aria-label={label}
    className={`group relative flex flex-col items-center justify-center focus:outline-none cursor-pointer select-none transition-transform active:scale-95 ${className}`}
  >
    {/* Ambient Glow */}
    <div className="absolute inset-0 rounded-full bg-[#D4AF37] opacity-25 blur-xl group-hover:opacity-50 transition-opacity" />

    {/* Realistic Wax Seal Body */}
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#A8812D] via-[#D4AF37] to-[#7A5B18] p-1.5 shadow-2xl animate-wax-pulse border border-[#F5E6BA]/40">
      {/* Wax wavy edge rim */}
      <div className="w-full h-full rounded-full border-2 border-dashed border-[#F3E5AB]/60 flex items-center justify-center bg-gradient-to-tr from-[#97742D] via-[#C5A059] to-[#D4AF37] shadow-inner">
        <div className="w-[82%] h-[82%] rounded-full border border-[#FAF6EE]/50 flex flex-col items-center justify-center text-center p-1 shadow-inner bg-[#B38E46]/90">
          <span className="font-serif text-[9px] tracking-widest text-[#FAF8F2] uppercase opacity-85">
            Holy Matrimony
          </span>
          <span className="font-script text-2xl sm:text-3xl text-white font-bold drop-shadow-md my-[-2px]">
            {monogram}
          </span>
          <div className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF8F2] opacity-80" />
            <span className="text-[9px] tracking-wider font-cinzel text-[#FAF8F2] font-semibold">2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF8F2] opacity-80" />
          </div>
        </div>
      </div>
    </div>

    {/* Floating prompt label */}
    {label && (
      <span className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full bg-white/95 text-sage-900 border border-[#C5A059]/40 text-xs tracking-widest uppercase font-cinzel font-medium shadow-md group-hover:bg-[#435842] group-hover:text-white transition-colors duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mr-2 animate-ping" />
        {label}
      </span>
    )}
  </button>
);
