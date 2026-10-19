import { useState } from 'react';
import { ChristianCross, BotanicalCorner, GoldDivider, WeddingRings, BotanicalGarland } from './BotanicalOrnaments';
import { weddingConfig } from '../weddingConfig';
import { ArrowUp, Copy, Check, MessageCircle } from 'lucide-react';

export const FinalBlessingFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleShareWhatsApp = () => {
    const url = window.location.href;
    const shareText = encodeURIComponent(
      `🕊️ *Wedding Invitation*\n\n` +
      `We cordially invite you and your family to celebrate the Holy Matrimony of\n` +
      `*${weddingConfig.couple.groom.fullName} & ${weddingConfig.couple.bride.fullName}*\n\n` +
      `📅 *Date:* Thursday, 12th November 2026 (9:30 AM)\n` +
      `⛪ *Church:* C.S.I Church Matteepuram, Venniyoor\n` +
      `🎉 *Reception:* Neelakeshi Auditorium, Venganoor\n\n` +
      `Tap here to view the full wedding invitation & directions:\n${url}`
    );
    window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 px-4 sm:px-6 bg-gradient-to-b from-[#FAF8F2] to-[#263325] text-white overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Main Final Blessing Paper Card */}
        <div className="rounded-3xl bg-[#344533] p-8 sm:p-14 border border-[#C5A059]/40 text-center relative shadow-2xl mb-12">
          
          {/* Inner hairline */}
          <div className="absolute inset-3 rounded-2xl border border-[#C5A059]/20 pointer-events-none" />

          {/* Botanical Corners */}
          <BotanicalCorner position="top-left" className="w-14 h-14 text-gold-400 opacity-50 top-2 left-2" />
          <BotanicalCorner position="top-right" className="w-14 h-14 text-gold-400 opacity-50 top-2 right-2" />
          <BotanicalCorner position="bottom-left" className="w-14 h-14 text-gold-400 opacity-50 bottom-2 left-2" />
          <BotanicalCorner position="bottom-right" className="w-14 h-14 text-gold-400 opacity-50 bottom-2 right-2" />

          {/* Cross & Title */}
          <div className="flex justify-center mb-4">
            <ChristianCross size={34} />
          </div>

          <p className="font-cinzel text-xs tracking-[0.25em] text-gold-300 uppercase mb-2">
            In Christ&apos;s Endless Grace
          </p>

          <h3 className="font-serif text-3xl sm:text-5xl text-[#FAF8F2] font-normal max-w-xl mx-auto leading-tight">
            Your presence and blessings would mean the world to us.
          </h3>

          <GoldDivider className="my-6 opacity-70" />

          <p className="font-serif italic text-base sm:text-lg text-[#D0DDD0] mb-2">
            With love, prayers, &amp; joyful anticipation,
          </p>

          <div className="flex items-center justify-center space-x-2 my-2">
            <WeddingRings size={20} className="text-gold-300 opacity-80" />
            <p className="font-script text-5xl sm:text-6xl text-gold-300">
              {weddingConfig.couple.groom.firstName} <span className="text-white font-serif text-3xl sm:text-4xl">&amp;</span> {weddingConfig.couple.bride.firstName}
            </p>
            <WeddingRings size={20} className="text-gold-300 opacity-80" />
          </div>

          <BotanicalGarland className="w-full max-w-xs mx-auto my-2 opacity-70" />

          <p className="font-cinzel text-xs text-[#E6EDE5]/80 tracking-widest uppercase mt-2">
            Sharing Happiness: {weddingConfig.couple.sharingHappiness}
          </p>

          {/* Share Invitation Actions */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleShareWhatsApp}
              type="button"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-cinzel text-xs font-semibold tracking-wider transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share on WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              type="button"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-cinzel text-xs tracking-wider border border-white/20 transition-all shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-gold-300" />
                  <span className="text-gold-300">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gold-300" />
                  <span>Copy Invitation Link</span>
                </>
              )}
            </button>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-cinzel text-xs tracking-wider transition-all"
              title="Return to top of page"
            >
              <ArrowUp className="w-4 h-4 text-gold-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Footer Subtext */}
        <div className="text-center text-xs font-serif text-[#D0DDD0]/70 space-y-1">
          <p>
            The Holy Matrimony of Prince V.S &amp; Anju J.S • 12th November 2026
          </p>
          <p className="font-sans text-[11px] opacity-60">
            C.S.I Church Matteepuram, Venniyoor &amp; Neelakeshi Auditorium, Venganoor
          </p>
        </div>

      </div>

    </footer>
  );
};
