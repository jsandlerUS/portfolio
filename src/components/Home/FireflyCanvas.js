// import React, { useRef, useEffect, useState } from 'react'

// const FireflyCanvas = props => {
//     let [c, setC] = useState()
//     let [w, setW] = useState()
//     let [h, setH] = useState()

//     const canvasRef = useRef(null)

//     let [x, setX] = useState()
//     let [y, setY] = useState()
//     let [s, setS] = useState()
//     let [ang, setAng] = useState()
//     let [v, setV] = useState()


//     useEffect = (()=>{
//         setC(initCanvas())

//     },[canvasRef])



//     const Firefly = () => {
//         setX(Math.random()*w)
//         setY(Math.random()*h)
//         setS(Math.random()*2)
//         setAng(Math.random()*2*Math.PI)
//         setV(s*s/4)
//     const move = () =>{
//       x += v*Math.cos(ang);
//       y += v*Math.sin(ang);
//       ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
//     }
//     const show = () => {
//       c.beginPath();
//       c.arc(x,y,s,0,2*Math.PI);
//       c.fillStyle="#fddba3";
//       c.fill();
//     }
//   }
  
//   let f = [];
  
//   const draw = () => {
//     if(f.length < 100){
//       for(let j = 0; j < 10; j++){
//        f.push(Firefly);
//     }
//        }
//     //animation
//     for(let i = 0; i < f.length; i++){
//       f[i].move();
//       f[i].show();
//       if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
//          f.splice(i,1);
//          }
//     }
//   }
  
//   let mouse = {};
//   let last_mouse = {};
  
//   canvas.addEventListener(
//     "mousemove",
//      (e) => {
//       last_mouse.x = mouse.x;
//       last_mouse.y = mouse.y;
  
//       mouse.x = e.pageX - e.offsetLeft;
//       mouse.y = e.pageY - e.offsetTop;
//     },
//     false
//   );

  
//   window.requestAnimFrame = (() => {
//     return (
//       window.requestAnimationFrame ||
//       window.webkitRequestAnimationFrame ||
//       window.mozRequestAnimationFrame ||
//       window.oRequestAnimationFrame ||
//       window.msRequestAnimationFrame ||
//       function(callback) {
//         window.setTimeout(callback);
//       }
//     );
//   });
  
//   const loop = () => {
//     window.requestAnimFrame(loop);
//     c.clearRect(0, 0, w, h);
//     draw();
//   }
  
//   window.addEventListener("resize", function() {
//     (w = canvas.width = window.innerWidth),
//     (h = canvas.height = window.innerHeight);
//     loop();
//   });
  
//   loop();
//   setInterval(loop, 1000 / 60);


//   const initCanvas = () => {
//     let canvas = canvasRef.current
//     setC(canvas.getContext("2d"))
//     w = (canvas.width = window.innerWidth)
//     h = (canvas.height = window.innerHeight)
//     setW(w)
//     setH(h)
//     c.fillStyle = "rgba(30,30,30,1)"
//     c.fillRect(0, 0, w, h)
//     return c;
// } //done

//     return (
//         <canvas className='firefly' ref={canvasRef} {...props}></canvas> //done
//     )
// }



// export default FireflyCanvas;