import React from "react";
import Worm from "./Worm.js";

const LoadPage = ({ isLoaded }) => {
  return (
    <React.Fragment>
      <div className="load-container">
        <Worm />
        <div className="load-logo">
          <div className="logo-text" onClick={() => isLoaded(true)}>
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
        <div className="load-frame frame-top" />
        <div className="load-frame frame-bottom" />
      </div>
    </React.Fragment>
  );
};

export default LoadPage;
