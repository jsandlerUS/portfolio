import React, { useState, useRef } from "react";
// import FireflyCanvas from './FireflyCanvas'
import RoundFog from "./RoundFog";
import PieDisplay from "./PieDisplay";

const Home = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const ref = useRef();

  const showWindow = () => {
    setIsWindowOpen(!isWindowOpen);
  };

  console.log("isWindowOpen", isWindowOpen);

  return (
    <React.Fragment>
      <div className="home-background">
        {/* <FireflyCanvas/> */}
        <div className="logo">
        <PieDisplay ref={ref} showWindow={() => showWindow()} />
          <div>
            JS <br />
            DESIGNS
          </div>
          <RoundFog />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
