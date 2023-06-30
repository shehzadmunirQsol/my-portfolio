import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "~/styles";
import { exploreWorlds } from "~/constants";
import { staggerContainer } from "~/utils/motion";
// import { ExploreCard, TitleText, TypingText } from "../components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { client } from "../../../sanity_client";
import { TitleText, TypingText } from "../ui/CustomTexts";
import ExploreCard from "../ui/ExploreCard";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  const rowContainer = useRef<any>();
  const [scrollValue, setScrollValue] = useState<any>(0);
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  console.log(works, "works works");
  useEffect(() => {
    (async () => {
      const query = '*[_type == "works"]';

      await client.fetch(query).then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
    })();
  }, []);
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| My Projects" textStyles="text-center" />
        <TitleText title={<>My Personal Project</>} textStyles="text-center" />
        <div className="mb-1 flex w-full items-center justify-between">
          <p className="text-headingColor before:content relative from-orange-300 to-orange-600 text-2xl font-semibold capitalize transition-all ease-in-out before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-32 before:rounded-lg before:bg-gradient-to-tr"></p>
          <div className="hidden items-center gap-3 md:flex">
            <motion.div
              whileTap={{ scale: 0.65 }}
              onClick={() =>
                setScrollValue((previous) =>
                  Math.sign(previous) === -1 ? previous - 200 : 0 - 200
                )
              }
              className="group flex h-8  w-8 cursor-pointer items-center justify-center rounded-lg bg-white transition-all  duration-100 ease-in-out hover:bg-current hover:shadow-lg"
            >
              <MdChevronLeft className="text-lg text-black group-hover:text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.65 }}
              onClick={() =>
                setScrollValue((previous) =>
                  Math.sign(previous) != -1 ? previous + 200 : 0 + 200
                )
              }
              className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white transition-all duration-100 ease-in-out hover:bg-current hover:shadow-lg"
            >
              <MdChevronRight className="text-lg text-black group-hover:text-white" />
            </motion.div>
          </div>
        </div>
        <div
          ref={rowContainer}
          className=" flex min-h-[50vh] w-full  gap-2 overflow-y-hidden overflow-x-scroll scroll-smooth px-24 scrollbar-none lg:min-h-[50vh] lg:flex-row"
        >
          {works.map((world: any, index) => (
            <ExploreCard
              key={world._id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
