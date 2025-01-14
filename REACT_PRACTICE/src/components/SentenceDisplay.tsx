import { useState, useEffect } from 'react';

const SentenceDisplay = () => {
  const sentences = [
    "Yusuf Mustapha Opeyemi and Emmanuel Unigwe are the creators of ShopMeMart.",
    "ShopMeMart is developed as part of the ALX Webstack portfolio project.",
    "Step into our store and explore a diverse range of products designed to meet all your needs.",
    "From trendy fashion to essential home goods, our platform is designed to provide a seamless shopping experience.",
    "ShopMeMart will undergo numerous changes and improvements over time to enhance user experience.",
    "For now, users can shop conveniently and have their products delivered right to their doorstep.",
    "We are committed to evolving our platform to better serve our customers and meet their shopping needs."
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
