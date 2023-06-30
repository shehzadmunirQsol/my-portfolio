import { motion } from "framer-motion";

import styles from "~/styles";
import { navVariants } from "~/utils/motion";
import search from "~/public/search.svg";
import menu from "~/public/menu.svg";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src={search.src}
        alt="search"
        className="h-[24px] w-[24px] object-contain"
      />
      <h2 className="text-[24px] font-extrabold leading-[30.24px] text-white">
        PORTFOLIO
      </h2>
      <img
        src={menu.src}
        alt="menu"
        className="h-[24px] w-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
