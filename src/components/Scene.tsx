import React, { useEffect, useRef, useState } from "react";
import useWindow from "./useWindow";

export default function Scene() {
  const { dimension } = useWindow();
  const canvas = useRef();
  const [currentColor, setCurrentColor] = useState("rgba(205, 4, 255, 0.13)");

  useEffect(() => {
    if (dimension.width > 0) {
      init();
    }
  }, [dimension]);

  useEffect(() => {
    // Define an array of colors to cycle through
    const colors = ["rgba(205, 4, 255, 0.13)", "rgba(255, 205, 4, 0.13)", "rgba(4, 63, 255, 0.13)"];

    // Set up a timer to change the color every 10 seconds
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 5000); // 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const init = () => {
    const ctx = canvas.current.getContext("2d");
  };

  const prevPosition = useRef(null);
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;

    if (prevPosition.current != null) {
      const { x, y } = prevPosition.current;

      for (let i = 0; i < nbOfCircles; i++) {
        const targetX = lerp(x, clientX, (1 / nbOfCircles) * i);
        const targetY = lerp(y, clientY, (1 / nbOfCircles) * i);

        draw(targetX, targetY, 125);
      }
    }

    prevPosition.current = {
      x: clientX,
      y: clientY,
    };
  };

  const draw = (x, y, radius) => {
    const ctx = canvas.current.getContext("2d");
    ctx.globalCompositeOperation = "darken";
    ctx.beginPath();
    ctx.fillStyle = currentColor; // Use the current color
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <div className="scene-container">
      {dimension.width === 0 && <div className="overlay" />}
      <canvas
        id="sceneCanvas"
        onMouseMove={manageMouseMove}
        ref={canvas}
        height={dimension.height}
        width={dimension.width}
      />
    </div>
  );
}
