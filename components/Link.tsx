/* import NextLink from "next/link";
import React, { ReactFragment } from "react";

interface LinkProps {
  href: string;
  icon?: ReactFragment | undefined;
}

function Link({ href, icon, children }: React.PropsWithChildren<LinkProps>) {
  return (
    <NextLink passHref href={href}>
     
      <a
        href="#"
        className="text-gray-500 hover:text-blue-500 rounded transition flex items-center"
      >
        {icon && <div className="mr-1">{icon}</div>}
        <div className="truncate flex-1">{children}</div>
      </a>
    </NextLink>
  );
}

export default Link;
 */

import NextLink from "next/link";
import React, { ReactFragment } from "react";

interface LinkProps {
  href: string;
  icon?: ReactFragment | undefined;
}

function Link({ href, icon, children }: React.PropsWithChildren<LinkProps>) {
  return (
    <NextLink passHref href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className="text-gray-500 hover:text-blue-500 rounded transition"
      >
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
