import NextLink from "next/link";
import React from "react";

interface LinkProps {
  href: string;
  active?: boolean;
}

function Link({
  href,
  active = false,
  children,
}: React.PropsWithChildren<LinkProps>) {
  return (
    <NextLink passHref href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className={`text-gray-500 hover:text-blue-500 transition 
                    ${active && "text-blue-500"}`}
      >
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
