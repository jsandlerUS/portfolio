import React from "react";
const Fog = () => {
  const setFogIndex = () => {
    return { zIndex: `${Math.random() * 10}` };
  };
  return (
    <React.Fragment>
      <div className="fogwrapper">
        <div id="foglayer_01" className="fog" style={setFogIndex()}>
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_02" className="fog" style={setFogIndex()}>
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_03" className="fog" style={setFogIndex()}>
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Fog;
