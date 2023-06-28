"use client";

import { motion } from "framer-motion";

import styles from "~/styles";
// import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "~/utils/motion";
import { TitleText, TypingText } from "../ui/CustomTexts";
import map from "~/public/map.png";
import people_01 from "~/public/people-01.png";
import people_02 from "~/public/people-02.png";
import people_03 from "~/public/people-03.png";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={<>My Clients Around the globe</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex h-[550px] w-full"
      >
        <img src={map.src} alt="map" className="h-full w-full object-cover" />

        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <img src={people_01.src} alt="people" className="h-full w-full" />
        </div>

        <div className="absolute left-20 top-10 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <img src={people_02.src} alt="people" className="h-full w-full" />
        </div>

        <div className="absolute left-[45%] top-1/2 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <img src={people_03.src} alt="people" className="h-full w-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
