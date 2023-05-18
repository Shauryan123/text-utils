import React, { useEffect, useState } from 'react';

const TextRotator = () => {
  const texts = ['What we Are ? ', 'Whats our Future ?', 'What we represent ?']; // Array of texts to rotate
  const intervalTime = 2000; // Interval time in milliseconds

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setFade(true); // Enable fading effect
      setTimeout(() => setFade(false), 500); // Disable fading effect after 500 milliseconds
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex]);

  return <h1 className="my-3" style={{color:'white', transition: 'opacity 0.5s ease-in-out', opacity: fade ? 0 : 1 }}>{currentText}</h1>;
};

export default TextRotator;