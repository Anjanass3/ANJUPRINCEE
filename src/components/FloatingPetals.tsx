import type React from 'react';

export const FloatingPetals: React.FC = () => {
  // Pre-configured elegant petals with varied speeds and positions
  const petals = [
    { left: '6%', delay: '0s', duration: '14s', size: 16, rotate: 12 },
    { left: '18%', delay: '3.5s', duration: '18s', size: 14, rotate: 45 },
    { left: '32%', delay: '1.2s', duration: '15s', size: 18, rotate: -25 },
    { left: '48%', delay: '5s', duration: '20s', size: 15, rotate: 60 },
    { left: '64%', delay: '2.1s', duration: '16s', size: 17, rotate: -40 },
    { left: '78%', delay: '4.2s', duration: '19s', size: 13, rotate: 30 },
    { left: '92%', delay: '0.8s', duration: '15s', size: 16, rotate: -15 },
  ];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none"
    >
      {petals.map((petal, i) => (
        <div
          key={i}
          className="absolute -top-8 animate-floating-petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 24 32"
            fill="none"
            className="opacity-40"
            style={{ transform: `rotate(${petal.rotate}deg)` }}
          >
            {/* Delicate white rose / ivory blossom petal */}
            <path
              d="M12 2 C 5 8, 2 18, 6 26 C 10 32, 18 30, 20 22 C 22 14, 19 6, 12 2 Z"
              fill="url(#petalGradient)"
            />
            <path
              d="M12 6 C 10 14, 11 22, 14 26"
              stroke="#E8D7B8"
              strokeWidth="0.5"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}

      {/* SVG linear gradient definition */}
      <svg className="hidden">
        <defs>
          <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FAF2E4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#EADBCC" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
