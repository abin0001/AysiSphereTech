import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[100%] h-[70%] rounded-full blue__gradient" />
      <div className="absolute z-[0] w-[100%] h-[50%] -left-1/2 bottom-0 rounded-full blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Tech for Tomorrow's <br className="sm:block hidden" /> Businesses
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We see the future of business, and it's built on innovation. We're not just a tech company; we're a strategic partner, helping small and medium-sized businesses leverage the power of next-generation technology to thrive in a rapidly evolving landscape.</p>
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] mt-5 outline-none ${styles}`}>
       Let's Explore us
      </button>

    </div>
  </section>
);

export default Billing;
