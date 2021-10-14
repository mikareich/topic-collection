import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import generateToc from "../utils/generateToc";
import Link from "./Link";

interface TableOfContentsProps {
  content: string;
}

function TableOfContents({ content }: TableOfContentsProps) {
  const [toc] = useState(generateToc(content));

  return (
    <ol className="text-gray-500">
      {toc.map(({ slug, title }) => (
        <li className="my-4" key={slug}>
          <Link href={`#${slug}`}>
            <div className="flex">
              <ArrowRightIcon width={14} className="flex-shrink-0 mr-1" />
              <span className="truncate">{title}</span>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default TableOfContents;
