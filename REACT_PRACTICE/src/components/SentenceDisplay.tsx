import { useState, useEffect } from 'react';

const SentenceDisplay = () => {
  const sentences = [
    "Step into our store and explore a diverse range of products designed to meet all your needs",
    "From trendy fashion to essential home goods, we have everything you need under one roof",
    "Our knowledgeable staff is always ready to assist you in finding the perfect items for your lifestyle",
    "Enjoy exclusive deals and promotions that make shopping with us even more rewarding",
    "Join our loyal customer community and experience the joy of shopping where quality meets affordability"
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className="sentence-display" style={{ fontStyle: 'italic' }}>
      {sentences[currentSentenceIndex]}
    </div>
  );
};

export default SentenceDisplay;
