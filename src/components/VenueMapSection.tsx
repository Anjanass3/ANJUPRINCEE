import { useState } from 'react';
import { GoldDivider, BotanicalCorner } from './BotanicalOrnaments';
import { weddingConfig } from '../weddingConfig';
import { MapPin, Navigation, Church, PartyPopper, Copy, Check } from 'lucide-react';

export const VenueMapSection: React.FC = () => {
  const [activeVenue, setActiveVenue] = useState<'church' | 'reception'>('church');
  const [copied, setCopied] = useState<string | null>(null);

  const church = weddingConfig.events.ceremony;
  const reception = weddingConfig.events.reception;

  const currentEvent = activeVenue === 'church' ? church : reception;

  // Real Google Maps embed URL
  const embedQuery = activeVenue === 'church'
    ? 'C.S.I+Church+Matteepuram+Venniyoor+Kerala'
    : 'Neelakeshi+Auditorium+Venganoor+Kerala';

  const mapEmbedUrl = `https://maps.google.com/maps?q=${embedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = (address: string, id: string) => {
    navigator.clipboard.writeText(address);
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="venues" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#FAF8F2] via-sage-50/40 to-[#FAF8F2]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="font-cinzel text-xs tracking-[0.25em] text-gold-600 uppercase font-semibold">
            Wayfinding &amp; Venues
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-sage-900 mt-2 font-normal">
            Location &amp; Directions
          </h2>
          <p className="font-serif italic text-sage-700 text-sm sm:text-base max-w-md mx-auto mt-2">
            Easily navigate to both venues in Thiruvananthapuram, Kerala.
          </p>
          <GoldDivider className="my-4" />
        </div>

        {/* Venue Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-white p-1.5 border border-[#C5A059]/30 shadow-md">
            
            <button
              onClick={() => setActiveVenue('church')}
              type="button"
              className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                activeVenue === 'church'
                  ? 'bg-sage-800 text-white shadow-sm font-semibold'
                  : 'text-sage-800 hover:text-gold-600'
              }`}
            >
              <Church className="w-4 h-4 text-gold-400" />
              <span>Church Ceremony</span>
            </button>

            <button
              onClick={() => setActiveVenue('reception')}
              type="button"
              className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                activeVenue === 'reception'
                  ? 'bg-sage-800 text-white shadow-sm font-semibold'
                  : 'text-sage-800 hover:text-gold-600'
              }`}
            >
              <PartyPopper className="w-4 h-4 text-gold-400" />
              <span>Reception Hall</span>
            </button>

          </div>
        </div>

        {/* Venue Information and Map Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 paper-card rounded-3xl p-6 sm:p-8 border border-[#C5A059]/30 flex flex-col justify-between shadow-paper relative overflow-hidden">
            <BotanicalCorner position="top-right" className="w-12 h-12 text-gold-400 opacity-40 top-2 right-2" />
            <BotanicalCorner position="bottom-left" className="w-12 h-12 text-gold-400 opacity-40 bottom-2 left-2" />
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-[10px] font-cinzel uppercase tracking-wider mb-4">
                <MapPin className="w-3 h-3 text-gold-600" />
                <span>{activeVenue === 'church' ? 'Solemnization Venue' : 'Reception Venue'}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-sage-900 font-semibold mb-2">
                {currentEvent.venueName}
              </h3>

              <p className="font-serif text-sm sm:text-base text-sage-800 mb-6 leading-relaxed">
                {currentEvent.address}
              </p>

              <div className="p-4 rounded-xl bg-sage-50 border border-sage-200/60 mb-6 space-y-2">
                <p className="text-xs font-cinzel text-gold-700 uppercase font-semibold">
                  Event Schedule
                </p>
                <p className="font-serif text-sm text-sage-900 font-medium">
                  {currentEvent.displayDate} ({currentEvent.day})
                </p>
                <p className="font-serif text-xs text-sage-700">
                  Time: {currentEvent.time}
                </p>
              </div>

              {currentEvent.notes && (
                <p className="font-serif italic text-xs text-sage-600 mb-6">
                  Note: {currentEvent.notes}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-4 border-t border-sage-100">
              <a
                href={currentEvent.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-cinzel text-xs font-bold tracking-wider transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps App</span>
              </a>

              <button
                onClick={() => handleCopyAddress(`${currentEvent.venueName}, ${currentEvent.address}`, activeVenue)}
                type="button"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full bg-white border border-sage-300 text-sage-800 font-cinzel text-xs tracking-wider hover:bg-sage-50 transition-colors"
              >
                {copied === activeVenue ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-sage-600" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Embedded Map (7 cols) */}
          <div className="lg:col-span-7 paper-card rounded-3xl overflow-hidden border border-[#C5A059]/30 min-h-[380px] sm:min-h-[440px] shadow-paper flex flex-col">
            <div className="p-3 bg-sage-800 text-white text-xs font-cinzel tracking-wider flex items-center justify-between px-4">
              <span>Google Maps Live Location</span>
              <span className="text-gold-300">{currentEvent.venueName}</span>
            </div>
            <div className="flex-1 w-full h-full relative">
              <iframe
                title={`Map of ${currentEvent.venueName}`}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
