import { motion, Variants } from "framer-motion";
import React from "react";
import { useRecoilValue } from "recoil";

import { showDrawerState } from "../utils/atoms";
import SideNav from "./SideNav";

interface DrawerProps {
  title: string;
  description: string;
  content: string;
  slug: string;
}

function Drawer({ description, content, slug, title }: DrawerProps) {
  const showDrawer = useRecoilValue(showDrawerState);

  const variants: Variants = {
    show: {
      opacity: 1,
      display: "block",
    },
    hide: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div
      animate={showDrawer ? "show" : "hide"}
      initial="hide"
      variants={variants}
      className="fixed top-0 left-0 pt-16 w-full h-full bg-white text-center lg:hidden"
    >
      <SideNav
        title={title}
        content={content}
        description={description}
        slug={slug}
      />
    </motion.div>
  );
}

export default Drawer;
