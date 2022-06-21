import React, { useState } from "react";
import FireflyCanvas from "./FireflyCanvas";
import RoundFog from "./RoundFog";
import PieDisplay from "./PieDisplay";
import MaxWindow from "./MaxWindow";
import TurbulentWater from "./TurbulentWater";
import Fog from "./Fog";
import InfoWindow from "../InfoWindow/InfoWindow";
import BreadCrumbs from "./BreadCrumbs";
import MusicPlay from "./MusicPlay";
import ClickAwayListener from "@mui/base/ClickAwayListener";


import { useSelector, useDispatch } from "react-redux";

const getFullScreen = () => {
  return 1 >= window.outerHeight - window.innerHeight;
};

const Home = () => {
  const { dataFlow, breadCrumbs, flatDataFlow } = useSelector((state) => state);
  const [display, setDisplay] = useState(dataFlow[0].items.map((item) => item));
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [currentDisplay, setCurrentDisplay] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(getFullScreen());
  const dispatch = useDispatch();

  const showWindow = (e) => {
    if (typeof e === "boolean") setIsWindowOpen(e);
    else if (e.name === currentDisplay.name && isWindowOpen)
      setIsWindowOpen(false);
    else setCurrentDisplay(e, setIsWindowOpen(true));
  };

  const exitAlert = () => {
    setIsFullScreen(true);
  };

  const updateDisplay = (elem) => {
    const search = flatDataFlow
      .map((item) => (item.name === elem ? item : null))
      .filter((item) => item != null);
    const crumb = elem;
    if (breadCrumbs.indexOf(elem) > -1) {
      dispatch({ type: "DELETE_CRUMBS", crumb });
      showWindow(false);
    }
    dispatch({ type: "UPDATE_CRUMBS", crumb });
    setDisplay(search[0].items);
  };

  return (
    <React.Fragment>
      {!isFullScreen ? (
        <MaxWindow exitAlert={() => exitAlert()} />
      ) : (
        <div className="home-background">
          {/* finish projects texts, fix wholesale */}
          {/* add support to browsers */}
          {/* maybe remove the android */}
          {/* connect the github portfolio to the domain */}
          {/* add audio-reactive wrapper to affect everything except InfoWindow and audio controlers */}
          {/* move all pictures to a database */}
          {/* convert using Nextjs */}
          <Fog position={"back"}/>
          <div className="forest-ground"/>
          <MusicPlay />
          <BreadCrumbs
            setDisplay={(e) => updateDisplay(e)}
            breadCrumbs={breadCrumbs}
          />
          <FireflyCanvas/>
          <div className="forest-trees"/>
          <TurbulentWater/>
          <Fog position={"front"}/>
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
          {isWindowOpen ? (
            <ClickAwayListener onClickAway={() => setIsWindowOpen(false)}>
              <div>
                <InfoWindow
                  display={currentDisplay}
                  showWindow={(e) => showWindow(e)}
                />
              </div>
            </ClickAwayListener>
          ) : null}
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
