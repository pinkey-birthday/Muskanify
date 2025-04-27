import { useEffect } from 'react';

function AudioPlayer() {
  useEffect(() => {
    const audio = document.getElementById('background-audio');

    const playAudio = () => {
      if (audio) {
        audio.play().catch((error) => console.log('Autoplay prevented:', error));
      }
    };

    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
    };
  }, []);

  return (
    <audio id="background-audio" src="/Happy Birthday.mp3" preload="auto" autoPlay loop />
  );
}

export default AudioPlayer;
