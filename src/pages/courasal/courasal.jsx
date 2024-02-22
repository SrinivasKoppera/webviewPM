// import React, { useRef, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { pmBookLogo } from "../../assets/images/attemptspageimage";
// import "./courasal.css";

// const Carousel = () => {
//   const images = [pmBookLogo, pmBookLogo, pmBookLogo, pmBookLogo, pmBookLogo];

//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div>
//       <Slider {...settings} className="login-page-slider">
//         {images.map((image, index) => (
//           <div key={index} className="login-page-slider-container">
//             <img
//               src={image}
//               alt={`Slide${index + 1}`}
//               className="login-page-courasal-image"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;

// /////////////////////////////////////////////////////////////////////////////////

// // useEffect(() => {
// //   // Calculate the width of the first image and set it as the width of the Slider
// //   const firstImage =
// //     sliderRef.current?.slickList?.childNodes[0]?.childNodes[0];
// //   if (firstImage) {
// //     const imageWidth = firstImage.offsetWidth;
// //     sliderRef.current.slickList.style.width = `${imageWidth}px`;
// //   }
// // }, []);
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pmBookLogo } from "../../assets/images/attemptspageimage";
import "./courasal.css";

const Carousel = () => {
  const images = [pmBookLogo, pmBookLogo, pmBookLogo, pmBookLogo, pmBookLogo];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="login-page-slider-container">
      <Slider {...settings} className="login-page-slider">
        {images.map((image, index) => (
          <div key={index} className="login-page-slider-item">
            <img
              src={image}
              alt={`Slide${index + 1}`}
              className="login-page-courasal-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
