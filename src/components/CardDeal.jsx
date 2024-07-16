// import { card } from "../assets";
// import styles, { layout } from "../style";
// import Button from "./Button";

// const CardDeal = () => (
//   <section className={layout.section}>
//     <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         Find a better card deal <br className="sm:block hidden" /> in few easy
//         steps.
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
//         aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
//       </p>

//       <Button styles={`mt-10`} />
//     </div>

//     <div className={layout.sectionImg}>
//       <img src={card} alt="billing" className="w-[100%] h-[100%]" />
//     </div>
//   </section>
// );

// export default CardDeal;
import React from 'react';
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";import styles, { layout } from "../style";
import Button from "./Button";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

// Logging image paths to verify imports
console.log(card1, card2, card3);

const cardImages = [card1, card2, card3];

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        These are my works
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Description of your works goes here.
      </p>
      <Button className="mt-20" />
    </div>
    <div className={`${layout.sectionImg} px-1 md:px-0 max-w-4xl mx-auto`}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // seconds interval
        transitionTime={1000} // 1 second transition
        stopOnHover={true}
        emulateTouch={true}
        showStatus={false} // hide status indicators
        showIndicators={false} // hide slide indicators
        className="custom-carousel" // custom class for styling
        centerMode={true} // enable center mode for single slide
        centerSlidePercentage={75} // the center slide takes up 75% of carousel width
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button 
              type="button" 
              onClick={onClickHandler} 
              title={label} 
              className="absolute left-0 top-1/2  select-nonetransform -translate-y-1/2 text-white h-[100%] p-2 z-10 transition duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
              }}
            >
              &lt;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button 
              type="button" 
              onClick={onClickHandler} 
              title={label} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 h-[100%] transition duration-300 z-10 hover:scale-110"
              style={{
                background: 'linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
              }}
            >
              &gt;
            </button>
          )
        }
        itemClass="carousel-item" // custom class for slide item
        renderThumbs={() => {}} // disable thumbs navigation
      >
        {cardImages.map((image, index) => (
          <div key={index} className="carousel-slide px-4">
            <img src={image} alt={`card${index + 1}`} className="carousel-image rounded-lg mx-auto" />
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default CardDeal;