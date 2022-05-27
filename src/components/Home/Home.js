import React, { useState } from "react";
// import FireflyCanvas from './FireflyCanvas'
import RoundFog from "./RoundFog";
import PieDisplay from "./PieDisplay";
import MaxWindow from "./MaxWindow";
import TurbulentWater from "./TurbulentWater";
import Fog from "./Fog";
import InfoWindow from "../InfoWindow/InfoWindow";
import BreadCrumbs from "./BreadCrumbs";
import MusicPlay from "./MusicPlay";
// import ClickAwayListener from '@mui/base/ClickAwayListener';

import { useSelector, useDispatch } from "react-redux";
import { getFlatArray } from "../Reusable/functions";

const getFullScreen = () => {
  return 1 >= window.outerHeight - window.innerHeight;
};

const Home = () => {
  const { dataFlow, breadCrumbs } = useSelector((state) => state);
  console.log(breadCrumbs)
  const [display, setDisplay] = useState(dataFlow[0].items.map((item) => item));
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [currentDisplay, setCurrentDisplay] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(getFullScreen());
  const flatDataFlow = getFlatArray(dataFlow);
  const dispatch = useDispatch();

  const showWindow = (e) => {
    // console.log(e)
    e.name === currentDisplay.name && isWindowOpen
      ? setIsWindowOpen(false)
      : setCurrentDisplay(e, setIsWindowOpen(true));
  };

  const exitAlert = () => {
    setIsFullScreen(true);
  };

  // console.log("isWindowOpen", isWindowOpen);

  const updateDisplay = (elem) => {
    const search = flatDataFlow
      .map((item) => (item.name === elem ? item : null))
      .filter((item) => item != null);
    const crumb = elem;
    if(breadCrumbs.indexOf(elem) > -1){
      dispatch({ type: "DELETE_CRUMBS", crumb })
      setIsWindowOpen(false)
    }
    dispatch({ type: "UPDATE_CRUMBS", crumb })
    setDisplay(search[0].items)
  };

  return (
    <React.Fragment>
      {!isFullScreen ? (
        <MaxWindow exitAlert={() => exitAlert()} />
      ) : (
        <div className="home-background">
          <MusicPlay />
          <BreadCrumbs setDisplay={(e) => updateDisplay(e)} breadCrumbs={breadCrumbs} />
          <Fog />
          <TurbulentWater />
          {/* <FireflyCanvas/> */}
          <div className="logo">
            <div className="logo-text" onClick={() => updateDisplay("Home")}>
              JS <br />
              DESIGNS
            </div>
            <PieDisplay
              updateDisplay={(e) => updateDisplay(e)}
              showWindow={(e) => showWindow(e)}
              display={display}
            />
            <RoundFog />
          </div>
          {isWindowOpen ? <InfoWindow display={currentDisplay} /> : null}
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;

{
  /* {isWindowOpen ? 
            <ClickAwayListener onClickAway={()=>setIsWindowOpen(false)}>
              <InfoWindow display={currentDisplay} ref={ref}/>
              </ClickAwayListener>
          : null} */
}
