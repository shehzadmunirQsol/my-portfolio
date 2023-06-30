

import { motion } from "framer-motion";

import styles from "~/styles";
import { fadeIn, staggerContainer } from "~/utils/motion";
import { TypingText } from "../ui/CustomTexts";
import arow_down from "~/public/arrow-down.svg";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-secondary-white mt-[8px] text-center text-[20px] font-normal sm:text-[32px]"
      >
        I am <span className="font-extrabold text-white">Shehzad Munir</span> ,
        a skilled <span className="font-extrabold text-white">MERN</span> Stack
        Developer with expertise in Express.js, React.js, databases, and
        illustration. With a BS-IT degree and DAE in Electrical Engineering, I
        have gained valuable experience working at TCS, Anomoz Software, and
        Marktech Pro. I have been recognized for my contributions and receiving
        personal appreciation from prestigious figures. I am dedicated to
        delivering high-quality solutions and thrive in collaborative
        environments. I am eager to contribute my expertise to impactful
        development projects.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src={arow_down.src}
        alt="arrow down"
        className="mt-[28px] h-[28px] w-[18px] object-contain"
      />
    </motion.div>
  </section>
);

export default About;
