// import styles from "../style";
// import { star, robot } from "../assets";
// import GetStarted from "./GetStarted";

// const Hero = () => {
//   return (
//     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
//         <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
//           <img src={star} alt="discount" className="w-[16px] h-[16px]" />
//           <p className={`${styles.paragraph} ml-2`}>
//             <span className="text-white">AysiSphere Infotech</span> :
//           </p>
//         </div>

//         <div className="flex flex-row justify-between items-center w-full">
//           <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
//           <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">Technology</span>{" "}
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr-0">
//             <GetStarted />
//           </div>
//         </div>

//         <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
//         for Every Small Business.
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//            We're not just about technology; we're about growth. Our expert team unlocks the potential of your business with next-generation microservices. We break down complex solutions into bite-sized, manageable pieces, allowing you to scale, innovate, and dominate your market.
//         </p>
//       </div>

//       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//         <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] animate-floatUp rounded-br-[100px] " />

//         {/* gradient start */}
//         <div className="absolute z-[0] w-[100%] h-[25%] top-20 pink__gradient" />
//         <div className="absolute z-[1] w-[150%] h-[50%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[250%] h-[50%] right-20 bottom-20 blue__gradient" />
//         {/* gradient end */}
//       </div>

//       <div className={`ss:hidden ${styles.flexCenter}`}>
//         <GetStarted />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useEffect } from "react";
import styles from "../style";
import { star, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  useEffect(() => {
    const paragraphObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    const paragraphTarget = document.querySelector("#home p");

    if (paragraphTarget) {
      paragraphObserver.observe(paragraphTarget);
    }

    // Cleanup observer on unmount
    return () => {
      if (paragraphTarget) {
        paragraphObserver.unobserve(paragraphTarget);
      }
    };
  }, []);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={star} alt="discount" className="w-[16px] h-[16px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">AysiSphere Infotech</span> :
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Technology</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          for Every Small Business.
        </h1>
        <p className={`${styles.paragraph} animate-fadeIn max-w-[470px] mt-5`}>
          We're not just about technology; we're about growth. Our expert team unlocks the potential of your business with next-generation microservices. We break down complex solutions into bite-sized, manageable pieces, allowing you to scale, innovate, and dominate your market.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] animate-floatUp rounded-br-[100px]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[100%] h-[25%] top-20 pink__gradient" />
        <div className="absolute z-[1] w-[150%] h-[50%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[250%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
