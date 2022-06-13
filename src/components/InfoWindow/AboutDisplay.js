import { useSpeechSynthesis } from "react-speech-kit";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import firework from '../../resources/Gifs/fireworks.gif'
import DownloadIcon from '@mui/icons-material/Download';
import resume from '../../resources/JonathanSandlerResume.pdf';
import React from "react";

const AboutDisplay = ({ display }) => {
  // const onEnd = () => setIsVoicePlaying(false)
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    // onEnd,
  });

  const voice = voices[11];

  const text = "Hello, this is a test";


  return (
    <div className="about-wrapper">
      {!supported ? <VolumeOffIcon /> : null}
      {supported && speaking ? (
        <VolumeOffIcon onClick={() => speak({ text, voice })} />
      ) : (
        <VolumeUpIcon onClick={() => cancel} />
      )}
      <div className="about-title"> <img src={firework}/>&nbsp;Welcome!&nbsp;<img src={firework} /></div>
      {/* <img src={display.image} className="about-image" alt={display.name} /> */}
      <div className="about-description">{display.description}</div>
      <div></div>
      <a href={resume} download="JonathanSandlerResume.pdf" className="about-resume">Download my Resume <DownloadIcon/></a>
    </div>
  );
};

export default AboutDisplay;
