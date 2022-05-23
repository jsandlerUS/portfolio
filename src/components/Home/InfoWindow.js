import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const InfoWindow = ({ display }) => {
  // const onEnd = () => setIsVoicePlaying(false)
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    // onEnd,
  });

  const voice = voices[11];

  const text = 'Hello, this is a test'

  if (display.name === "contact") {
    //display little form with Social media quick buttons
  }

  return (
    <div className="infoWindow">
        <div className="infoWindow-wrapper">
      <img
        src={display.image}
        className="infoWindow-image"
        alt={display.name}
      />
      <div className="infoWindow-techStack">
        {display.techStack.map(tech => <div key={tech}>{tech}</div>)} <div>{`Team size: ${display.team}`}</div>
      </div>
      <div className="infoWindow-description">
        {!supported ? <VolumeOffIcon /> : null}
        {supported && speaking ? (
          <VolumeOffIcon onClick={()=> speak({ text, voice })} />
        ) : (
          <VolumeUpIcon onClick={() => cancel} />
        )}
        {display.description}
      </div>
      <div className="infoWindow-button">
        <div>
          <ArrowBackIcon />
          {"Previous"}
        </div>
        <div>
          {"Next"}
          <ArrowForwardIcon />
        </div>
      </div>
      </div>
    </div>
  );
};

export default InfoWindow;
