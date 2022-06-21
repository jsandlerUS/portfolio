import React, {useState} from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Carousel, {CarouselItem} from "./Carousel";
import { useSelector} from "react-redux";


const ProjectDisplay = ({ display }) => {
  const [currentDisplay, setCurrentDisplay] = useState(display)
  const { breadCrumbs, flatDataFlow } = useSelector((state) => state);
  const lastCrumb = breadCrumbs[breadCrumbs.length - 1]

  // const onEnd = () => setIsVoicePlaying(false)
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    // onEnd,
  });
  const {images, github, viewLink} = currentDisplay
  const voice = voices[11];
  const text = "Hello, this is a test";

  const getParent = () =>{
    return flatDataFlow.map(item => {return(item.name === lastCrumb ? item.items : null)})
    .filter(item => item != null)
  }

  const updateDisplay = (flow) => {
    const parent = getParent()
    const positionInParent = parent[0].findIndex(item => item.name === currentDisplay.name)

    if (flow === 'previous' && positionInParent - 1 >= 0) setCurrentDisplay(parent[0][positionInParent - 1])
    else if (flow === 'previous') setCurrentDisplay(parent[0][parent[0].length - 1])
    else if (flow === 'next' && positionInParent + 1 < parent[0].length) setCurrentDisplay(parent[0][positionInParent + 1])
    else setCurrentDisplay(parent[0][0])
  };

  // console.log(images, currentDisplay)
  return (
    <div className="infoWindow-wrapper">
      <Carousel props ={{images, github, viewLink, name:currentDisplay.name}}>
      {images.map(img => <CarouselItem img={img} key={img}/>)}
      </Carousel>
            {currentDisplay.techStack !== undefined ? <div className="infoWindow-techStack">
        {currentDisplay.techStack.map((tech) => (
          <img src={tech} alt={tech}/>
        ))}
      </div> : null}
      <div className="infoWindow-description">
        {!supported ? <VolumeOffIcon /> : null}
        {supported && speaking ? (
          <VolumeOffIcon onClick={() => speak({ text, voice })} />
        ) : (
          <VolumeUpIcon onClick={() => cancel} />
        )}
        {currentDisplay.description}
      </div>
      <div className="infoWindow-button">
        <div onClick={() => updateDisplay('previous')}>
          <ArrowBackIcon/>
          {"Previous"}
        </div>
        <div onClick={() => updateDisplay('next')}>
          {"Next"}
          <ArrowForwardIcon  />
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
