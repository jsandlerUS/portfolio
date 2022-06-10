import React from "react";
const Fog = ({position}) => {

  const fogStyle = position === 'front' ? 'fogwrapper fogwrapper__front' : 
  position === 'back' ? 'fogwrapper fogwrapper__back' : 'fogwrapper fogwrapper__fixed'
  // const setFogIndex = () => {
  //   return { zIndex: `${Math.random() * 10}` };
  // };
  return (
    <React.Fragment>
      <div className={fogStyle}>
        <div id="foglayer_01" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_02" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_03" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Fog;
