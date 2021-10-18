import NextLink from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";

import { colorState } from "../utils/atoms";

interface LinkProps {
  href: string;
  active?: boolean;
}

function Link({
  href,
  active = false,
  children,
}: React.PropsWithChildren<LinkProps>) {
  const color = useRecoilValue(colorState);
  return (
    <NextLink passHref href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className={`text-gray-500 hover:text-${color}-500 transition 
                    ${active && `text-${color}-500`}`}
      >
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
