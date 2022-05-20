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
          <div>
            JS <br />
            DESIGNS
          </div>
          {/* filter out the inside of the pie from the logo display, maybe move this outside the logo div? */}
          <PieDisplay ref={ref} showWindow={() => showWindow()} />
          <RoundFog />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
