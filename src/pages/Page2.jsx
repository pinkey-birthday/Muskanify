import { useEffect, useRef, useState } from "react";
import Loader from "../components/Page2/Loader";
import Bulbs from "../components/Page2/Bulbs";
import Balloons from "../components/Page2/Balloons";
import Cake from "../components/Page2/Cake";
import { useNavigate } from "react-router-dom";

function Banner() {
  return <div id="banner" className="banner banner-come"></div>;
}

function Page2() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [balloons, setBalloons] = useState([]);
  const audio1 = useRef(new Audio("/birthday-song.mp3"));
  const audio2 = useRef(new Audio("/hbd.mp3"));

  useEffect(() => {
    audio1.current.loop = true;
    audio2.current.loop = true;
    window.scrollTo(0, 0);

    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "hidden";
    }, 5000);
    localStorage.setItem("page", 2)
  }, []);

  const handleNext = () => {
    switch (step) {
      case 0:
        document.body.classList.add("peach-after");
        break;
      case 1:
        audio1.current.play();
        break;
      case 2:
        break;
      case 3:
        generateBalloons();
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        audio1.current.pause();
        audio2.current.play();
        break;
      case 8:
        audio2.current.pause();
        navigate('/page3')
    }
    setStep((prev) => prev + 1)
  };

  const generateBalloons = () => {
    const newBalloons = [];
    for (let i = 0; i < 20; i++) {
      newBalloons.push({
        id: i,
        image: `/images/b${(i + 1) % 10 || 10}.png`,
        top: Math.random() * 200,
        left: (Math.random() * 200) - 50,
        sway: Math.random() * 30 - 15,
        rotate: (i % 2 === 0 ? -1 : 1) * (Math.random() * 20 - 10),
        scale: Math.random() * 0.7 + 0.6,
        duration: Math.random() * 5 + 8,
        opacity: Math.random() * 0.3 + 0.7,
      });
    }
    setBalloons(newBalloons);
  };

  const stepTexts = [
    "Turn On Light",
    "Special Music for You",
    "Let's Do Some Decoration",
    "Some More Balloons!",
    "Special Cake for You",
    "Light the Candle",
    "Happy Birthday Muskan!",
    "Enjoy !!",
    "NEXT"
  ];

  return (
    <div className={`w-screen h-screen ${step >= 1 ? '' : 'bg-black'}`}>
      {loading && <Loader />}
      {!loading && (
        <div className="container !h-full !w-full">
          <Bulbs visible={step >= 1} />
          {step >= 3 && <Banner />}
          {step >= 3 && <Balloons sideOnly />}
          {step >= 4 && <Balloons balloons={balloons} />}
          {step >= 5 && <Cake show={step >= 5} flame={step >= 6} />}
          {step <= 8 && (
            <div className="button-container">
              <button id="toggleButton" onClick={handleNext}>
                {stepTexts[step]}
              </button>
            </div>
          )}
        </div>
      )}
      <style>
        {`
          #bulb-container {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 70px;
    display: none;
    z-index: 1;
}

.bulb {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50px 50px;
    opacity: 0;
}

.bulb-blue {
    background-image: url('/images/bulb_blue.png');
    animation: bulb_fade_in 2s forwards, bulb_blue_change 5s infinite;
}

.bulb-green {
    background-image: url('/images/bulb_green.png');
    animation: bulb_fade_in 2s forwards, bulb_green_change 5s infinite;
}

.bulb-red {
    background-image: url('/images/bulb_red.png');
    animation: bulb_fade_in 2s forwards, bulb_red_change 5s infinite;
}

.bulb-yellow {
    background-image: url('/images/bulb_yellow.png');
    animation: bulb_fade_in 2s forwards, bulb_yellow_change 5s infinite;
}

.bulb-orange {
    background-image: url('/images/bulb_orange.png');
    animation: bulb_fade_in 2s forwards, bulb_orange_change 5s infinite;
}

.bulb-pink {
    background-image: url('/images/bulb_pink.png');
    animation: bulb_fade_in 2s forwards, bulb_pink_change 5s infinite;
}

@keyframes bulb_fade_in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes bulb_blue_change {
    0% {
        background-image: url('/images/bulb_blue.png');
    }
    50% {
        background-image: url('/images/bulb_green.png');
    }
    100% {
        background-image: url('/images/bulb_blue.png');
    }
}

@keyframes bulb_green_change {
    0% {
        background-image: url('/images/bulb_green.png');
    }
    50% {
        background-image: url('/images/bulb_red.png');
    }
    100% {
        background-image: url('/images/bulb_green.png');
    }
}

@keyframes bulb_red_change {
    0% {
        background-image: url('/images/bulb_red.png');
    }
    50% {
        background-image: url('/images/bulb_yellow.png');
    }
    100% {
        background-image: url('/images/bulb_red.png');
    }
}

@keyframes bulb_yellow_change {
    0% {
        background-image: url('/images/bulb_yellow.png');
    }
    50% {
        background-image: url('/images/bulb_orange.png');
    }
    100% {
        background-image: url('/images/bulb_yellow.png');
    }
}

@keyframes bulb_orange_change {
    0% {
        background-image: url('/images/bulb_orange.png');
    }
    50% {
        background-image: url('/images/bulb_pink.png');
    }
    100% {
        background-image: url('/images/bulb_orange.png');
    }
}

@keyframes bulb_pink_change {
    0% {
        background-image: url('/images/bulb_pink.png');
    }
    50% {
        background-image: url('/images/bulb_blue.png');
    }
    100% {
        background-image: url('/images/bulb_pink.png');
    }
}

.cake {
    position: absolute;
    bottom: 20%;
    left: 50%;
    width: 250px;
    height: 200px;
    animation: bounce_in 2s ease-out forwards;
}

@keyframes bounce_in {
    0% {
        transform: translateX(-50%) scale(0.5);
        opacity: 0;
    }
    60% {
        transform: translateX(-50%) scale(1.1);
        opacity: 1;
    }
    80% {
        transform: translateX(-50%) scale(0.9);
    }
    100% {
        transform: translateX(-50%) scale(1);
    }
}

.plate {
    width: 270px;
    height: 110px;
    position: absolute;
    bottom: -10px;
    left: -10px;
    background-color: #ccc;
    border-radius: 50%;
    box-shadow: 0 2px 0 #b3b3b3, 0 4px 0 #b3b3b3, 0 5px 40px rgba(0, 0, 0, 0.5);
}

.cake > * {
    position: absolute;
}

.layer {
    position: absolute;
    width: 250px;
    height: 100px;
    border-radius: 50%;
    background-color: #f8c6d6; /* Pink color */
    box-shadow: 0 2px 0px #f6b2c4, 0 4px 0px #f5a9b2, 0 6px 0px #f59a9d, 0 8px 0px #f5898a, 0 10px 0px #f47776, 0 12px 0px #f3656a, 0 14px 0px #f2545e, 0 16px 0px #f14253, 0 18px 0px #f03148, 0 20px 0px #ef2040, 0 22px 0px #ed1b38, 0 24px 0px #eb1730, 0 26px 0px #e91128, 0 28px 0px #e70d22, 0 30px 0px #e6091c;
}

.layer-top {
    top: 0px;
}

.layer-middle {
    top: 33px; /* Adjusted for better alignment */
}

.layer-bottom {
    top: 66px; /* Adjusted for better alignment */
}

.icing {
    top: 5px;
    left: 5px;
    background-color: #fbd7e9; /* Light pink color */
    width: 240px;
    height: 90px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
}

.icing:before {
    content: "";
    position: absolute;
    top: 4px;
    right: 5px;
    bottom: 6px;
    left: 5px;
    background-color: #fbd7e9; /* Slightly darker pink */
    box-shadow: 0 0 4px #fbd7e9, 0 0 4px #fbd7e9, 0 0 4px #fbd7e9;
    border-radius: 50%;
    z-index: 1;
}

.drip {
    display: block;
    width: 50px;
    height: 60px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: #fbd7e9; /* Light pink color */
}

.drip1 {
    top: 53px;
    left: 5px;
    transform: skewY(15deg);
    height: 48px;
    width: 40px;
}

.drip2 {
    top: 69px;
    left: 181px;
    transform: skewY(-15deg);
}

.drip3 {
    top: 54px;
    left: 90px;
    width: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
}

.candle {
    background-color: #e07b92; /* Pinkish candle */
    width: 16px;
    height: 50px;
    border-radius: 8px/4px;
    top: -20px;
    left: 50%;
    margin-left: -8px;
    z-index: 10;
}

.candle:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 8px;
    border-radius: 50%;
    background-color: #d06a77; /* Slightly darker pink */
}

.thread {
    position: absolute;
    background-color: white;
    height: 11px;
    width: 1.8px;
    top: -10px;
    left: 6.5px;
    z-index: 10;
}

.flame {
    display: none;
    position: absolute;
    background: linear-gradient(to bottom, #ff9900, #ffcc00, #ff6600); /* Shades of orange and yellow */
    width: 15px;
    height: 35px;
    border-radius: 10px 10px 10px 10px/25px 25px 10px 10px;
    top: -39px;
    left: 50%;
    margin-left: -7.5px;
    z-index: 10;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5), 0 0 20px rgba(255, 105, 180, 0.5), 0 0 60px rgba(255, 105, 180, 0.5), 0 0 80px rgba(255, 105, 180, 0.5);
    transform-origin: 50% 90%;
    animation:fade_in_up 6s ease-out forwards, flicker 1s ease-in-out alternate infinite;
}

@keyframes flicker {
    0% {
        transform: skewX(5deg);
        box-shadow: 0 0 10px rgba(255, 105, 180, 0.2), 0 0 20px rgba(255, 105, 180, 0.2), 0 0 60px rgba(255, 105, 180, 0.2), 0 0 80px rgba(255, 105, 180, 0.2);
    }
    25% {
        transform: skewX(-5deg);
        box-shadow: 0 0 10px rgba(255, 105, 180, 0.5), 0 0 20px rgba(255, 105, 180, 0.5), 0 0 60px rgba(255, 105, 180, 0.5), 0 0 80px rgba(255, 105, 180, 0.5);
    }
    50% {
        transform: skewX(10deg);
        box-shadow: 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(255, 105, 180, 0.3), 0 0 60px rgba(255, 105, 180, 0.3), 0 0 80px rgba(255, 105, 180, 0.3);
    }
    75% {
        transform: skewX(-10deg);
        box-shadow: 0 0 10px rgba(255, 105, 180, 0.4), 0 0 20px rgba(255, 105, 180, 0.4), 0 0 60px rgba(255, 105, 180, 0.4), 0 0 80px rgba(255, 105, 180, 0.4);
    }
    100% {
        transform: skewX(5deg);
        box-shadow: 0 0 10px rgba(255, 105, 180, 0.5), 0 0 20px rgba(255, 105, 180, 0.5), 0 0 60px rgba(255, 105, 180, 0.5), 0 0 80px rgba(255, 105, 180, 0.5);
    }
}

body2 {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000; /* Black background initially */
    color: #fff;
    font-family: Arial, sans-serif;
    text-align: center;
    transition: background-color linear 5s;
    overflow: hidden; /* Remove scrollbars */
}

.container {
    position: relative;
    width: 100%;
    height: 100%;
}

.button-container {
    position: absolute;
    bottom: 60px;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #ff1493; /* Deep pink */
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #ff69b4; /* Light pink on hover */
}

.peach {
    background-color: #f170a6; /* Initial peach color */
}

.peach-after {
    animation: peach_alive 8s infinite;
}

@keyframes peach_alive {
    0% {
        background-color: #f170a6; /* Soft Pink */
    }
    25% {
        background-color: #f8b5d6; /* Light Pink */
    }
    50% {
        background-color: #f8a5a8; /* Peachy Pink */
    }
    75% {
        background-color: #fdd4df; /* Very Light Pink */
    }
    100% {
        background-color: #f170a6; /* Soft Pink */
    }
}

.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader img{
    height: 100%;
}

.banner {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 355px; /* Adjust width as needed */
    height: 184px; /* Adjust height as needed */
    background-image: url('/images/banner.png'); /* Ensure path is correct */
    background-size: cover;
    background-position: center;
    z-index: 2;
    opacity: 1; /* Ensure banner starts visible */
}

@keyframes banner_come {
    0% {
        transform: translateX(-50%) translateY(-1000px) rotate(0deg);
        opacity: 0;
    }
    25% {
        transform: translateX(-50%) translateY(0px) rotate(5deg);
        opacity: 1;
    }
    50% {
        transform: translateX(-50%) translateY(50px) rotate(-5deg);
    }
    75% {
        transform: translateX(-50%) translateY(10px) rotate(3deg);
    }
    100% {
        transform: translateX(-50%) translateY(0px) rotate(0deg);
        opacity: 1; /* Ensure it stays visible */
    }
}

.banner-come {
    animation: banner_come 3s ease-out forwards;
}

.balloon {
    display: none; /* Initially hidden */
    position: absolute;
    top: -20px; /* Start from the bottom */
    transform: translateX(-50%);
    width: 200px; /* Responsive width */
    height: 768px; /* Maintain aspect ratio */
    opacity: 0;
    animation: fade_in_up 6s ease-out forwards; /* Slower fade in up animation */
}

.balloon-left {
    left: 80px;
    background-image: url('/images/balloon-border-left.png');
}

.balloon-right {
    right: -100px;
    background-image: url('/images/balloon-border-right.png');
}

@keyframes fade_in_up {
    0% {
        transform: translateX(-50%) translateY(200px);
        opacity: 0;
    }
    100% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
}

.balloons-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none; /* Allow clicks to pass through */
}

@keyframes floatUp {
    0% {
        transform: translateY(10vh) translateX(0) scale(1) rotate(var(--rotate-deg)); /* Start position off-screen */
        opacity: 1;
    }
    100% {
        transform: translateY(-120vh) translateX(calc(var(--horizontal-sway))) scale(1) rotate(var(--rotate-deg)); /* Move completely off-screen */
        opacity: 0.3;
    }
}

.single-balloon {
    position: absolute;
    bottom: -20px; /* Start off-screen */
    width: 80px;
    height: 120px;
    background-size: contain;
    background-repeat: no-repeat;
    animation: floatUp 10s linear infinite;
    opacity: 1;
    transform: rotate(0deg); /* Initial rotation */
    animation-timing-function: linear; /* Constant speed */
    --horizontal-sway: 0vw; /* Default value for horizontal sway */
    --rotate-deg: 0deg;
    will-change: transform, opacity;
}

@media (max-width: 768px) {
    .button-container {
        bottom: 20px;
    }
    .cake {
        bottom: 18%;
    }
    .navbar{
        border-radius: 0;
    }
    .navbar-content {
        display: none; /* Hide links on mobile */
        flex-direction: column;
        width: 100%;
        position: absolute;
        bottom: 100%;
        left: 0;
        background-color: #fbd7e9; /* Same light pink background */
        border-top: 1px solid #f8c6d6; /* Same border color */
    }
    .navbar-item {
        width: 100%;
        padding: 10px 2px 5px 2px;
    }
    .navbar-content.show {
        display: flex; /* Show links when toggled */
        gap: 0;
        border-radius: 20px 20px 0 0;
    }
    .navbar-toggle {
        display: block; /* Show toggle button on mobile */
    }
    button.navbar-toggle:hover {
        background-color: transparent; /* or any other style to negate the hover effect */
    }
    button.navbar-toggle:active{
        background-color: #ff69b4;
    }
}
        `}
      </style>
    </div>
  );
}

export default Page2;
