import { motion, Variants } from "framer-motion";
import React from "react";
import { useRecoilValue } from "recoil";

import { showDrawerState } from "../utils/atoms";
import SideNav from "./SideNav";

interface DrawerProps {
  description: string;
  content: string;
}

function Drawer({ description, content }: DrawerProps) {
  const showDrawer = useRecoilValue(showDrawerState);

  const variants: Variants = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      animate={showDrawer ? "show" : "hide"}
      initial="hide"
      variants={variants}
      className="fixed top-0 left-0 pt-16 w-full h-full bg-white text-center lg:hidden"
    >
      <SideNav content={content} description={description} />
    </motion.div>
  );
}

export default Drawer;
