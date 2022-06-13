import React from "react";
import ContactDisplay from "./ContactDisplay";
import AboutDisplay from "./AboutDisplay";
import ProjectDisplay from "./ProjectDisplay";

const InfoWindow = ({display, showWindow}) => {
  // console.log(display.name);
  return (
    <div className='infoWindow'>
      <div className="infoWindow-exit" onClick={() => showWindow(false)}>X</div>
      {display.name === "Contact" ? (
        <ContactDisplay display={display} />
      ) : display.name === "About" ? (
        <AboutDisplay display={display} />
      ) : (
        <ProjectDisplay display={display} />
      )}
    </div>
  );
};

export default InfoWindow;
