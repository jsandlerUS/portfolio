import React from "react";
import Worm from "../Landing/Worm.js";

const LoadPage = ({ closeFrames }) => {

  return (
    <div className="load-container">
          <Worm />
          <div className="load-logo">
            <div className="logo-text" onClick={() => closeFrames()}>
              <p>JS</p>
              <p>DESIGNS</p>
              <p>start</p>
            </div>
            <div className="waves">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="load-cube" />
    </div>
  );
};

export default LoadPage;
