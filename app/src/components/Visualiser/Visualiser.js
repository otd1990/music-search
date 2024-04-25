import React, { useEffect, useRef, useState } from "react";
import "./visualiser.css";

const Visualizer = ({ isPlaying }) => {
  const visualizerRef = useRef(null);
  const numberOfBars = 64;
  const [animationIntervalId, setAnimationIntervalId] = useState(null);

  useEffect(() => {
    console.log("use effect");
    const animateBars = () => {
      const bars = visualizerRef.current.children;
      for (let i = 0; i < bars.length; i++) {
        const height = Math.floor(Math.random() * 100);
        bars[i].style.height = `${height}%`;

        if (i % 2 === 0) {
          bars[i].style.transform = "translateY(25%)";
        }
      }
    };

    const startAnimation = () => {
      const intervalId = setInterval(animateBars, 100);
      setAnimationIntervalId(intervalId);
    };

    const stopAnimation = () => {
      const bars = visualizerRef.current.children;
      clearInterval(animationIntervalId);
      setAnimationIntervalId(null);

      for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = "";
        bars[i].style.transform = "";
      }
    };

    if (isPlaying) {
      startAnimation();
    } else {
      stopAnimation();
    }

    return () => {
      stopAnimation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return (
    <div className="visualiser-container">
      <div id="visualizer" ref={visualizerRef}>
        {Array.from({ length: numberOfBars }).map((_, index) => (
          <div key={index} className="bar"></div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
