import { useSpeechSynthesis } from "react-speech-kit";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

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
      <div className="about-title"> Welcome!</div>
      <img src={display.image} className="about-image" alt={display.name} />
      <div className="about-description">{display.description}</div>
    </div>
  );
};

export default AboutDisplay;
