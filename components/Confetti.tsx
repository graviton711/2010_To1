
import React, { useMemo } from 'react';

const confettiColors = ['bg-pink-400', 'bg-yellow-300', 'bg-green-300', 'bg-blue-400', 'bg-purple-400', 'bg-red-400'];
const totalConfetti = 100;

const Confetti: React.FC = () => {
    const confettiVariants = useMemo(() => {
        const variants = [];
        for(let i = 0; i < totalConfetti; i++) {
            const style = {
                left: `${Math.random() * 100}vw`,
                animationDuration: `${Math.random() * 3 + 4}s`, // 4-7s
                animationDelay: `${Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
            };
            const color = confettiColors[i % confettiColors.length];
            variants.push({ id: i, style, color });
        }
        return variants;
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {confettiVariants.map(variant => (
                <div
                    key={variant.id}
                    className={`absolute w-2 h-3 rounded-full animate-fall ${variant.color}`}
                    // The inline styles below are necessary for the random distribution and animation timing of confetti,
                    // which cannot be achieved with Tailwind's static classes alone without generating an impractical number of utility classes.
                    style={variant.style}
                ></div>
            ))}
        </div>
    );
};

export default Confetti;
