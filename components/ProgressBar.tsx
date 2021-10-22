import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { colorState, showDrawerState } from "../utils/atoms";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const color = useRecoilValue(colorState);
  const [showDrawer, setShowDrawer] = useRecoilState(showDrawerState);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const calculateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);

    setProgress(scrollPercent);
  };

  useEffect(() => window.addEventListener("scroll", calculateProgress), []);

  return (
    <div className="h-2">
      <div className="fixed w-full lg:h-2 h-16 z-10">
        <div className={`w-full bg-${color}-100 h-2`}>
          <div
            className={`h-2 bg-${color}-500 transition`}
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <button
          type="button"
          className={`float-right m-2 p-2 bg-${color}-100 rounded lg:hidden`}
          onClick={toggleDrawer}
        >
          {showDrawer ? (
            <XIcon width={24} height={24} className={`text-${color}-500`} />
          ) : (
            <MenuAlt3Icon
              width={24}
              height={24}
              className={`text-${color}-500`}
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
