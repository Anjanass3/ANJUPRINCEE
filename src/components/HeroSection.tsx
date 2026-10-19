import type React from 'react';
import { ChristianCross, BotanicalCorner, GoldDivider, WeddingRings, BrideGroomEmblem, BotanicalGarland } from './BotanicalOrnaments';
import { weddingConfig } from '../weddingConfig';
import { Calendar, Clock, MapPin, ChevronDown, Church } from 'lucide-react';

interface HeroSectionProps {
  currentLang: 'en' | 'ml';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  return (
    <section id="top" className="relative pt-24 sm:pt-28 pb-16 px-4 sm:px-6 overflow-hidden paper-texture">
      {/* Decorative background foliage watermarks */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-sage-200/30 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-200/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Main Editorial Invitation Frame */}
        <div className="paper-card rounded-3xl p-6 sm:p-12 md:p-16 border-2 border-[#C5A059]/35 relative overflow-hidden shadow-paper-lg">
          
          {/* Ornate Gold Border Inset with scalloped corners */}
          <div className="absolute inset-2 sm:inset-4 rounded-2xl border border-[#C5A059]/25 pointer-events-none" />
          <div className="absolute inset-3 sm:inset-5 rounded-xl border border-dashed border-[#C5A059]/20 pointer-events-none" />

          {/* Botanical Corners */}
          <BotanicalCorner position="top-left" className="w-16 sm:w-24 h-16 sm:h-24 top-2 left-2" />
          <BotanicalCorner position="top-right" className="w-16 sm:w-24 h-16 sm:h-24 top-2 right-2" />
          <BotanicalCorner position="bottom-left" className="w-16 sm:w-24 h-16 sm:h-24 bottom-2 left-2" />
          <BotanicalCorner position="bottom-right" className="w-16 sm:w-24 h-16 sm:h-24 bottom-2 right-2" />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            
            {/* Sacred Cross with Gentle Glow */}
            <div className="flex justify-center mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-300/30 blur-lg rounded-full" />
                <ChristianCross size={38} />
              </div>
            </div>

            {/* Tasteful Bride & Groom Cameo */}
            <div className="flex justify-center mb-4">
              <BrideGroomEmblem />
            </div>

            {/* Scripture Badge */}
            <div className="mb-4">
              <p className="font-serif italic text-sage-800 text-sm sm:text-base tracking-wide max-w-xl mx-auto">
                &ldquo;{weddingConfig.scripture.verse}&rdquo;
              </p>
              <p className="font-cinzel text-xs tracking-widest text-gold-600 uppercase mt-1 flex items-center justify-center space-x-1.5">
                <span>✦</span>
                <span>{weddingConfig.scripture.reference}</span>
                <span>✦</span>
              </p>
            </div>

            <GoldDivider className="my-4" />

            {/* Header wording */}
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-sage-700 uppercase mb-2 font-medium">
              {currentLang === 'en'
                ? "Together with our families"
                : "കുടുംബാംഗങ്ങളുടെ സ്നേഹാശിസ്സുകളോടെ"}
            </p>
            <p className="font-serif italic text-base sm:text-lg text-sage-900 mb-6">
              {currentLang === 'en'
                ? "We joyfully invite you to celebrate the Holy Matrimony of"
                : "ഞങ്ങളുടെ വിശുദ്ധ വിവാഹ മംഗളകർമ്മങ്ങളിലേക്ക് സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു"}
            </p>

            {/* Couple's Names in Refined Script Typography */}
            <div className="py-2">
              <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-sage-900 leading-tight tracking-wide drop-shadow-sm">
                <span>{weddingConfig.couple.groom.firstName}</span>
                <span className="text-gold-500 font-serif mx-3 sm:mx-5 font-normal text-3xl sm:text-5xl">&amp;</span>
                <span>{weddingConfig.couple.bride.firstName}</span>
              </h1>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <WeddingRings size={20} className="text-gold-500 opacity-80" />
                <p className="font-cinzel text-xs sm:text-sm tracking-widest text-gold-700 uppercase">
                  {weddingConfig.couple.groom.fullName} &amp; {weddingConfig.couple.bride.fullName}
                </p>
                <WeddingRings size={20} className="text-gold-500 opacity-80" />
              </div>
            </div>

            {/* Delicate White Rose Garland below names */}
            <BotanicalGarland className="w-full max-w-sm mx-auto my-3" />

            {/* Couple Real Photo Editorial Presentation with Floral Frame */}
            <div className="my-8 sm:my-10 relative max-w-md sm:max-w-lg mx-auto">
              
              {/* Outer Decorative Matting with gold foil and olive leaves */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-sage-100 via-ivory to-gold-100 border border-gold-300/50 shadow-inner -z-0 transform rotate-1" />
              
              {/* Botanical decorative corner dots */}
              <div className="absolute -top-3 -left-3 text-gold-500 text-lg z-20">🕊️</div>
              <div className="absolute -top-3 -right-3 text-gold-500 text-lg z-20">✨</div>

              {/* Actual Couple Photo Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={weddingConfig.couple.photo}
                  alt={`${weddingConfig.couple.groom.fullName} and ${weddingConfig.couple.bride.fullName}`}
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle photo vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60" />

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-3 left-4 right-4 text-center">
                  <span className="font-script text-2xl sm:text-3xl text-white drop-shadow-md">
                    Prince &amp; Anju
                  </span>
                  <p className="text-[10px] tracking-widest font-cinzel text-[#F5E6BA] uppercase flex items-center justify-center space-x-1.5 mt-0.5">
                    <span>🤍</span>
                    <span>United in Faith &amp; Love</span>
                    <span>🤍</span>
                  </p>
                </div>
              </div>

              {/* Little gold ribbon badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-sage-800 text-[#FAF8F2] border border-[#D4AF37] shadow-lg flex items-center space-x-2 text-xs font-cinzel">
                <WeddingRings size={18} className="text-gold-300" />
                <span className="tracking-wider uppercase">Save The Date</span>
              </div>
            </div>

            {/* Ceremony Date & Location Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mt-10 text-sage-900">
              
              <div className="p-3.5 rounded-2xl bg-sage-50/90 border border-sage-200/80 flex items-center justify-center space-x-2.5 shadow-sm">
                <Calendar className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-cinzel text-sage-600 tracking-wider font-semibold">Wedding Date</p>
                  <p className="font-serif font-semibold text-sm sm:text-base">Thursday, Nov 12, 2026</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-sage-50/90 border border-sage-200/80 flex items-center justify-center space-x-2.5 shadow-sm">
                <Clock className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-cinzel text-sage-600 tracking-wider font-semibold">Service Time</p>
                  <p className="font-serif font-semibold text-sm sm:text-base">9:30 AM IST</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-sage-50/90 border border-sage-200/80 flex items-center justify-center space-x-2.5 shadow-sm">
                <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-cinzel text-sage-600 tracking-wider font-semibold">Church</p>
                  <p className="font-serif font-semibold text-xs sm:text-sm leading-tight">C.S.I Matteepuram</p>
                </div>
              </div>

            </div>

            {/* Clean Quick CTAs (Preserving working navigation without RSVP) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#invitation"
                className="px-6 py-2.5 rounded-full bg-sage-800 text-white hover:bg-sage-900 transition-colors font-cinzel text-xs tracking-widest uppercase shadow-md flex items-center space-x-2 group"
              >
                <span>Read Formal Invitation</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#events"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 transition-colors font-cinzel text-xs tracking-widest uppercase shadow-md flex items-center space-x-2"
              >
                <Church className="w-3.5 h-3.5" />
                <span>Ceremony &amp; Reception Schedule</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
