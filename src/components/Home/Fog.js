import React from "react";
const Fog = ({position}) => {

  const fogStyle = position === 'front' ? 'fogwrapper fogwrapper__front' : 
  position === 'back' ? 'fogwrapper fogwrapper__back' : 'fogwrapper fogwrapper__fixed'
  // const setFogIndex = () => {
  //   return { zIndex: `${Math.random() * 10}` };
  // };
  return (
    <React.Fragment>
      {position === 'fixed' ?
            <div className="fogwrapper fogwrapper__fixed">
            <div   className="fog foglayer_01">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div   className="fog foglayer_02">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div   className="fog foglayer_03">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div   className="fog foglayer_04">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
          </div> : 
            null}
      {/* {position === 'front' ?
            <div className="fogwrapper fogwrapper__front">
            <div   className="fog foglayer_01">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div   className="fog foglayer_02">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div   className="fog foglayer_03">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div   className="fog foglayer_04">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
          </div> : null} */}
          {position === 'back' ?
            <div className="fogwrapper fogwrapper__back">
            <div   className="fog foglayer_01">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div   className="fog foglayer_02">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div   className="fog foglayer_03">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
          </div> : null}
    </React.Fragment>
  );
};

export default Fog;
