import { useState, useEffect } from 'react';
import { ChristianCross, BotanicalCorner, GoldDivider, WeddingRings, BotanicalGarland } from './BotanicalOrnaments';
import { Sparkles, Clock } from 'lucide-react';

export const CountdownSection: React.FC = () => {
  // Target: November 12, 2026 at 09:30:00 IST (UTC+05:30)
  const targetDate = new Date('2026-11-12T09:30:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#FAF8F2] via-sage-50/50 to-[#FAF8F2]">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Countdown Outer Paper Card */}
        <div className="paper-card rounded-3xl p-6 sm:p-12 border border-[#C5A059]/35 text-center relative overflow-hidden shadow-paper-lg">
          
          {/* Inner hairline frame */}
          <div className="absolute inset-3 rounded-2xl border border-[#C5A059]/20 pointer-events-none" />

          {/* Botanical Corners */}
          <BotanicalCorner position="top-left" className="w-14 h-14 top-2 left-2" />
          <BotanicalCorner position="top-right" className="w-14 h-14 top-2 right-2" />
          <BotanicalCorner position="bottom-left" className="w-14 h-14 bottom-2 left-2" />
          <BotanicalCorner position="bottom-right" className="w-14 h-14 bottom-2 right-2" />

          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-2">
            <ChristianCross size={30} />
            <div className="flex items-center space-x-2 my-2">
              <WeddingRings size={20} className="text-gold-500" />
              <span className="font-cinzel text-xs tracking-[0.25em] text-gold-700 uppercase font-semibold">
                Two Hearts • One Covenant
              </span>
              <WeddingRings size={20} className="text-gold-500" />
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-sage-900 mt-1 font-normal">
            Until We Say &ldquo;I Do&rdquo;
          </h2>

          <BotanicalGarland className="w-full max-w-xs mx-auto my-2 opacity-80" />

          <p className="font-serif italic text-sage-700 text-sm sm:text-base max-w-md mx-auto mt-1">
            Every second brings us closer to our sacred vows before God and our beloved families.
          </p>

          <GoldDivider className="my-5" />

          {timeLeft.isPast ? (
            /* Post-Wedding Celebratory Message */
            <div className="py-8 px-4 rounded-2xl bg-sage-100/80 border border-gold-300 max-w-lg mx-auto">
              <Sparkles className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <h3 className="font-serif text-2xl sm:text-3xl text-sage-900 font-semibold">
                The Wedding Celebrations Have Begun!
              </h3>
              <p className="font-serif italic text-sage-700 text-sm mt-2">
                Thank you for lifting Prince &amp; Anju in your prayers and joining in their celebrations.
              </p>
            </div>
          ) : (
            /* Live Digital Clocks */
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto my-6">
                {timeUnits.map((unit, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-2xl bg-gradient-to-b from-white to-sage-50/60 p-4 sm:p-6 border border-[#C5A059]/40 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* Subtle gold accent at top */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                    
                    <div className="font-serif text-4xl sm:text-6xl text-sage-900 font-normal tracking-tight">
                      {String(unit.value).padStart(2, '0')}
                    </div>

                    <div className="font-cinzel text-[10px] sm:text-xs uppercase tracking-widest text-gold-700 font-semibold mt-2">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ceremony Timestamp Reminder */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-sage-100/90 border border-sage-200 text-sage-800 text-xs font-cinzel tracking-wider mt-4">
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                <span>Solemnization: 12th November 2026 • 9:30 AM IST</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
