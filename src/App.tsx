import { useState } from 'react';
import { EnvelopeCover } from './components/EnvelopeCover';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InvitationMessage } from './components/InvitationMessage';
import { CeremonyReceptionSection } from './components/CeremonyReceptionSection';
import { CountdownSection } from './components/CountdownSection';
import { VenueMapSection } from './components/VenueMapSection';
import { FinalBlessingFooter } from './components/FinalBlessingFooter';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingPetals } from './components/FloatingPetals';

export function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'en' | 'ml'>('en');
  const [autoStartAudio, setAutoStartAudio] = useState(false);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    setAutoStartAudio(true);
    // Smooth scroll down to hero
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ml' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#2D342E] relative selection:bg-sage-200 selection:text-sage-950 font-sans">
      
      {/* Floating Gentle Flower Petals */}
      <FloatingPetals />

      {/* Floating Background Music Player */}
      <MusicPlayer autoStartOnOpen={autoStartAudio} />

      {/* Screen 1: Full-Screen Luxury Envelope Cover */}
      {!isEnvelopeOpen ? (
        <EnvelopeCover isOpen={isEnvelopeOpen} onOpen={handleOpenEnvelope} />
      ) : (
        /* Screen 2: Complete Interactive Wedding Invitation Website */
        <div className="animate-fadeIn transition-opacity duration-1000">
          
          {/* Navigation Bar */}
          <Navbar
            currentLang={currentLang}
            onToggleLang={toggleLanguage}
            onReopenEnvelope={handleReopenEnvelope}
          />

          {/* Hero Section with Couple's Real Photograph */}
          <HeroSection currentLang={currentLang} />

          {/* Formal Wedding Invitation Card (English & Malayalam) */}
          <InvitationMessage
            currentLang={currentLang}
            onToggleLang={toggleLanguage}
          />

          {/* Solemnization Ceremony & Reception Cards with Calendar Add */}
          <CeremonyReceptionSection />

          {/* Live Countdown Timer */}
          <CountdownSection />

          {/* Venue Location & Google Maps */}
          <VenueMapSection />

          {/* Final Blessing, WhatsApp Sharing & Link Copy Footer */}
          <FinalBlessingFooter />

        </div>
      )}

    </div>
  );
}

export default App;
