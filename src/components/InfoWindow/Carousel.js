import React, { useEffect, useRef, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Carousel = ({ props }) => {
  // console.log(props);
  const { images, github, viewLink, name } = props;
  const [image, setImage] = useState(images[0]);
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => autoPlayRef.current();
    name !== "Your\nCompany" ?
    setInterval(play, 12000) : setInterval(play, 500);
  }, []);

  const nextSlide = () => {
    setCurrent(
      current === images.length - 1 ? 0 : current + 1,
      setImage(images[current])
    );
  };

  console.log(github)
  return (
    <div className="carousel">
      
        <div className="carousel-links">
        {github !==  undefined ? <a href={github} target="_blank" rel="noreferrer noopener">
            <GitHubIcon />
          </a> : null}
          {viewLink !==  undefined ? <a href={viewLink} target="_blank" rel="noreferrer noopener">
            <OpenInNewIcon />
          </a> : null}
        </div> 

      <img src={image} className="carousel-image" alt={"carousel Image"} />
      {images.length > 1 ? <div className="loader__element"></div> : null}
    </div>
  );
};

export default Carousel;
