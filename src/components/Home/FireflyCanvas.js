import React, { useRef, useEffect, useState } from "react";
import useWindowDimensions from '../Reusable/useWindowDimensions'

const FireflyCanvas = (props) => {
  const canvasRef = useRef(null);
  let canvas = null;
  let ctx = null;
  const {w, h} = useWindowDimensions()
  const [height, setHeight] = useState(h);
  const [width, setWidth] = useState(w);

  const [f, setF] = useState([]);

  class Firefly extends React.Component {
    constructor() {
      super();
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.s = Math.random() * 2;
      this.ang = Math.random() * 2 * Math.PI;
      this.v = (this.s * this.s) / 4;
    }
    move() {
      this.x += this.v * Math.cos(this.ang);
      this.y += this.v * Math.sin(this.ang);
      this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
    }
    show() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
      ctx.fillStyle = "#fddba3";
      ctx.fill();
    }
  }

  const draw = () => {
    if (f.length < 500) {
      for (let j = 0; j < 80; j++) {
        setF(f.push(new Firefly()));
      }
    }
    //animation
    for (let i = 0; i < f.length; i++) {
      f[i].move();
      f[i].show();
      if (f[i].x < 0 || f[i].x > width || f[i].y < 0 || f[i].y > height) {
        f.splice(i, 1);
      }
    }
  };

  const resizeCanvas = (c) => {
    if (c.width !== width || c.height !== height) {
      var scale = window.devicePixelRatio;
    //   const { devicePixelRatio:scale=1 } = window
      c.width = width * scale;
      c.height = height * scale;
      const context = c.getContext("2d");
      context.scale(scale, scale);
    }
  };

  const initCanvas = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    resizeCanvas(canvas)
    ctx.fillStyle = "rgba(30,30,30,1)";
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    initCanvas();
  }, []);

  //   useEffect
  const getAnimationFrame = () =>{
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback);
      }
    );
  };

  useEffect(() => {
    console.log('resize init')
    const getWindowDimensions = () => {
      const { innerWidth, innerHeight } = window;
      setHeight(innerHeight);
      setWidth(innerWidth);
    };
    window.addEventListener("resize", getWindowDimensions);
  }, []);

console.log(height, width)

  useEffect(() => {
      console.log('interval init')
    const interval = setInterval(() => {
      let animationFrameId;
      const loop = () => {
        ctx.clearRect(0, 0, width, height);
        resizeCanvas(canvas);
        draw();
        animationFrameId = getAnimationFrame();
      };

      loop();
      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, []);

  return <canvas className="firefly" ref={canvasRef} {...props} />;
};

export default FireflyCanvas;
