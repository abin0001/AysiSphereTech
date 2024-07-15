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
import card3 from "../assets/card3.png";
import styles, { layout } from "../style";
import Button from "./Button";
import Slider from "react-slick";        
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

console.log('Imported Images:', { card1, card2, card3 });

const cardImages = [card1, card2, card3];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const CardDeal = () => (
  <section className={layout.section} >
    <div className={layout.sectionInfo}>
    </div>

    <div className={layout.sectionImg}>
      <Slider {...settings}>
        {cardImages.map((image, index) => (

          console.log(image)

        ))}
      </Slider>
    </div>
  </section>
);

export default CardDeal;