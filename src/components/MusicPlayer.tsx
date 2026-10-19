import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingConfig } from '../weddingConfig';

interface MusicPlayerProps {
  autoStartOnOpen?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStartOnOpen = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Soft romantic wedding chord progression (Canon in D inspiration)
  // D major -> A major -> B minor -> F# minor -> G major -> D major -> G major -> A major
  const chords = [
    [293.66, 369.99, 440.00, 587.33], // D4, F#4, A4, D5
    [220.00, 277.18, 329.63, 440.00], // A3, C#4, E4, A4
    [246.94, 293.66, 369.99, 493.88], // B3, D4, F#4, B4
    [185.00, 220.00, 277.18, 369.99], // F#3, A3, C#4, F#4
    [196.00, 246.94, 293.66, 392.00], // G3, B3, D4, G4
    [220.00, 293.66, 369.99, 440.00], // D3, D4, F#4, A4
    [196.00, 246.94, 293.66, 392.00], // G3, B3, D4, G4
    [220.00, 277.18, 329.63, 440.00], // A3, C#4, E4, A4
  ];

  // Soft note synthesis function with gentle acoustic decay
  const playSoftTone = (ctx: AudioContext, freq: number, delay: number, duration: number = 2.4) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle'; // warm, gentle acoustic piano/harp feel
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

      // Warm low-pass filter to sound organic like a velvet music box
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, ctx.currentTime + delay);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + delay + 0.08); // gentle soft attack
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + duration);
    } catch {
      // AudioContext state handled
    }
  };

  const startSynthesizedMusic = () => {
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }

    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    let chordIndex = 0;
    const playChordLoop = () => {
      const currentChord = chords[chordIndex % chords.length];
      // Arpeggiate chord gracefully
      currentChord.forEach((freq, idx) => {
        playSoftTone(ctx, freq, idx * 0.38, 3.2);
      });
      chordIndex++;
    };

    playChordLoop();
    synthTimerRef.current = window.setInterval(playChordLoop, 2600);
  };

  const stopSynthesizedMusic = () => {
    if (synthTimerRef.current !== null) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state === 'running') {
      audioContextRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (weddingConfig.music.audioUrl && audioElementRef.current) {
      if (isPlaying) {
        audioElementRef.current.pause();
        setIsPlaying(false);
      } else {
        audioElementRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    } else {
      if (isPlaying) {
        stopSynthesizedMusic();
        setIsPlaying(false);
      } else {
        startSynthesizedMusic();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (autoStartOnOpen && !isPlaying) {
      toggleMusic();
    }
    return () => {
      stopSynthesizedMusic();
    };
  }, [autoStartOnOpen]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center">
      {weddingConfig.music.audioUrl && (
        <audio ref={audioElementRef} src={weddingConfig.music.audioUrl} loop preload="auto" />
      )}
      
      <button
        onClick={toggleMusic}
        type="button"
        title={isPlaying ? "Mute Background Music" : "Play Romantic Wedding Music"}
        className={`group flex items-center space-x-2 px-3 py-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 ${
          isPlaying
            ? 'bg-sage-800/90 text-gold-300 border-gold-500/50 hover:bg-sage-900'
            : 'bg-white/90 text-sage-800 border-sage-300 hover:bg-white'
        }`}
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          {isPlaying ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-30" />
              <Volume2 className="w-4 h-4 text-gold-400" />
            </>
          ) : (
            <VolumeX className="w-4 h-4 text-sage-600" />
          )}
        </span>

        {/* Music visualizer bars */}
        {isPlaying && (
          <div className="flex items-end space-x-0.5 h-3">
            <span className="w-0.5 h-3 bg-gold-400 animate-pulse rounded-full" />
            <span className="w-0.5 h-1.5 bg-gold-400 animate-pulse delay-75 rounded-full" />
            <span className="w-0.5 h-2.5 bg-gold-400 animate-pulse delay-150 rounded-full" />
            <span className="w-0.5 h-2 bg-gold-400 animate-pulse delay-100 rounded-full" />
          </div>
        )}

        <span className="text-xs font-cinzel font-medium tracking-wider hidden sm:inline">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </button>
    </div>
  );
};
