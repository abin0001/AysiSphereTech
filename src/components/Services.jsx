// import { features } from "../constants";
// import styles, { layout } from "../style";
// import Button from "./Button";

// const FeatureCard = ({ icon, title, content, index }) => (
//   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
//     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
//       <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//     </div>
//     <div className="flex-1 flex flex-col ml-3">
//       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//         {title}
//       </h4>
//       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </div>
// );

// const Services = () =>  (
//   <section id="services" className={layout.section}>
//     <div className={layout.sectionInfo}>
//       <h2 className={`${styles.heading2} animate-pulse`}>
//         Our Services and Solutions
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//       From concept to execution, AysiSphere is your one-stop shop for all your technology needs.  We equip small and medium-sized businesses with the tools and expertise to thrive in the digital age.  Our comprehensive suite of services
//       </p>

//       <button type="button" className={`mt-16 animate-bounce py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none  ${styles}`}>
//          Explore our Services
//       </button>

//     </div>

//     <div className={`${layout.sectionImg} flex-col`}>
//       {features.map((feature, index) => (
//         <FeatureCard key={feature.id} {...feature} index={index} />
//       ))}
//     </div>
//   </section>
// );

// export default Services;





import { useEffect } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Services = () => {
  useEffect(() => {
    const paragraphObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInLeft");
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    const divObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInRight");
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    const paragraphTarget = document.querySelector("#services p");
    const divTarget = document.querySelector("#services .feature-cards-container");

    if (paragraphTarget) {
      paragraphObserver.observe(paragraphTarget);
    }

    if (divTarget) {
      divObserver.observe(divTarget);
    }

    // Cleanup observers on unmount
    return () => {
      if (paragraphTarget) {
        paragraphObserver.unobserve(paragraphTarget);
      }
      if (divTarget) {
        divObserver.unobserve(divTarget);
      }
    };
  }, []);

  return (
    <section id="services" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} animate-pulse`}>
          Our Services and Solutions
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From concept to execution, AysiSphere is your one-stop shop for all your technology needs. We equip small and medium-sized businesses with the tools and expertise to thrive in the digital age. Our comprehensive suite of services
        </p>

        <button type="button" className={`mt-10 animate-bounce py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
          Explore our Services
        </button>
      </div>

      <div className={`${layout.sectionImg} flex-col feature-cards-container`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
