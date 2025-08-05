import React, { useEffect, useRef, useState } from "react";
import useWindow from "./useWindow";

export default function Scene() {
  const { dimension } = useWindow();
  const canvas = useRef();
  const [currentColor, setCurrentColor] = useState("rgba(205, 4, 255, 0.13)");
  const pathIntervalRef = useRef(null);

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

  // Generate random color
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random() * 0.3 + 0.1; // Alpha between 0.1 and 0.4
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  // Generate random path
  const drawRandomPath = () => {
    if (!canvas.current || dimension.width > 640) return;

    const ctx = canvas.current.getContext("2d");
    const pathLength = Math.random() * 200 + 100; // Path length between 50-250px
    const segments = Math.floor(Math.random() * 10) + 5; // 5-15 segments
    const startX = Math.random() * dimension.width;
    const startY = Math.random() * dimension.height;

    ctx.globalCompositeOperation = "darken";
    ctx.strokeStyle = getRandomColor();
    ctx.lineWidth = Math.random() * 20 + 15; // Line width between 5-25
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(startX, startY);

    let currentX = startX;
    let currentY = startY;

    for (let i = 0; i < segments; i++) {
      const angle = Math.random() * Math.PI * 2;
      const segmentLength = pathLength / segments;
      currentX += Math.cos(angle) * segmentLength * (Math.random() * 0.5 + 0.5);
      currentY += Math.sin(angle) * segmentLength * (Math.random() * 0.5 + 0.5);

      // Keep within canvas bounds
      currentX = Math.max(0, Math.min(dimension.width, currentX));
      currentY = Math.max(0, Math.min(dimension.height, currentY));

      ctx.lineTo(currentX, currentY);
    }

    ctx.stroke();
  };

  // Handle screen size changes and random path drawing
  useEffect(() => {
    // Clear any existing interval
    if (pathIntervalRef.current) {
      clearInterval(pathIntervalRef.current);
      pathIntervalRef.current = null;
    }

    if (dimension.width <= 640 && dimension.width > 0) {
      // Start drawing random paths for mobile screens
      pathIntervalRef.current = setInterval(() => {
        drawRandomPath();
      }, Math.random() * 500); // Random interval between 0.5-2.5 seconds
    } else if (dimension.width > 640 && canvas.current) {
      // Clear canvas when resizing to larger screen
      const ctx = canvas.current.getContext("2d");
      ctx.clearRect(0, 0, dimension.width, dimension.height);
    }

    return () => {
      if (pathIntervalRef.current) {
        clearInterval(pathIntervalRef.current);
        pathIntervalRef.current = null;
      }
    };
  }, [dimension.width, dimension.height]);

  const init = () => {
    const ctx = canvas.current.getContext("2d");
  };

  const prevPosition = useRef(null);
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    // Only handle mouse movement for larger screens
    if (dimension.width <= 640) return;

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
