import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";

import headingsState from "../utils/atoms";

interface HeadingProps {
  level: number;
  id: string;
}

function Heading({ level, id, children }: PropsWithChildren<HeadingProps>) {
  const setPositions = useSetRecoilState(headingsState);

  const [encodedId] = useState(encodeURI(id));
  const className = "pt-12";

  const headingRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (!headingRef.current) return;

    setPositions((old) => [...old, headingRef.current]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const props = {
    id: encodedId,
    className,
    ref: headingRef,
  };

  switch (level) {
    case 1:
      return <h1 {...props}>{children}</h1>;

    case 2:
      return <h2 {...props}>{children}</h2>;

    case 3:
      return <h3 {...props}>{children}</h3>;

    case 4:
      return <h4 {...props}>{children}</h4>;

    case 5:
      return <h5 {...props}>{children}</h5>;

    case 6:
      return <h6 {...props}>{children}</h6>;

    default:
      return null;
  }
}

export default Heading;
