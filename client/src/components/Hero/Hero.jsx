import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            {/* <div className="orange-circle" /> */}
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Discover Your Dream Visit Now!
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span style={{ fontSize: "20px", marginLeft: "-2rem", color: "white", marginTop: "1rem" }}>Find a variety of properties that suit you very easily. Forget all difficulties in finding a residence for you</span>
          </div>


          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText" style={{ color: "white" }}>Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText" style={{ color: "white" }}>Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText" style={{ color: "white" }}>Awards Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
