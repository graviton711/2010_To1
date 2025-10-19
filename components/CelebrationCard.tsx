import React, { useState } from 'react';
import Fireworks from './Fireworks';

const CelebrationCard: React.FC = () => {
    const [surpriseRevealed, setSurpriseRevealed] = useState(false);
    const [fireworksTheme, setFireworksTheme] = useState('classic');

    const handleSurpriseClick = () => {
        setSurpriseRevealed(true);
    };

    const themes = [
        { name: 'classic', gradient: 'from-pink-500 to-purple-500', label: 'Cổ điển' },
        { name: 'sweet_pink', gradient: 'from-pink-400 to-rose-400', label: 'Hồng ngọt ngào' },
        { name: 'golden', gradient: 'from-yellow-400 to-amber-500', label: 'Vàng rực rỡ' },
        { name: 'hopeful_blue', gradient: 'from-sky-400 to-indigo-500', label: 'Xanh hi vọng' },
    ];

    const greetingText = `Ngày 20/10 lại tới, tớ muốn gửi những lời chúc thật đặc biệt đến ba bông hoa đáng yêu nhất của tổ 1 🌸\n\nThảo – cô nàng năng động, luôn tràn đầy sức sống và lan tỏa năng lượng tích cực cho mọi người;\nHà – xinh đẹp, vui tươi, lúc nào cũng mang lại tiếng cười và cảm giác ấm áp;\nHợi – dễ thương, hiền lành và luôn khiến người khác cảm thấy thoải mái mỗi khi ở bên 🩷\n\nCảm ơn vì đã cùng nhau tạo nên thật nhiều kỷ niệm đẹp trong những ngày học chung.\nDù giờ có mỗi đứa một hướng riêng, tớ vẫn mong tụi mình luôn giữ liên lạc, lâu lâu vẫn tám chuyện, vẫn cười cùng nhau như trước.\n\nChúc ba bạn có một ngày 20/10 thật rực rỡ — được nhận hoa, quà và nhiều lời chúc dễ thương nhất 💐\nVà quan trọng hơn hết, chúc mấy bồ luôn xinh đẹp, tự tin và hạnh phúc với những gì mình chọn nha ✨\n\nTổ 1 mãi đỉnhhh! 💞`;

    return (
        <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl max-w-4xl w-[95%] sm:w-[90%] mx-auto animate-pop-in z-10 my-8">
            <div className="flex flex-col items-center">
                <div className="text-gray-700 text-left w-full space-y-3 flex flex-col">
                    <h1 className="font-pacifico text-3xl md:text-4xl text-pink-500 mb-4 text-center">Gửi tới những bông hoa của tổ 1</h1>
                    <div className="flex-grow">
                        {greetingText.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-sm md:text-base leading-relaxed whitespace-pre-wrap mb-3">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    {!surpriseRevealed && (
                        <div className="flex flex-col items-center gap-6 mt-4">
                            <div>
                                <p className="text-center text-gray-600 font-semibold mb-3">Chọn màu pháo hoa nè:</p>
                                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                    {themes.map(theme => (
                                        <button 
                                            key={theme.name}
                                            onClick={() => setFireworksTheme(theme.name)}
                                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${theme.gradient} transition-transform duration-200 transform hover:scale-110 focus:outline-none ${fireworksTheme === theme.name ? 'ring-4 ring-white/90 ring-offset-2 ring-offset-pink-200' : ''}`}
                                            aria-label={`Chọn màu ${theme.label}`}
                                            title={theme.label}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                            <button
                                onClick={handleSurpriseClick}
                                className="self-center bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-300"
                            >
                                Bấm vào đây có bất ngờ thêm nè ✨
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {surpriseRevealed && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl z-30" onClick={() => setSurpriseRevealed(false)}>
                     <div
                        role="img"
                        aria-label="Bông hoa tulip"
                        className="text-[12rem] md:text-[16rem] drop-shadow-lg animate-pop-in animate-gentle-sway pointer-events-none"
                    >
                        🌷
                    </div>
                     <Fireworks theme={fireworksTheme} />
                </div>
            )}
        </div>
    );
};

export default CelebrationCard;