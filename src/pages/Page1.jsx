import { useEffect, useRef, useState } from 'react';
import Confetti from '../components/Page1/Confetti';
import BirthdayCard from '../components/Page1/BirthdayCard';
import AudioPlayer from '../components/Page1/AudioPlayer';
function Page1() {
    const containerRef = useRef(null);
    const loaderRef = useRef(null);
    const [next, setNext] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (loaderRef.current && containerRef.current) {
                loaderRef.current.style.opacity = 0;
                setTimeout(() => {
                    loaderRef.current.style.display = 'none';
                    containerRef.current.style.display = 'flex';
                    setTimeout(() => {
                        containerRef.current.style.opacity = 1;
                    }, 50);
                }, 1000);
            }
        }, 1500);
        setTimeout(() => {
            setNext(true)
        }, 6000)
        localStorage.setItem("page", 1)
    }, []);

    return (
        <div className='body w-screen h-screen relative'>
            <div id="loader" ref={loaderRef}>
                <img src="/bday.gif" alt="Loading..." />
            </div>
            <AudioPlayer />
            <Confetti />
            <div id="container" ref={containerRef} className="opacity-0 hidden !top-20 relative">
                <BirthdayCard />
            </div>
            <a
                href='/page2'
                className={`${next ? 'fixed' : "hidden"} bottom-20 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-3 rounded-xl py-2`}
            >
                NEXT
            </a>
            <style>
                {`
                    .wrap-deco {
    position: absolute;
    top: -230px;
    left: -200px;
}

.decorations {
    position: absolute;
    width: 400px;
    height: 300px;
    border: 3px solid #333;
    border-radius: 50%;
}

.decorations:before,
.decorations:after,
.decorationsTwo:before,
.decorationsTwo:after,
.decorationsThree:before,
.decorationsThree:after {
    content: "";
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    width: 0;
    height: 0;
}

.decorations:before {
    border-top: 40px solid #f15bb5;
    top: 297px;
    left: 210px;
    transform: rotate(-5deg);
}

.decorations:after {
    border-top: 40px solid #f4d35e;
    top: 288px;
    left: 260px;
    transform: rotate(-17deg);
}

.decorationsTwo:before {
    border-top: 40px solid #00f5d4;
    top: 268px;
    left: 315px;
    transform: rotate(-30deg);
}

.decorationsTwo:after,
.decorationsThree:after {
    border-top: 40px solid #9b5de5;
    top: 238px;
    left: 355px;
    transform: rotate(-40deg);
}

.wrap-decoTwo {
    transform: scaleX(-1);
    position: absolute;
    top: -230px;
    left: 445px;
}

.plate {
    position: absolute;
    width: 130px;
    height: 5px;
    background-color: #00bbf9;
    left: 60px;
    top: 213px;
}

.cake {
    position: absolute;
    overflow: hidden;
    width: 100px;
    height: 50px;
    background-color: #f15bb5;
    border-radius: 10px 10px 0 0;
    top: -50px;
    left: 15px;
    box-shadow: inset 0 -15px #f9c74f, inset 0 15px #432818;
}

.cake:before {
    content: "";
    position: absolute;
    background-color: #432818;
    width: 10px;
    height: 20px;
    top: 5px;
    border-radius: 20px;
    box-shadow: 10px 5px #f15bb5, 20px 0px #432818, 30px 2px #f15bb5, 40px 5px #432818, 50px 5px #f15bb5, 60px 0px #432818, 70px 5px #f15bb5, 80px 5px #432818, 90px 5px #f15bb5;
}

.plate:before {
    content: "";
    position: absolute;
    background: repeating-linear-gradient(-45deg, #9b5de5, #9b5de5 3px, #00f5d4 3px, #00f5d4 6px);
    width: 7px;
    height: 25px;
    top: -75px;
    left: 61px;
}

.plate:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 5px;
    background-color: #333;
    top: -80px;
    left: 64px;
}


.flame {
    position: absolute;
    background-color: #fb5607;
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    transform: rotate(-45deg);
    width: 15px;
    height: 15px;
    opacity: 0.7;
    top: -93px;
    left: 57px;
}

body {
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0) 60%, rgba(0, 0, 0, 0.5) 100%), url('/cover.jpg');
    background-blend-mode: overlay;
    overflow: hidden;
}

/* Fullscreen Loader */
#loader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.1);
    transition: opacity 1s ease-out;
}

#loader img {
    width: 200px;
    /* Adjust size as needed */
}

#container {
    display: none;
    transition: opacity 5s ease-in;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.birthdayCard {
    position: relative;
    width: 250px;
    height: 350px;
    cursor: pointer;
    transform-style: preserve-3d;
    transform: perspective(2500px);
    transition: 4s;
}

.birthdayCard:hover {
    transform: perspective(2500px) rotate(5deg);
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, .15), 0 10px 100px rgba(0, 0, 0, 0.3);
}

.birthdayCard:hover .cardFront {
    transform: rotateY(-160deg);
}

.birthdayCard:hover .front-text {
    display: none;
}

.birthdayCard:hover .wrap-deco {
    display: none;
}

.birthdayCard:hover .wrap-decoTwo {
    display: none;
}

.birthdayCard:hover .plate {
    display: none;
}

.cardFront {
    position: relative;
    background-color: #fff;
    width: 250px;
    height: 350px;
    overflow: hidden;
    transform-origin: left;
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, .13), 30px 0 50px rgba(0, 0, 0, 0.1);
    transition: .4s;
}

.happy,
.toyou {
    position: relative;
    font-family: didot;
    text-align: center;
    backface-visibility: hidden;
    font-size: 30px;
}

.happy {
    top: 198px;
}

.toyou {
    top: 123px;
}

.bday {
    position: relative;
    font-family: arial;
    font-size: 35px;
    text-align: center;
    top: 163px;
}

.decorationsThree:before {
    border-top: 40px solid #00bbf9;
    top: 268px;
    left: 315px;
    transform: rotate(-30deg);
}

.cardInside {
    position: absolute;
    background-color: #fff;
    width: 250px;
    height: 350px;
    z-index: -1;
    left: 0;
    top: 0;
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2);
}

.inside-text {
    position: relative;
    top: -160px;
    transform: scale(0.7);
}

.wishes {
    position: relative;
    top: -100px;
    margin: 25px;
    font-size: 20px;
}

p {
    font-family: 'Brush Script MT', cursive;
    color: #333;
}

.name {
    margin-left: 150px;
}

@media (max-width: 768px) {
    .birthdayCard {
        top: -100px;
    }

    .birthdayCard:hover {
        transform: perspective(2500px) rotate(5deg) translateX(50px);
        box-shadow: inset 100px 20px 100px rgba(0, 0, 0, .15), 0 10px 100px rgba(0, 0, 0, 0.3);
    }

    .birthdayCard.move {
        transform: translateY(-60px) rotate(10deg);
    }
}

.confetti {
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
}

.confetti-piece {
    position: absolute;
    width: 10px;
    height: 25px;
    top: -110px;
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg);
}

@keyframes down {
    0% {
        top: -110px;
        transform: rotate(0deg) rotateY(-90deg);
        opacity: 1;
    }

    100% {
        top: 100vh;
        transform: rotate(360deg) rotateY(180deg);
        opacity: 0.5;
    }
}

@keyframes downTwo {
    0% {
        top: -130px;
        transform: rotate(0deg) rotateY(90deg);
        opacity: 1;
    }

    100% {
        top: 100vh;
        transform: rotate(-360deg) rotateY(-180deg);
        opacity: 0.5;
    }
}
                `}
            </style>
        </div>
    );
}

export default Page1;
