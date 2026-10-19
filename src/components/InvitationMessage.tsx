import { useState } from 'react';
import { ChristianCross, BotanicalCorner, GoldDivider, WeddingRings, BotanicalGarland } from './BotanicalOrnaments';
import { weddingConfig } from '../weddingConfig';
import { Phone, Eye, BookOpen } from 'lucide-react';

interface InvitationMessageProps {
  currentLang: 'en' | 'ml';
  onToggleLang: () => void;
}

export const InvitationMessage: React.FC<InvitationMessageProps> = ({ currentLang, onToggleLang }) => {
  const [showCardModal, setShowCardModal] = useState(false);

  return (
    <section id="invitation" className="py-16 sm:py-24 px-4 sm:px-6 relative paper-texture">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="font-cinzel text-xs tracking-[0.25em] text-gold-600 uppercase font-semibold">
            Sacred Vows &amp; Blessings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-sage-900 mt-2 font-normal">
            Formal Wedding Invitation
          </h2>
          <GoldDivider className="my-4" />
        </div>

        {/* Language Tabs & Original Card Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-2">
          
          <div className="inline-flex rounded-full bg-sage-100 p-1 border border-sage-200">
            <button
              onClick={() => currentLang !== 'en' && onToggleLang()}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-cinzel transition-all ${
                currentLang === 'en'
                  ? 'bg-sage-800 text-white shadow-sm font-semibold'
                  : 'text-sage-800 hover:text-sage-900'
              }`}
            >
              English Invitation
            </button>
            <button
              onClick={() => currentLang !== 'ml' && onToggleLang()}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-cinzel transition-all ${
                currentLang === 'ml'
                  ? 'bg-sage-800 text-white shadow-sm font-semibold'
                  : 'text-sage-800 hover:text-sage-900'
              }`}
            >
              മലയാളം ക്ഷണക്കത്ത്
            </button>
          </div>

          <button
            onClick={() => setShowCardModal(true)}
            type="button"
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gold-400/60 text-gold-800 text-xs font-cinzel hover:bg-gold-50 shadow-sm transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-gold-600" />
            <span>View Printed Card Photo</span>
          </button>
        </div>

        {/* The Luxury Invitation Card Document */}
        <div className="paper-card rounded-3xl p-6 sm:p-12 md:p-16 border-2 border-[#C5A059]/30 relative shadow-paper-lg">
          
          {/* Subtle linen texture overlay */}
          <div className="absolute inset-2 sm:inset-4 rounded-2xl border border-[#C5A059]/25 pointer-events-none" />
          <div className="absolute inset-3 sm:inset-5 rounded-xl border border-dashed border-[#C5A059]/20 pointer-events-none" />

          {/* Botanical Corners */}
          <BotanicalCorner position="top-left" className="w-16 h-16 top-3 left-3" />
          <BotanicalCorner position="top-right" className="w-16 h-16 top-3 right-3" />
          <BotanicalCorner position="bottom-left" className="w-16 h-16 bottom-3 left-3" />
          <BotanicalCorner position="bottom-right" className="w-16 h-16 bottom-3 right-3" />

          {/* Top Cross & Card Title */}
          <div className="text-center mb-8">
            <ChristianCross size={34} />
            <h3 className="font-script text-4xl sm:text-5xl text-gold-700 mt-2 font-normal">
              {currentLang === 'en' ? "Wedding Invitation" : "വിവാഹ ക്ഷണക്കത്ത്"}
            </h3>
            <p className="font-cinzel text-xs tracking-widest text-sage-600 uppercase mt-1">
              Holy Matrimony in Christ
            </p>
          </div>

          {currentLang === 'en' ? (
            /* English Formal Invitation */
            <div className="space-y-8 text-center max-w-2xl mx-auto text-sage-900">
              
              {/* Bride's Parents Block */}
              <div className="p-4 sm:p-6 rounded-2xl bg-sage-50/70 border border-sage-200/50">
                <p className="font-serif text-lg sm:text-xl font-semibold text-sage-900">
                  {weddingConfig.couple.bride.parents}
                </p>
                <p className="font-serif text-sm text-sage-700 mt-0.5">
                  {weddingConfig.couple.bride.residence}
                </p>
                {weddingConfig.couple.bride.phone && (
                  <p className="font-sans text-xs text-sage-600 mt-1 flex items-center justify-center space-x-1">
                    <Phone className="w-3 h-3 text-gold-600" />
                    <span>Ph: {weddingConfig.couple.bride.phone}</span>
                  </p>
                )}
              </div>

              {/* Cordial Invitation Text */}
              <div className="py-2">
                <p className="font-serif text-base sm:text-lg leading-relaxed text-sage-800 italic">
                  &ldquo;We cordially invite your esteemed presence and blessings with family on the auspicious occasion of the marriage of our daughter&rdquo;
                </p>
              </div>

              {/* Couple's Featured Names */}
              <div className="my-6 py-4 border-y border-[#C5A059]/30 relative">
                <BotanicalGarland className="w-full max-w-xs mx-auto mb-2 opacity-80" />
                <h4 className="font-script text-5xl sm:text-6xl text-sage-900">
                  {weddingConfig.couple.bride.fullName}
                </h4>
                <div className="flex items-center justify-center space-x-2 my-1.5">
                  <span className="w-8 h-[1px] bg-gold-400/50" />
                  <WeddingRings size={20} className="text-gold-500" />
                  <span className="font-serif italic text-gold-600 text-lg px-1">with</span>
                  <WeddingRings size={20} className="text-gold-500" />
                  <span className="w-8 h-[1px] bg-gold-400/50" />
                </div>
                <h4 className="font-script text-5xl sm:text-6xl text-sage-900">
                  {weddingConfig.couple.groom.fullName}
                </h4>
                <BotanicalGarland className="w-full max-w-xs mx-auto mt-2 opacity-80" />
              </div>

              {/* Groom's Parents Block */}
              <div className="p-4 sm:p-6 rounded-2xl bg-sage-50/70 border border-sage-200/50">
                <p className="font-serif text-sm text-sage-600 uppercase tracking-wider mb-1 font-cinzel">
                  Son of
                </p>
                <p className="font-serif text-lg sm:text-xl font-semibold text-sage-900">
                  {weddingConfig.couple.groom.parents}
                </p>
                <p className="font-serif text-sm text-sage-700 mt-0.5">
                  {weddingConfig.couple.groom.residence}
                </p>
              </div>

              {/* Solemnization Summary */}
              <div className="p-5 rounded-2xl bg-ivory border border-gold-300/40 text-left sm:text-center">
                <p className="font-cinzel text-xs uppercase tracking-widest text-gold-700 font-semibold mb-2 text-center">
                  Solemnization of Holy Matrimony
                </p>
                <p className="font-serif text-base sm:text-lg text-sage-900 text-center font-medium">
                  Thursday, 12th November 2026 at 9:30 AM
                </p>
                <p className="font-serif text-sm text-sage-700 text-center mt-1">
                  at <span className="font-semibold text-sage-900">C.S.I Venniyoor Matteepuram</span>
                </p>
                <p className="font-serif italic text-xs sm:text-sm text-sage-600 text-center mt-2">
                  and for the subsequent reception &amp; luncheon at <span className="font-semibold">Venganoor Neelakeshi Auditorium</span>
                </p>
              </div>

              {/* Sharing Happiness */}
              <div className="pt-4 text-center">
                <p className="font-cinzel text-xs text-gold-700 uppercase tracking-widest">
                  Sharing Happiness
                </p>
                <p className="font-serif text-base text-sage-900 font-semibold mt-1">
                  {weddingConfig.couple.sharingHappiness}
                </p>
              </div>

            </div>
          ) : (
            /* Malayalam Formal Invitation */
            <div className="space-y-6 text-center max-w-2xl mx-auto text-sage-900 font-malayalam">
              
              {/* Parents of Bride */}
              <div className="p-4 sm:p-6 rounded-2xl bg-sage-50/70 border border-sage-200/50">
                <p className="text-base sm:text-lg font-semibold text-sage-900 whitespace-pre-line leading-relaxed">
                  {weddingConfig.invitationMessage.malayalamParentsBride}
                </p>
              </div>

              {/* Invitation Text */}
              <div className="py-2">
                <p className="text-sm sm:text-base leading-relaxed text-sage-800">
                  ദൈവകൃപയാൽ ഞങ്ങളുടെ മകൾ
                </p>
                <h4 className="font-script text-4xl sm:text-5xl text-sage-900 my-2 font-serif">
                  {weddingConfig.couple.bride.fullName}
                </h4>
                <div className="flex items-center justify-center space-x-2 my-1">
                  <span className="w-8 h-[1px] bg-gold-400/50" />
                  <WeddingRings size={18} className="text-gold-500" />
                  <span className="text-sm text-sage-600 font-serif px-1">ഉം</span>
                  <WeddingRings size={18} className="text-gold-500" />
                  <span className="w-8 h-[1px] bg-gold-400/50" />
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-sage-800 mt-2">
                  {weddingConfig.invitationMessage.malayalamParentsGroom}
                </p>
                <h4 className="font-script text-4xl sm:text-5xl text-sage-900 my-2 font-serif">
                  {weddingConfig.couple.groom.fullName}
                </h4>
                <p className="text-sm text-sage-600 font-serif mt-1">ഉം തമ്മിൽ</p>
              </div>

              {/* Solemnization details in Malayalam */}
              <div className="p-5 rounded-2xl bg-ivory border border-gold-300/40 text-center">
                <p className="text-sm sm:text-base text-sage-900 leading-loose">
                  {weddingConfig.invitationMessage.malayalamBody}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sage-100/70 text-sage-900 text-sm">
                <p className="font-semibold text-gold-800 mb-1">വിവാഹ സൽക്കാരം:</p>
                <p>{weddingConfig.invitationMessage.malayalamReception}</p>
              </div>

              {/* Sharing happiness in Malayalam */}
              <div className="pt-2 text-center">
                <p className="text-sm text-sage-700">
                  {weddingConfig.invitationMessage.malayalamSharingHappiness}
                </p>
              </div>

            </div>
          )}

          {/* Bottom Card Seal */}
          <div className="mt-10 flex flex-col items-center justify-center">
            <GoldDivider className="my-2" />
            <p className="font-serif italic text-xs text-sage-600">
              Solus Christus • Grace &amp; Truth
            </p>
          </div>

        </div>

      </div>

      {/* Modal for viewing original physical card photo */}
      {showCardModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowCardModal(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl p-4 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-gold-600" />
                <h4 className="font-serif text-lg font-semibold text-sage-900">
                  Original Printed Wedding Invitation
                </h4>
              </div>
              <button
                onClick={() => setShowCardModal(false)}
                type="button"
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="py-4 text-center">
              <img
                src={weddingConfig.couple.cardReferencePhoto}
                alt="Original Wedding Invitation Card"
                className="w-full max-h-[70vh] object-contain mx-auto rounded-lg shadow-md border"
              />
              <p className="font-serif text-xs text-sage-700 italic mt-3">
                The authentic printed wedding card of Prince V.S &amp; Anju J.S
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
