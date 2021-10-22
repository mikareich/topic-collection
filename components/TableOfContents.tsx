import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { headingsState } from "../utils/atoms";
import generateToc from "../utils/generateToc";
import Link from "./Link";

interface TableOfContentsProps {
  content: string;
}

function TableOfContents({ content }: TableOfContentsProps) {
  const [toc] = useState(generateToc(content));
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0);

  const headings = useRecoilValue(headingsState);

  const updatePosition = () => setCurrentScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
  }, []);

  return (
    <ol className="text-gray-500">
      {toc.map(({ id, title }) => {
        const headingIndex = headings.findIndex((heading) => heading.id === id);
        const heading = headings[headingIndex];
        const nextHeading = headings[headingIndex + 1];

        const isActive =
          // First heading
          (headingIndex === 0 &&
            currentScrollPosition < nextHeading?.offsetTop) ||
          // Last heading (no next heading)
          (headingIndex === headings.length - 1 &&
            heading?.offsetTop < currentScrollPosition) ||
          // Scroll position between current and next heading
          (heading?.offsetTop <= currentScrollPosition &&
            currentScrollPosition < nextHeading?.offsetTop);

        return (
          <li className="my-4" key={id}>
            <Link href={`#${id}`} active={isActive}>
              <div className="flex w-min mx-auto lg:mx-0">
                <ArrowRightIcon width={14} className="flex-shrink-0 mr-1" />
                <span className="truncate">{title}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export default TableOfContents;
