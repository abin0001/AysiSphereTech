// import styles from "../style";
// import Button from "./Button";

// const CTA = () => (
//   <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
//     <div className="flex-1 flex flex-col">
//       <h2 className={styles.heading2}>Let’s try our service now!</h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         Everything you need to accept card payments and grow your business
//         anywhere on the planet.
//       </p>
//     </div>

//     <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
//       <Button />
//     </div>
//   </section>
// );

// export default CTA;


import styles from "../style";

const CTA = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button className="animate-bounce py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transform transition-transform duration-300 hover:scale-125">
        <a href="https://wa.me/918122354855" target="_blank" rel="noopener noreferrer" className="button-class">
        Get Started
      </a>
      </button>
    </div>
  </section>
);

export default CTA;
