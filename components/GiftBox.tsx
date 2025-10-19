import React from 'react';

interface GiftBoxProps {
    onClick: () => void;
    isOpen: boolean;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onClick, isOpen }) => {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer group" onClick={onClick}>
            {/* Lid - z-30 */}
            <div className={`absolute w-[110%] h-[25%] bg-pink-500 rounded-t-lg top-0 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out origin-bottom z-30 ${isOpen ? '-translate-y-48 -rotate-12 opacity-0' : 'translate-y-0 rotate-0 group-hover:-translate-y-2'}`}></div>
            
            {/* Box Body - z-10 */}
            <div className="absolute w-full h-[80%] bg-pink-400 bottom-0 rounded-b-lg shadow-2xl z-10"></div>

            {/* Ribbon - z-20 */}
            <div className={`absolute w-8 h-[82%] bottom-0 bg-pink-300 left-1/2 -translate-x-1/2 transition-transform duration-500 z-20 ${isOpen ? 'scale-y-0' : 'scale-y-100'}`}></div>
            <div className={`absolute w-[112%] h-8 bg-pink-300 top-[20%] -translate-y-1/2 left-1/2 -translate-x-1/2 transition-transform duration-500 z-20 ${isOpen ? 'scale-x-0' : 'scale-x-100'}`}></div>

            {/* Bow - z-40 */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 transition-all duration-500 delay-200 group-hover:scale-110 z-40 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                <div className="w-12 h-12 bg-pink-300 rounded-full absolute -left-6 top-0 transform -rotate-45"></div>
                <div className="w-12 h-12 bg-pink-300 rounded-full absolute -right-6 top-0 transform rotate-45"></div>
                 <div className="w-6 h-6 bg-pink-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className={`absolute -bottom-14 left-1/2 -translate-x-1/2 text-white font-pacifico text-3xl px-6 py-2 bg-pink-500 rounded-full shadow-lg transition-all duration-500 group-hover:bg-pink-600 group-hover:scale-105 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                Mở quà!
            </div>
        </div>
    );
};

export default GiftBox;