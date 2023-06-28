"use client";

import { motion } from "framer-motion";

import styles from "~/styles/index";
import { fadeIn } from "~/utils/motion";
import { urlFor } from "../../../client";
import headset from "~/public/headset.svg";

const ExploreCard = ({
  _id,
  imgUrl,
  description,
  title,
  index,
  active,
  handleClick,
}: any) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === _id
        ? "min-w-[300px] flex-[10] md:min-w-[380px] lg:flex-[3.5]"
        : "min-w-[200px] flex-[2] lg:flex-[1]"
    } flex h-[700px] cursor-pointer  items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex`}
    onClick={() => handleClick(_id)}
  >
    <img
      src={urlFor(imgUrl)}
      alt="planet-04"
      className="absolute h-full max-w-full rounded-[24px] bg-white    object-cover"
    />

    {active !== _id ? (
      <h3 className="glassmorphism absolute bottom-0  z-0 flex h-[200px] max-w-full origin-[0,0] rotate-[-90deg] items-center justify-center  rounded-l-md bg-black   p-4 text-center text-[16px] font-semibold  text-slate-800 sm:text-[22px]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)] p-8">
        <div
          className={`${styles.flexCenter} glassmorphism mb-[16px] h-[60px] w-[60px] rounded-[24px]`}
        >
          <img
            src={headset.src}
            alt="headset"
            className="h-1/2 w-1/2 object-contain"
          />
        </div>
        <p className="text-[16px] font-normal uppercase leading-[20.16px] text-white">
          {description}
        </p>
        <h2 className="mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
