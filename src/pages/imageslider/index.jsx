import React, { useState, useEffect } from 'react';
import './index.css';

const images = [
  'https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png',
  'https://res.cloudinary.com/dzxemuctv/image/upload/v1701481895/6_cu6dyf.png',
  'https://res.cloudinary.com/dzxemuctv/image/upload/v1701481888/7_1_d6tsk8.png',
  'https://res.cloudinary.com/dzxemuctv/image/upload/v1701481839/8_upchcc.png',
  'https://res.cloudinary.com/dzxemuctv/image/upload/v1701481810/9_q08fpp.png',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      <div className="marquee">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index + 1}`} className='sliderImage' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
