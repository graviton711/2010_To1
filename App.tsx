
import React, { useState } from 'react';
import Confetti from './components/Confetti';
import GiftBox from './components/GiftBox';
import CelebrationCard from './components/CelebrationCard';

function App() {
    const [isGiftOpen, setIsGiftOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const handleOpenGift = () => {
        if (isGiftOpen) return;
        setIsGiftOpen(true);
        // Delay showing content to allow the gift opening animation to play
        setTimeout(() => {
            setShowContent(true);
        }, 800);
    };

    return (
        <main className="relative w-screen min-h-screen flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-rose-200 p-4">
            <Confetti />

            <div className="flex items-center justify-center w-full h-full">
                {!showContent && <GiftBox onClick={handleOpenGift} isOpen={isGiftOpen} />}
                {showContent && <CelebrationCard />}
            </div>

            <footer className="absolute bottom-4 right-4 text-xs text-gray-500 font-semibold tracking-wider">
                From to tổ trưởng_Changggg🌹
            </footer>
        </main>
    );
}

export default App;
