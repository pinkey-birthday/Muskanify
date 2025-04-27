import { useEffect, useRef } from 'react';

const colors = ['#ef476f', '#06d6a0', '#118ab2', '#ffbe0b'];

function Confetti() {
  const containerRef = useRef(null);

  useEffect(() => {
    const createConfettiPiece = () => {
      const piece = document.createElement('div');
      piece.classList.add('confetti-piece');
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      const animationType = Math.random() > 0.5 ? 'down' : 'downTwo';
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 3 - 1.5;
      piece.style.animation = `${animationType} ${duration}s linear infinite`;
      piece.style.animationDelay = `${delay}s`;
      piece.style.left = `${Math.random() * 100}vw`;
      return piece;
    };

    for (let i = 0; i < 50; i++) {
      const piece = createConfettiPiece();
      containerRef.current.appendChild(piece);
    }
  }, []);

  return <div className="confetti" ref={containerRef}></div>;
}

export default Confetti;
