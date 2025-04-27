import { useEffect, useRef, useState } from 'react';

function Page3() {
    const [showContent, setShowContent] = useState(false);
    const audioRef = useRef(null);
    const headerRef = useRef(null);
    const loaderRef = useRef(null);
    const highestZ = useRef(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (loaderRef.current) loaderRef.current.style.display = 'none';
            if (headerRef.current) headerRef.current.style.display = 'flex';
            setShowContent(true);
        }, 1500);
        localStorage.setItem("page", 3)

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const playAudio = () => {
            audioRef.current?.play().catch((err) => console.log('Autoplay prevented:', err));
        };
        document.addEventListener('click', playAudio);
        document.addEventListener('touchstart', playAudio);
        return () => {
            document.removeEventListener('click', playAudio);
            document.removeEventListener('touchstart', playAudio);
        };
    }, []);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        setTimeout(() => {
            navbar.style.display = 'flex';
        }, 3000);
    }, []);

    useEffect(() => {
        const papers = document.querySelectorAll('.paper');
        papers.forEach(paper => {
            let holding = false, moved = false;
            let prevX = 0, prevY = 0;
            let curX = 0, curY = 0;
            let rot = getInitialRotation(paper);

            const handleStart = (e) => {
                // e.preventDefault();
                holding = true;
                paper.style.zIndex = highestZ.current++;
                prevX = e.clientX || e.touches[0].clientX;
                prevY = e.clientY || e.touches[0].clientY;
            };

            const handleMove = (e) => {
                if (!holding) return;
                // e.preventDefault();
                const mouseX = e.clientX || e.touches[0].clientX;
                const mouseY = e.clientY || e.touches[0].clientY;
                const velX = mouseX - prevX;
                const velY = mouseY - prevY;
                curX += velX;
                curY += velY;
                rot += velX * 0.05;
                rot = Math.max(Math.min(rot, 10), -10);
                paper.style.transform = `translate(${curX}px, ${curY}px) rotate(${rot}deg)`;
                prevX = mouseX;
                prevY = mouseY;

                if (!moved && paper.classList.contains('drag')) {
                    moved = true;
                    setTimeout(() => paper.classList.add('vanish'), 500);
                }
            };

            const handleEnd = () => holding = false;

            paper.addEventListener('mousedown', handleStart);
            paper.addEventListener('touchstart', handleStart, { passive: true });
            document.addEventListener('mousemove', handleMove);
            document.addEventListener('touchmove', handleMove, { passive: true });
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchend', handleEnd);
        });

        function getInitialRotation(paper) {
            const transform = window.getComputedStyle(paper).transform;
            if (transform !== 'none') {
                const values = transform.split('(')[1].split(')')[0].split(',');
                const a = values[0], b = values[1];
                return Math.round(Math.atan2(b, a) * (180 / Math.PI));
            }
            return 0;
        }
    }, [showContent]);


    return (
        <div>
            <div id="loader" ref={loaderRef} className="fixed w-full h-screen flex justify-center items-center z-50">
                <img style={{ left: 0 }} src="/old.gif" alt="" className="absolute" />
                <img style={{ left: '720px' }} src="/old.gif" alt="" className="absolute" />
            </div>
            <audio id="background-audio" ref={audioRef} src="/old.mp3" preload="auto" autoPlay loop></audio>
            <div className="header hidden flex-col items-center" id="header" ref={headerRef}>
                <div className="container relative">
                    <div className="rose absolute">
                        <img src="/Muskn.png" alt="" />
                        <p className='top-5 !left-[55%]'>Happy <br /> Birthday <br /> Beautiful</p>
                    </div>
                    <div className="paper absolute" style={{ top: '120px', right: '-20px', transform: 'rotateZ(20deg)' }}>
                        <p>Cheers to another trip around the sun! Keep on shining. You are so hot, you make the sun jealous!</p>
                        <img className="sun" src="/sun.png" alt="" />
                    </div>
                    <div className="paper absolute" style={{ top: '90px', right: '55px', transform: 'rotateZ(-20deg)' }}>
                        <p>Aaj toh tu apne naam ki tarah&nbsp; pura shine kar rahi hai 😘Tere smile mein  jo baat hai, wo kisi ke paas nahi! 🔥 </p>

                    </div>
                    <div className="paper absolute" style={{ top: '30px', right: '-20px', transform: 'rotateZ(10deg)' }}>
                        <p>Like a good wine, you're only getting better with age! Wishing you a very happy birthday. 🎉</p>
                    </div>
                    <div className="paper absolute" style={{ top: '-30px', left: '-10px', transform: 'rotateZ(-10deg)' }}>
                        <p>Happy Birthday, Queen of Awesomeness!<br /> 👑 Long live the Queen!</p>
                    </div>
                    <div className="paper drag absolute flex justify-center items-center">
                        <p style={{ fontSize: '50px' }} className='w-full h-full !top-2 !left-0'>Drag to<br />move</p>
                    </div>
                    <nav className="navbar" id="navbar">
                        <a href="/page4" className="navbar-item w-full">SURPRISE !</a>
                    </nav>
                </div>
            </div>
            <style>
                {`
                    @font-face {
    font-family: 'GoodVibrations';
    src: url('/GoodVibrations-Script-400.ttf') format('woff2');
    font-weight: normal;
    font-style: normal;
}
 
body {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    display: flex;
    overflow: hidden;
    background-image: radial-gradient(circle, rgba(255,255,255,0) 60%, rgba(0,0,0,0.5) 100%), url('cover.webp');
    background-blend-mode: overlay;
}
#loader{
    filter: blur(2px);
    position: absolute;
    z-index: 99;
    height: 100%;
}
#loader img{
    position: absolute;
    height: 100%;
}
.header{
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.container{
    height: 350px;
    width: 409px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.paper{
    width: 350px;
    height: 236px;
    position: absolute;
    background-image: url('/paper.png');
    background-position: center center;
    filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.5));
    transition: transform 0.5s ease-out;
    cursor: grab;
}
.drag{
    width: 250px;
    height: 169px;
    position: absolute;
    background-image: url('/drag.png');
    text-align: center;
}

/* Class for applying the vanish animation */
.vanish {
    transition: opacity 0.5s, transform 0.5s;
    opacity: 0;
    transform: scale(0.5);
}
.paper:hover {
    transform: translate(0, -10px) rotate(3deg);
    filter: drop-shadow(10px 15px 15px rgba(0, 0, 0, 0.7));
    transition: transform 0.3s ease, filter 0.3s ease;
}
/* While dragging */
.paper:active {
    cursor: grabbing;
}

.paper p{
    font-family: 'GoodVibrations';
    position: relative;
    top: 30px;
    left: 30px;
    width: 320px;
    font-size: 30px;
    text-shadow: 0.2px 0.2px 0.5px rgba(0, 0, 0, 0.5);
}

.sun{
    height: 60px;
    position: absolute;
    right: 85px;
    top: 150px;
    
}
.coder{
    height: 60px;
    position: absolute;
    right: 50px;
    top: 150px;
}
.rose{
    width: 350px;
    height: 409px;
    position: absolute;
    background-image: url('/rose.png');
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
    transition: transform 0.5s ease-in-out, filter 0.3s ease-in-out;
    cursor: grab;
}
.rose p{
    font-family: 'GoodVibrations';
    position: relative;
    left: 180px;
    font-size: 40px;
}
.rose img{
    position: absolute;
    top: 180px;
    right: 35px;
    height: 190px;
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}
.rose:hover {
    transform: translate(0, -10px);
    filter: drop-shadow(10px 15px 15px rgba(0, 0, 0, 0.7));
}
/* While dragging */
.rose:active {
    cursor: grabbing;
}
/* Navbar Styles */
.navbar {
    display: none;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background-color: #b0582d; /* Dark brown background to match the parchment */
    border-top: 2px solid #a1481b; /* Slightly lighter border for contrast */
    justify-content: center;
    align-items: center;
    border-radius: 30px 30px 0 0;
    z-index: 10;
}

.navbar-content {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    gap: 20px;
}

.navbar-item {
    color: #f5deb3; /* Light beige text color */
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 20px;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 5px; /* Rounded corners */
}

@media (max-width: 768px) {
    .container{
        top: -25px;
    }
}
                `}
            </style>
        </div>
    );
}

export default Page3;
