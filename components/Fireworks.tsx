import React, { useMemo } from 'react';

// FIX: Add a 'theme' prop to the Fireworks component to allow for color customization.
// This resolves the TypeScript error in the parent component where 'theme' was passed without being defined.
interface FireworksProps {
    theme: string;
}

const themeColors: { [key: string]: string[] } = {
    classic: ['bg-pink-400', 'bg-yellow-300', 'bg-green-300', 'bg-blue-400', 'bg-purple-400', 'bg-red-400', 'bg-indigo-400'],
    sweet_pink: ['bg-pink-300', 'bg-rose-300', 'bg-fuchsia-400', 'bg-rose-400', 'bg-red-300'],
    golden: ['bg-yellow-300', 'bg-amber-300', 'bg-yellow-400', 'bg-orange-400', 'bg-amber-400'],
    hopeful_blue: ['bg-sky-300', 'bg-indigo-300', 'bg-blue-400', 'bg-sky-400', 'bg-indigo-400', 'bg-cyan-300'],
};

const totalParticles = 150;

const Fireworks: React.FC<FireworksProps> = ({ theme }) => {
    const confettiColors = themeColors[theme] || themeColors.classic;

    const particles = useMemo(() => {
        const p = [];
        for (let i = 0; i < totalParticles; i++) {
            const angle = Math.random() * 360;
            const radius = Math.random() * 200 + 150; // Fly out distance
            const x = Math.cos(angle * (Math.PI / 180)) * radius;
            const y = Math.sin(angle * (Math.PI / 180)) * radius;

            const style = {
                '--x': `${x}px`,
                '--y': `${y}px`,
                animationDuration: `${Math.random() * 0.8 + 0.5}s`, // 0.5s - 1.3s
                animationDelay: `0s`,
            } as React.CSSProperties;

            const color = confettiColors[i % confettiColors.length];
            p.push({ id: i, style, color });
        }
        return p;
    }, [confettiColors]);

    return (
        <div className="absolute top-1/2 left-1/2 w-1 h-1">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className={`absolute w-2.5 h-2.5 rounded-full animate-burst ${particle.color}`}
                    // Inline styles are used for randomized burst directions and timings,
                    // which is essential for creating a dynamic firework effect.
                    style={particle.style}
                ></div>
            ))}
        </div>
    );
};

export default Fireworks;
