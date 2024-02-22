import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "./mobile-image-slider.css";

const carouselCardData = [
  {
    id: 1,
    gdpYear: "1964",
    GDP: 29700,
    image:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
    name: "Srinivas",
  },
  {
    id: 2,
    gdpYear: "1964",
    GDP: 29700,
    image:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
    name: "Srinivas",
  },
  {
    id: 3,
    gdpYear: "1964",
    GDP: 29700,
    image:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
    name: "Srinivas",
  },
  {
    id: 4,
    gdpYear: "1964",
    GDP: 29700,
    image:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
    name: "Srinivas",
  },
  {
    id: 5,
    gdpYear: "1964",
    GDP: 29700,
    image:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
    name: "Srinivas",
  },
];

const carouselImageData = [
  "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
  "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481895/6_cu6dyf.png",
  "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481888/7_1_d6tsk8.png",
  "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481839/8_upchcc.png",
  "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481810/9_q08fpp.png",
];

const MobileImageSlider = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleLeftArrowPress = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleRightArrowPress = () => {
    if (currentCardIndex < carouselImageData.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="mobile-landing-page-image-container">
      {!(currentCardIndex === 0) ? (
        <span>
          {/* <Text>--</Text> */}
          <FaArrowLeft className="left-arrow" onClick={handleLeftArrowPress} />
        </span>
      ) : (
        <span disabled={currentCardIndex === 0} onClick={handleLeftArrowPress}>
          {/* <Text style={styles.disableLeftaArrow}>--</Text> */}

          <FaArrowLeft className="left-arrow disable-left-arrow" />
        </span>
      )}
      <div className="landing-page-carousel">
        <div className="card-container">
          <div className="card-styles">
            <p className="card-number-text">{`#${currentCardIndex + 1}`}</p>
            <p className="gdp-year"> GDP at the end of 1964</p>
            <p className="card-GDP-text">
              27502 <span>Cr</span>
            </p>
            <img
              src={carouselImageData[currentCardIndex]}
              className="card-image"
            />
            <p className="card-person-name">Dhruv J</p>
          </div>
        </div>
      </div>
      {!(currentCardIndex === carouselCardData.length - 1) ? (
        <span onClick={handleRightArrowPress}>
          {/* <Text style={styles.rightArrow}>--</Text> */}
          <FaArrowRight className="right-arrow" />
        </span>
      ) : (
        <span
          disabled={currentCardIndex === carouselImageData.length - 1}
          onClick={handleRightArrowPress}
        >
          <FaArrowRight className="right-arrow disable-right-arrow" />
          {/* <Text>--</Text> */}
        </span>
      )}
    </div>
  );
};

export default MobileImageSlider;
