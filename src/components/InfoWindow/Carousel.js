import React, { useEffect, useRef, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Carousel = ({ props }) => {
  console.log(props);
  const { images, github, viewLink } = props;
  const [image, setImage] = useState(images[0]);
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => autoPlayRef.current();
    setInterval(play, 12000);
  }, []);

  const nextSlide = () => {
    setCurrent(
      current === images.length - 1 ? 0 : current + 1,
      setImage(images[current])
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-links">
        <a href={github} target="_blank" rel="noreferrer noopener">
          <GitHubIcon />
        </a>
        <a href={viewLink} target="_blank" rel="noreferrer noopener">
          <OpenInNewIcon />
        </a>
      </div>

      <img src={image} className="carousel-image" alt={"carousel Image"} />
      <div className="loader__element"></div>
    </div>
  );
};

export default Carousel;
