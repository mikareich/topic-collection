import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

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
      <div className="fixed w-full bg-blue-100 h-2 mb-2">
        <div
          className="w-1/3 h-2 bg-blue-500 transition"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
