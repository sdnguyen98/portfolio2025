import React, { useEffect, useRef } from 'react';
import useWindow from './useWindow';

export default function Scene() {
  const { dimension } = useWindow();
  const canvas = useRef();

  useEffect(() => {
    if (dimension.width > 0) {
      init();
    }
  }, [dimension]);

  const init = () => {
    const ctx = canvas.current.getContext('2d');

    
  };
  const manageMouseMove = (e) => {
    const { clientX, clientY} = e;
    draw(clientX, clientY, 50)

}
const draw = (x, y, radius) => {

    const ctx = canvas.current.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "rgba(205, 4, 255, 0.13)"; 
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

}
  

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