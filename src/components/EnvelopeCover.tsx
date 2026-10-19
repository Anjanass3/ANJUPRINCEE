import { useState } from 'react';
import confetti from 'canvas-confetti';
import { ChristianCross, BotanicalCorner, WaxSeal, GoldDivider, WeddingRings, BotanicalGarland } from './BotanicalOrnaments';
import { weddingConfig } from '../weddingConfig';
import { Sparkles } from 'lucide-react';

interface EnvelopeCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({ isOpen, onOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen || isAnimating) return;
    setIsAnimating(true);

    // Fire elegant champagne & sage confetti
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#FAF8F2', '#8DA88C', '#F5E6BA', '#567155'],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      onOpen();
      setIsAnimating(false);
    }, 1100);
  };

  return (
    <div
      className={`relative w-full min-h-screen flex items-center justify-center p-4 sm:p-6 transition-all duration-1000 ${
        isOpen ? 'pointer-events-none opacity-0 h-0 overflow-hidden' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 40%, #435842 0%, #2D392B 65%, #1F281E 100%)',
      }}
    >
      {/* Background botanical watermark pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E4CD7A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Main Luxury Envelope Container */}
      <div className="relative w-full max-w-lg sm:max-w-xl mx-auto z-10">
        
        {/* Envelope Outer Card with 3D perspective */}
        <div
          className={`relative rounded-2xl bg-gradient-to-b from-[#3D4F3C] to-[#2E3C2D] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(15,22,15,0.7)] border border-[#C5A059]/40 transition-all duration-1000 transform ${
            isAnimating ? 'scale-105 opacity-90' : 'scale-100'
          }`}
        >
          {/* Ornate Gold Frame inside envelope */}
          <div className="absolute inset-3 rounded-xl border border-[#C5A059]/30 pointer-events-none" />
          <div className="absolute inset-4 rounded-lg border border-[#C5A059]/15 pointer-events-none" />

          {/* Botanical Corners */}
          <BotanicalCorner position="top-left" className="w-16 h-16 text-gold-400 opacity-60 top-2 left-2" />
          <BotanicalCorner position="top-right" className="w-16 h-16 text-gold-400 opacity-60 top-2 right-2" />
          <BotanicalCorner position="bottom-left" className="w-16 h-16 text-gold-400 opacity-60 bottom-2 left-2" />
          <BotanicalCorner position="bottom-right" className="w-16 h-16 text-gold-400 opacity-60 bottom-2 right-2" />

          {/* Top Envelope Flap Visual Fold */}
          <div className="flex flex-col items-center text-center">
            
            {/* Christian Cross */}
            <div className="mb-3 animate-float">
              <ChristianCross size={34} />
            </div>

            <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#E6CA85] uppercase mb-1">
              The Holy Matrimony Of
            </p>

            <h1 className="font-script text-4xl sm:text-6xl text-white font-normal tracking-wide drop-shadow-md my-2">
              {weddingConfig.couple.groom.firstName} <span className="text-[#E6CA85] font-serif text-3xl sm:text-5xl">&amp;</span> {weddingConfig.couple.bride.firstName}
            </h1>

            <p className="font-serif italic text-sm sm:text-base text-[#D0DDD0] max-w-sm mx-auto my-1">
              &ldquo;{weddingConfig.scripture.verse}&rdquo;
            </p>
            <p className="font-cinzel text-[11px] text-[#C5A059] tracking-wider mb-4">
              — {weddingConfig.scripture.reference}
            </p>

            <GoldDivider className="my-3 opacity-60" />

            {/* Event Summary Badge with Wedding Rings */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#263325]/80 border border-[#C5A059]/40 text-[#FAF8F2] text-xs font-cinzel tracking-wider my-2">
              <WeddingRings size={18} className="text-gold-300" />
              <span>Thursday, 12th November 2026</span>
            </div>

            <p className="font-serif text-xs sm:text-sm text-[#FAF8F2]/80 max-w-xs mx-auto mb-3">
              C.S.I Church Matteepuram, Venniyoor &amp; Neelakeshi Auditorium, Venganoor
            </p>

            <BotanicalGarland className="w-full max-w-xs mx-auto my-2 opacity-75" />

            {/* Central Wax Seal Button */}
            <div className="my-2">
              <WaxSeal
                monogram="P & A"
                onClick={handleOpenEnvelope}
                label={isAnimating ? "Opening Invitation..." : "Tap to Open"}
              />
            </div>

            <div className="flex items-center space-x-1.5 text-[#C5A059] text-[11px] font-cinzel mt-4 tracking-wider opacity-80">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Personal Digital Wedding Invitation</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

          </div>
        </div>

        {/* Shadow underneath envelope */}
        <div className="w-4/5 h-6 mx-auto bg-black/40 blur-xl rounded-full mt-2" />
      </div>
    </div>
  );
};
