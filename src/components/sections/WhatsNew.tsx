import { motion } from "framer-motion";

import styles from "~/styles";
import { newFeatures } from "~/constants";
// import { NewFeatures, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "~/utils/motion";
import { TitleText, TypingText } from "../ui/CustomTexts";
import NewFeatures from "../ui/NewFeatures";
import whats_new from "~/public/whats-new.png";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-[0.95] flex-col justify-center"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What's new?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={whats_new.src}
          alt="get-started"
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
