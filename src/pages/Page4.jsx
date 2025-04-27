import { useEffect, useRef, useState } from 'react';

const Page4 = () => {
    const audioRef = useRef(null);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showCard, setShowCard] = useState(false);
    const [cardFlipped, setCardFlipped] = useState(false);  // State to track card flip
    const [next, setNext] = useState(false)
    const messages = [
        "I am not always there with you",
        "But I am always there for you",
        "Happy Birthday to You, Muskan 🎉"
    ];

    // Autoplay or wait for user gesture
    useEffect(() => {
        const playAudio = () => {
            const audio = audioRef.current;
            if (audio) {
                audio.play().catch(() => {
                    const handleGesture = () => {
                        audio.play();
                        window.removeEventListener('click', handleGesture);
                        window.removeEventListener('keydown', handleGesture);
                    };
                    window.addEventListener('click', handleGesture);
                    window.addEventListener('keydown', handleGesture);
                });
            }
        };

        playAudio();
        localStorage.setItem("page", 4);
    }, []);

    // Handle quote transitions
    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setCurrentMessageIndex((prevIndex) => {
                    if (prevIndex < messages.length - 1) {
                        return prevIndex + 1;
                    } else {
                        setShowCard(true);
                        setNext(true)
                        clearInterval(interval);
                        return prevIndex;
                    }
                });
                setVisible(true);
            }, 1000);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // Handle card click to toggle card flip
    const handleCardClick = () => {
        setCardFlipped(!cardFlipped);
    };
    return (
        <div className="w-screen h-screen lg:bg-[url('/bg1.png')] bg-[url('/bg.png')] bg-cover bg-center relative flex items-center justify-center flex-col">
            {/* Audio */}
            <audio ref={audioRef} src="/Pretty Woman.mp3" loop />

            {/* Message */}
            {!showCard && (
                <div
                    className={`absolute text-[#4A2C2A] text-2xl lg:text-4xl text-center px-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ fontFamily: '"Kaushan Script", cursive' }}
                >
                    {messages[currentMessageIndex]}
                </div>
            )}

            {/* Card */}
            {showCard && (
                <div className="header animate-fade-in" onClick={handleCardClick}> {/* Add click handler here */}
                    <div className="container group">
                        <div className="B-dayCard">
                            <div className="envelope"></div>
                            <div className="front"></div>
                            <div className={`card ${cardFlipped ? 'flipped' : ''} group-hover:!top-[-90px] top-0 transition-all duration-500`}>
                                {/* Front of the card (visible when not flipped) */}
                                {!cardFlipped && (
                                    <div className="group-hover:hidden flex flex-col relative top-5 text-2xl items-center h-full w-full">
                                        Hello Cutie!
                                    </div>
                                )}

                                {/* Back of the card (visible when flipped) */}
                                <div className={`group-hover:flex text-center ${cardFlipped ? 'flex' : 'hidden'} flex-col justify-center items-center h-full w-full text-lg p-5`}>
                                    Wishing you all the happiness in the world! 💖
                                    <div className="text-4xl">🎂</div>
                                </div>
                            </div>

                            <div className="hearts">
                                <div className="one"></div>
                                <div className="two"></div>
                                <div className="three"></div>
                                <div className="four"></div>
                                <div className="five"></div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow"></div>
                </div>
            )}
            {
                next &&
                <a
                    href='/quotes'
                    className={`fixed bottom-20 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 rounded-3xl py-2`}
                >
                    Next
                </a>
            }
            {/* CSS styles */}
            <style>
                {`
                .animate-fade-in {
                    animation: fadeIn 2s ease-in-out forwards;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }

                /* Flip effect when clicked */
                .card.flipped {
                    top:-90px
                }
                `}
            </style>
        </div>
    );
};

export default Page4;
