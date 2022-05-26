import React from "react";
import ContactDisplay from "./ContactDisplay";
import AboutDisplay from "./AboutDisplay";
import ProjectDisplay from "./ProjectDisplay";

const InfoWindow = ({ display }) => {
  console.log(display.name);
  return (
    <div className="infoWindow">
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
