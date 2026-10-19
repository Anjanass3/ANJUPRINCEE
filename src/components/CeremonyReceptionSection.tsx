import { ChristianCross, BotanicalCorner, GoldDivider, WeddingRings } from './BotanicalOrnaments';
import { weddingConfig, type WeddingEvent } from '../weddingConfig';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Church } from 'lucide-react';

export const CeremonyReceptionSection: React.FC = () => {
  // Utility function to download an .ics calendar file
  const downloadIcsCalendar = (event: WeddingEvent, startDateIso: string, endDateIso: string) => {
    const formatIcsDate = (dateStr: string) => dateStr.replace(/[-:]/g, '');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Prince & Anju Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${event.calendarTitle}`,
      `DESCRIPTION:${event.calendarDescription}`,
      `LOCATION:${event.venueName}, ${event.address}`,
      `DTSTART:${formatIcsDate(startDateIso)}`,
      `DTEND:${formatIcsDate(endDateIso)}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Google Calendar web intent generator
  const getGoogleCalendarUrl = (event: WeddingEvent, startUtc: string, endUtc: string) => {
    const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const text = encodeURIComponent(event.calendarTitle);
    const details = encodeURIComponent(event.calendarDescription);
    const location = encodeURIComponent(`${event.venueName}, ${event.address}`);
    return `${base}&text=${text}&dates=${startUtc}/${endUtc}&details=${details}&location=${location}`;
  };

  // Reception date: Nov 11, 2026, 4:30 PM to 8:30 PM IST (UTC+5:30 -> 11:00 to 15:00 UTC)
  const receptionStartUtc = '20261111T110000Z';
  const receptionEndUtc = '20261111T150000Z';

  // Ceremony date: Nov 12, 2026, 9:30 AM to 1:30 PM IST (UTC+5:30 -> 04:00 to 08:00 UTC)
  const ceremonyStartUtc = '20261112T040000Z';
  const ceremonyEndUtc = '20261112T080000Z';

  const { reception, ceremony } = weddingConfig.events;

  return (
    <section id="events" className="py-16 sm:py-24 px-4 sm:px-6 relative paper-texture">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="font-cinzel text-xs tracking-[0.25em] text-gold-600 uppercase font-semibold">
            Join Our Celebrations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-sage-900 mt-2 font-normal">
            Wedding Events &amp; Details
          </h2>
          <p className="font-serif italic text-sage-700 text-sm sm:text-base max-w-lg mx-auto mt-2">
            Please grace both joyful occasions with your cherished presence and prayers.
          </p>
          <GoldDivider className="my-4" />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Wedding Reception (Nov 11) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#4A5D49] to-[#344533] text-white p-7 sm:p-10 shadow-2xl border border-[#C5A059]/40 flex flex-col justify-between overflow-hidden group">
            
            {/* Subtle inner gold frame */}
            <div className="absolute inset-3 rounded-2xl border border-[#C5A059]/25 pointer-events-none" />

            {/* Botanical Corners */}
            <BotanicalCorner position="top-left" className="w-16 h-16 text-gold-400 opacity-50 top-2 left-2" />
            <BotanicalCorner position="top-right" className="w-16 h-16 text-gold-400 opacity-50 top-2 right-2" />

            <div>
              {/* Event Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF8F2]/15 border border-[#C5A059]/40 text-[#F5E6BA] font-cinzel text-[11px] tracking-widest uppercase flex items-center space-x-1.5">
                  <span role="img" aria-label="Bouquet">💐</span>
                  <span>Eve Reception</span>
                </span>
                <span className="font-serif italic text-xs text-[#E6EDE5]/80">
                  Wednesday, 11th Nov
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F2] font-normal mb-1">
                {reception.title}
              </h3>
              <p className="font-serif italic text-sm text-[#D0DDD0] mb-6">
                {reception.subTitle}
              </p>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent my-4" />

              {/* Event Info Details */}
              <div className="space-y-4 my-6">
                
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-[#C5A059]/40">
                    <Calendar className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-cinzel text-gold-300 tracking-wider">Date &amp; Day</p>
                    <p className="font-serif text-lg text-white font-medium">
                      {reception.displayDate} ({reception.day})
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-[#C5A059]/40">
                    <Clock className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-cinzel text-gold-300 tracking-wider">Time</p>
                    <p className="font-serif text-lg text-white font-medium">
                      {reception.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-[#C5A059]/40">
                    <MapPin className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-cinzel text-gold-300 tracking-wider">Venue</p>
                    <p className="font-serif text-lg text-white font-semibold">
                      {reception.venueName}
                    </p>
                    <p className="font-serif text-xs sm:text-sm text-[#D0DDD0] mt-0.5">
                      {reception.address}
                    </p>
                  </div>
                </div>

              </div>

              {reception.notes && (
                <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 text-xs font-serif italic text-[#FAF8F2]/90">
                  {reception.notes}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-2.5">
              <a
                href={reception.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-sage-950 font-cinzel text-xs font-semibold tracking-wider transition-colors shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={getGoogleCalendarUrl(reception, receptionStartUtc, receptionEndUtc)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-cinzel text-xs tracking-wider border border-white/20 transition-colors"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-gold-300" />
                <span>Google Calendar</span>
              </a>

              <button
                onClick={() => downloadIcsCalendar(reception, '20261111T163000', '20261111T203000')}
                type="button"
                className="px-3.5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-cinzel text-xs tracking-wider border border-white/15 transition-colors"
                title="Download .ics Calendar file for Apple/Outlook"
              >
                <span>.ICS</span>
              </button>
            </div>

          </div>


          {/* Card 2: Holy Matrimony & Solemnization (Nov 12) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#3D523B] to-[#263325] text-white p-7 sm:p-10 shadow-2xl border-2 border-[#D4AF37]/50 flex flex-col justify-between overflow-hidden group">
            
            {/* Crown Gold Ribbon Banner */}
            <div className="absolute top-0 right-8 transform translate-y-0 px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-600 text-sage-950 text-[10px] font-cinzel font-bold tracking-widest uppercase rounded-b-lg shadow-md flex items-center space-x-1">
              <Church className="w-3 h-3" />
              <span>Solemn Service</span>
            </div>

            {/* Subtle inner gold frame */}
            <div className="absolute inset-3 rounded-2xl border border-[#D4AF37]/30 pointer-events-none" />

            {/* Botanical Corners */}
            <BotanicalCorner position="top-left" className="w-16 h-16 text-gold-400 opacity-60 top-2 left-2" />
            <BotanicalCorner position="top-right" className="w-16 h-16 text-gold-400 opacity-60 top-2 right-2" />

            <div>
              {/* Event Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <ChristianCross size={22} />
                  <span className="font-cinzel text-xs tracking-widest text-[#F5E6BA] uppercase font-semibold">
                    Sacred Church Ceremony
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <WeddingRings size={22} className="text-gold-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F2] font-normal mb-1">
                {ceremony.title}
              </h3>
              <p className="font-serif italic text-sm text-[#D0DDD0] mb-6">
                {ceremony.subTitle}
              </p>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent my-4" />

              {/* Event Info Details */}
              <div className="space-y-4 my-6">
                
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/50">
                    <Calendar className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-cinzel text-gold-300 tracking-wider">Date &amp; Day</p>
                    <p className="font-serif text-lg text-white font-medium">
                      {ceremony.displayDate} ({ceremony.day})
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/50">
                    <Clock className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-cinzel text-gold-300 tracking-wider">Service Time</p>
                    <p className="font-serif text-lg text-white font-medium">
                      {ceremony.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/50">
                    <MapPin className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-cinzel text-gold-300 tracking-wider">Church Venue</p>
                    <p className="font-serif text-lg text-white font-semibold">
                      {ceremony.venueName}
                    </p>
                    <p className="font-serif text-xs sm:text-sm text-[#D0DDD0] mt-0.5">
                      {ceremony.address}
                    </p>
                  </div>
                </div>

              </div>

              {ceremony.notes && (
                <div className="p-3.5 rounded-xl bg-gold-900/30 border border-gold-400/30 text-xs font-serif italic text-[#F5E6BA]">
                  {ceremony.notes}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-2.5">
              <a
                href={ceremony.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-sage-950 font-cinzel text-xs font-bold tracking-wider transition-colors shadow-lg"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Church Directions</span>
              </a>

              <a
                href={getGoogleCalendarUrl(ceremony, ceremonyStartUtc, ceremonyEndUtc)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-cinzel text-xs tracking-wider border border-white/20 transition-colors"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-gold-300" />
                <span>Google Calendar</span>
              </a>

              <button
                onClick={() => downloadIcsCalendar(ceremony, '20261112T093000', '20261112T133000')}
                type="button"
                className="px-3.5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-cinzel text-xs tracking-wider border border-white/15 transition-colors"
                title="Download .ics Calendar file for Apple/Outlook"
              >
                <span>.ICS</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
