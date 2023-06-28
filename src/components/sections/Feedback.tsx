"use client";

import { motion } from "framer-motion";

import styles from "~/styles";
import { fadeIn, staggerContainer, zoomIn } from "~/utils/motion";
import { useEffect, useState } from "react";
import { client } from "../../../client";
import planet_09 from "~/public/planet-09.png";
import stamp from "~/public/SHEHZAD.png";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  console.log(testimonials, "testimonials");
  return (
    <section className={`${styles.paddings}`}>
      <div className=" flex w-full     overflow-y-hidden overflow-x-scroll scroll-smooth scrollbar-none ">
        {testimonials.length > 0 &&
          testimonials.map((item: any, index) => {
            return (
              <motion.div
                variants={staggerContainer}
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`mx-auto flex min-w-full flex-col gap-6 lg:flex-row`}
              >
                <motion.div
                  variants={fadeIn("right", "tween", 0.2, 1)}
                  className="gradient-05 relative flex flex-[0.5] flex-col justify-end rounded-[32px] border-[1px] border-[#6A6A6A] p-4 sm:p-8 lg:max-w-[370px]"
                >
                  <div className="feedback-gradient" />
                  <div>
                    <h4 className=" text-[26px] font-bold capitalize leading-[36.32px] text-white sm:text-[32px] sm:leading-[40.32px]">
                      {item?.name}
                    </h4>
                    <p className="mt-[8px] text-[12px] font-normal leading-[16.68px] text-white sm:text-[18px] sm:leading-[22.68px]">
                      {item?.company}
                    </p>
                  </div>

                  <p className="mt-[24px] text-[18px] font-normal leading-[39.6px] text-white sm:text-[24px] sm:leading-[45.6px]">
                    “{item?.feedback}”
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", "tween", 0.2, 1)}
                  className="relative flex flex-1 items-center justify-center"
                >
                  <img
                    src={planet_09.src}
                    alt="planet-09"
                    className="h-auto min-h-[210px] w-full rounded-[40px] object-cover lg:h-[610px]"
                  />

                  <motion.div
                    variants={zoomIn(0.4, 1)}
                    className="absolute -left-[10%] top-[3%] hidden lg:block"
                  >
                    <img
                      src={stamp.src}
                      alt="stamp"
                      className="h-[155px] w-[155px] object-contain"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
};

export default Feedback;
