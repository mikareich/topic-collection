import { PencilIcon } from "@heroicons/react/solid";
import React from "react";

import Link from "./Link";
import TableOfContents from "./TableOfContents";

interface SideNavProps {
  description: string;
  content: string;
}

function SideNav({ description, content }: SideNavProps) {
  return (
    <div className="text-sm flex flex-col h-screen -mt-24 pt-24">
      <h2 className="uppercase font-semibold tracking-wide mb-2 mt-8">
        Beschreibung
      </h2>
      <p className="text-gray-500">{description}</p>

      <h2 className="uppercase font-semibold tracking-wide mb-2 mt-8">
        Auf dieser Seite
      </h2>

      <TableOfContents content={content} />

      <div className="m-auto mb-0">
        <Link href="https://github.com">
          <div className="flex">
            <PencilIcon width={14} className="flex-shrink-0 mr-1" />
            <span className="truncate">Bearbeite diese Seite</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
