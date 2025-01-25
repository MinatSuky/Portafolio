import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = 'Seebastian Gomez'; // Texto completo

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index)); // Asegura que solo se agregue una letra válida
        index++;
      } else {
        clearInterval(typingInterval); // Detener intervalo al completar
        setTimeout(() => setShowCursor(false), 500); // Ocultar cursor después de 2 segundos
      }
    },130);

    return () => clearInterval(typingInterval); // Limpiar intervalo si se desmonta el componente
  }, []);

  return (
    <p className="text-[#2cdfff] custom-shadow font-bold text-5xl mt-2">
      <span>{text}</span>
      {showCursor && <span className="cursor animate-blink">|</span>}
    </p>
  );
};

export default TypingAnimation;
